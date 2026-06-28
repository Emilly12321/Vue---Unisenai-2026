import axios from 'axios';

const API_KEY = 'cbf13b03bc28d64cc3c9b5f2d801a4f5';

export async function buscarClima(cidade) {
  return axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: cidade,
      appid: API_KEY,
      units: 'metric',
      lang: 'pt_br'
    }
  });
}