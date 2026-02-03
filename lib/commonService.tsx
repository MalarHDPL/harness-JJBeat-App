import api from "./axiosClient";

// Generic type for query params
type Params = Record<string, any> | undefined;

// GET request
export const getRequest = async (url: string, params?: Params) => {
  const res = await api.get(url, { params });
  return res;
};

// POST request
export const postRequest = async (
  url: string,
  payload?: any,
  params?: Params
) => {
  console.log("first");
  const res = await api.post(url, payload, { params });
  console.log(res, "=======>");
  return res;
};

// PUT request
export const putRequest = async (
  url: string,
  payload?: any,
  params?: Params
) => {
  const res = await api.put(url, payload, { params });
  return res;
};

// DELETE request
export const deleteRequest = async (url: string, params?: Params) => {
  const res = await api.delete(url, { params });
  return res;
};

// PATCH request
export const patchRequest = async (
  url: string,
  payload?: any,
  params?: Params
) => {
  const res = await api.patch(url, payload, { params });
  return res;
};
