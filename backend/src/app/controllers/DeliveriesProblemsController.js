import DeliveriesProblems from '../models/DeliveriesProblems';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliveriesProblemsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveries = await DeliveriesProblems.findAll({
      attributes: ['id', 'description'],
      limit: 10,
      offset: (page - 1) * 10,
      order: [['id', 'DESC']],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'status',
            'start_date',
            'end_date',
            'canceled_at',
          ],
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
        },
      ],
    });

    return res.json(deliveries);
  }
}

export default new DeliveriesProblemsController();
