import * as Yup from 'yup';

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

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { id: delivery_id } = req.params;
    const { description } = req.body;

    const problem = await DeliveriesProblems.create({
      delivery_id,
      description,
    });

    return res.json(problem);
  }
}

export default new DeliveryProblemsController();
