import Mail from '../../lib/Mail';

class CanceledDeliveryEmail {
  get key() {
    return 'CanceledDeliveryEmail';
  }

  async handle({ data }) {
    const { delivery, problem } = data;
    const { deliveryman, recipient, product } = delivery;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda cancelada',
      template: 'canceledDelivery',
      context: {
        deliveryman: deliveryman.name,
        product,
        problem,
        recipient: recipient.name,
        street: recipient.street,
        house_number: recipient.house_number,
        complement: recipient.complement || '-',
        city: recipient.city,
        state: recipient.state,
        zip: recipient.zip,
      },
    });
  }
}

export default new CanceledDeliveryEmail();
