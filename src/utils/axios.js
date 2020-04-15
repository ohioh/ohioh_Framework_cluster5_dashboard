import axios from 'axios';
import { cookies } from 'utils';

const jwtToken = cookies.get('KsadJwtToken');

if (jwtToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
}
