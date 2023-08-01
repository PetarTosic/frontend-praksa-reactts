import { API } from "../shared/api";

export const getWorkers = () => {
  return API.get('/workers').then(res => res.data);
}