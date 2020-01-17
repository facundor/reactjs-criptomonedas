import axios from "axios";

class CriptoService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

   async getCoins() {
    const resultado = await axios.get(this.apiUrl);
    return resultado.data.Data;
  }

   async getCoinPrice(url) {
    const price = await axios.get(url)
    return price;
  }
}

export default CriptoService;