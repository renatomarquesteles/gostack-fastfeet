import DeliveriesProblems from '../models/DeliveriesProblems';

class DeliveryProblemsController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { id: delivery_id } = req.params;

    const problems = await DeliveriesProblems.findAll({
      where: {
        delivery_id,
      },
      attributes: ['id', 'description'],
      limit: 10,
      offset: (page - 1) * 10,
      order: [['id', 'DESC']],
    });

    return res.json(problems);
  }
}

export default new DeliveryProblemsController();
