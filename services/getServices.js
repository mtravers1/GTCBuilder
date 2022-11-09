import axios from "axios";
const baseURL = process.env.AUTH_BASEURL;

export const getProtectedData = async (path, token) => {
  try {
    const { data } = await axios.get(`${baseURL}${path}`, {
      headers: {
        token,
      },
    });
    return data;
  } catch (error) {
    console.log(error?.response);
    // console.log(error?.response?.data?.error?.message);
    return error?.response?.data;
  } finally {
  }
};

export const getData = async (path) => {
  try {
    const { data } = await axios.get(`${baseURL}${path}`);
    return data;
  } catch (error) {
    console.log(error?.response);
    // console.log(error?.response?.data?.error?.message);
    return error?.response?.data;
  } finally {
  }
};
