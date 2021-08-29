import { Request, Response } from 'express';
import { banksWithLogos } from '../helpers/add-img-url';
import { MonoResponse } from '../utils/MonoResponse';
import {
  getFilteredBanksResponse,
  getResponseIfNoKeyProvided
} from './banks.helpers';

const getAllBanks = (req: Request, res: Response): Response => {
  try {
    return res
      .status(200)
      .json(
        new MonoResponse(200, 'Successfully retrieved all banks', banksWithLogos)
      );
  } catch (error) {
    console.log(error)
    throw new Error("Sorry, something went wrong");
  }

};

const getBanksByName = (req: Request, res: Response): void => {
  try {
    const key = req?.query?.key as string;
    getResponseIfNoKeyProvided(res, key);
    getFilteredBanksResponse(res, key);
  } catch (error) {
    console.log(error)
    throw new Error("Sorry, something went wrong");
  }
};

export { getAllBanks, getBanksByName };
