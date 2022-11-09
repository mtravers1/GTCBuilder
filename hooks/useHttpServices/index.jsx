import { useState } from "react";
import axios from "axios";

import { useCookies } from "react-cookie";


export const useHttpServices = () => {
  const baseURL = process.env.AUTH_BASEURL;
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({});
  const [cookies, setCookie] = useCookies(["token"]);
  const postData = async (path, body) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${baseURL}${path}`, body);

      return data;
    } catch (error) {
      //  error?.response
      console.log(error?.response);
      return error?.response?.data;
    } finally {
      setIsLoading(false);
    }
  };
  const postProtectedData = async (path, body) => {
    try {
      setIsLoading(true);
      const { token } = cookies;

      const { data } = await axios.post(`${baseURL}${path}`, body, {
        token,
      });
      return data;
    } catch (error) {
      return { error: error?.response?.data };
    } finally {
      setIsLoading(false);
    }
  };
  const getProtectedData = async (path, token) => {
    try {
      const { data } = await axios.get(`${baseURL}/${path}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      // console.log(error?.response?.status);
      // console.log(error?.response?.data?.error?.message);
      return error?.response?.data;
    } finally {
      setIsLoading(false);
    }
  };
  const getData = async (path) => {
    try {
      const { data } = await axios.get(`${baseURL}/${path}`);
      return data;
    } catch (error) {
      // console.log(error?.response?.status);
      // console.log(error?.response?.data?.error?.message);
      return error?.response?.data;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    postData,
    postProtectedData,
    getProtectedData,
    payload,
    getData,
  };
};
