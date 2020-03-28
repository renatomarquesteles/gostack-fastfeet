import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { id: deliveryman_id } = req.params;

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id,
      },
      attributes: ['id', 'product', 'status'],
      limit: 10,
      offset: (page - 1) * 10,
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

    return res.json(deliveries);
  }
}

export default new DeliverymanDeliveriesController();
