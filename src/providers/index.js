import axios from 'axios';

class APIProvider {
  constructor() {
    if (!!APIProvider.instance) {
      return APIProvider.instance;
    }

    APIProvider.instance = this;
  }

  get(url) {
    return axios.get(url);
  }

  post(url, data) {
    return axios.post(url, data);
  }

  // Otras funciones de solicitud de HTTP

}

const apiProvider = new APIProvider();

export default apiProvider;
