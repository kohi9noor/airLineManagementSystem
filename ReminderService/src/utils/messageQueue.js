const amqlib = require("amqplib");
const {
  EXCHANGE_NAME,
  REMINDER_BINDING_KEY,
  MESSSAGE_BROKER_URL,
} = require("../config/serverConfig");

const createChannel = async () => {
  try {
    const connection = await amqlib.connect(MESSSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
    return channel;
  } catch (error) {
    console.log(error);
  }
};

const subscribeMessage = async (channel, servie, binding_key) => {
  const applicationQuoque = await channel.assertQueue("QUEUE_NAME");
  channel.bindQueue(applicationQuoque.queue, EXCHANGE_NAME, binding_key);

  channel.consume(application.queue, (msg) => {
    console.log("received data");
    console.log(msg.content.toString);
    channel.ack(msg);
  });
};

const publishMessage = async (channel, binding_key, message) => {
  try {
    channel.publish(EXCHANGE_NAME, binding_key, buffer.from(message));
  } catch (error) {
    throw error;
  }
};
module.exports = {
  subscribeMessage,
  createChannel,
  publishMessage,
};
