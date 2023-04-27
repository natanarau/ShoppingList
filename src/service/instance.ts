import axios from "axios";

export const instanceAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL,
  });