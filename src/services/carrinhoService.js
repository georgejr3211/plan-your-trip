import Axios from "axios";

export default class CarrinhoService {
  baseUrl = 'http://localhost:3001';

  getAll() {
    try {
      const result = Axios.get(`${this.baseUrl}/carrinho`);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
