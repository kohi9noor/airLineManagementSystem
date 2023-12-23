const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepo {
  async getAllTickets() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      throw { error };
    }
  }

  async createTicket(data) {
    try {
      const response = await NotificationTicket.create(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async get(filter) {
    try {
      const ticket = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });

      return ticket;
    } catch (error) {
      throw { error };
    }
  }

  async updateTicket(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) {
        ticket.status = data.status;
      }
      await ticket.save();
      return ticket;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TicketRepo;
