import axios from "axios";

export const instanceAuth = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL_AUTH}`,
  });