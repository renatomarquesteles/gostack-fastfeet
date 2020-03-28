import Mail from '../../lib/Mail';

class NewDeliveryEmail {
  get key() {
    return 'NewDeliveryEmail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'newDelivery',
      context: {
        deliveryman: deliveryman.name,
        product,
        recipient: recipient.name,
        street: recipient.street,
        house_number: recipient.house_number,
        complement: recipient.complement || '-',
        state: recipient.state,
        city: recipient.city,
        zip: recipient.zip,
      },
    });
  }
}

export default new NewDeliveryEmail();
