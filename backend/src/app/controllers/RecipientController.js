import { Op } from 'sequelize';
import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, name = '' } = req.query;

    const recipient = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + name + '%',
        },
      },
      attributes: [
        'id',
        'name',
        'street',
        'house_number',
        'city',
        'state',
        'complement',
        'zip',
      ],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      house_number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      house_number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    await recipient.update(req.body);

    const updatedRecipient = await Recipient.findByPk(req.params.id);

    return res.json(updatedRecipient);
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    recipient.destroy();

    return res.status(204).send();
  }
}

export default new RecipientController();
