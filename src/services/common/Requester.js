import Axios from 'axios';

export class Requester {
  get = url => {
    return Axios.get(url);
  };
}
