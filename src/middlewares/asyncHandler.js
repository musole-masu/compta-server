import { request, response } from "express";

export const asyncHandler =
  (cb) =>
  async (req = request, res = response) => {
    try {
      await cb(req, res);
    } catch (error) {
      return console.log(error);
    }
  };
