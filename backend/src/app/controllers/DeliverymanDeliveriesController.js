import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { page = 1, delivered = false } = req.query;
    const { id: deliveryman_id } = req.params;

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id,
      },
      attributes: [
        'id',
        'product',
        'status',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      limit: 10,
      offset: (page - 1) * 10,
      order: [['id', 'DESC']],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'city', 'state'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'name', 'url'],
        },
      ],
    });

    if (delivered) {
      const deliveredDeliveries = await deliveries.filter(
        delivery => delivery.status === 'delivered'
      );

      return res.json(deliveredDeliveries);
    }

    const openDeliveries = await deliveries.filter(delivery => {
      return delivery.status !== 'canceled' && delivery.status !== 'delivered';
    });

    return res.json(openDeliveries);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { delivery_id, deliveryman_id } = req.params;

    if (req.body.start_date) {
      const todayDeliveries = await Delivery.findAll({
        where: {
          deliveryman_id,
          start_date: {
            [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
          },
        },
      });

      if (todayDeliveries.length >= 5) {
        return res
          .status(400)
          .json({ error: "Reached today's delivery limit" });
      }
    }

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.deliveryman_id !== +deliveryman_id) {
      return res
        .status(400)
        .json({ error: 'Delivery not assigned to this Deliveryman' });
    }

    const { start_date, end_date, signature_id } = req.body;

    await delivery.update({ start_date, end_date, signature_id });

    const updatedDelivery = await Delivery.findByPk(delivery_id, {
      attributes: ['id', 'product', 'status', 'start_date', 'end_date'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'city', 'state'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'name', 'url'],
        },
      ],
    });

    return res.json(updatedDelivery);
  }
}

export default new DeliverymanDeliveriesController();
