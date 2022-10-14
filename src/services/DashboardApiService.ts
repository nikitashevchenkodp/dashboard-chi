import { CustomerItem, TickerItem } from '../utils/consts';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

class DashbordApiService {
  _baseUrl = 'http://localhost:3003/';

  getResource = async (url: string, options?: any) => {
    const res = await fetch(`${this._baseUrl}${url}`, options);
    if (!res.ok) throw new Error('Something goes wrong!');
    return res.json();
  };

  getTickets = async () => {
    await delay(1000);
    return await this.getResource('tickets');
  };

  getCustomers = async () => {
    await delay(1000);
    return await this.getResource('customers');
  };

  getCustomer = async (id: number) => {
    await delay(500);
    return await this.getResource(`customers/${id}`);
  };

  getTicker = async (id: number) => {
    await delay(500);
    return await this.getResource(`tickets/${id}`);
  };

  delTicket = async (id: number) => {
    await delay(500);
    return await this.getResource(`tickets/${id}`, {
      method: 'DELETE',
    });
  };

  delCustomer = async (id: number) => {
    await delay(500);
    return await this.getResource(`customers/${id}`, {
      method: 'DELETE',
    });
  };

  addCustomer = async (customer: CustomerItem) => {
    await delay(500);
    return await this.getResource(`customers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
  };
  editCustomer = async (customer: CustomerItem) => {
    await delay(500);
    return await this.getResource(`customers/${customer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
  };

  addTicker = async (customer: TickerItem) => {
    await delay(500);
    return await this.getResource(`tickets/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
  };

  editTicker = async (customer: TickerItem) => {
    await delay(500);
    return await this.getResource(`tickets/${customer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
  };
}

export const dashboardApi = new DashbordApiService();
