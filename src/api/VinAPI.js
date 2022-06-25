import { API } from './APIConfig';

export const VINSearchAPI = async (vin) => {
  let response = await API.get(`/model?vin=${vin}`);
  return response.data;
}