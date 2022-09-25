import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "http://localhost:4000/",
  headers: {
    accept: "application/json",
    "content-type": "application/json; charset=utf-8",
  },
});
