import { instance } from "../axios";

const baseUrl = "/api/zh-tw";

export const fetchAttractions = (): Promise<unknown[]> =>
  instance.get(`${baseUrl}/Attractions/All`).then((response) => response.data);
