import { Request, Response } from 'express';
import { banksWithLogos } from '../helpers/add-img-url';
import { MonoResponse } from '../utils/MonoResponse';

const getAllBanks = (req: Request, res: Response): Response => {
  return res
    .status(200)
    .json(
      new MonoResponse(200, 'Successfully retrieved all banks', banksWithLogos)
    );
};

const getBankByName = (req: Request, res: Response): void => {
  const { key } = req.query;

  if (!key) {
    res
      .status(400)
      .json(
        new MonoResponse(400, 'Error. You must provide a key to filter by', [])
      );
  }
  const regex = new RegExp(`${key}`, 'ig');

  // filter by search query
  const filteredBanks = banksWithLogos.filter((bank) => bank.name.match(regex));
  res
    .status(200)
    .json(
      new MonoResponse(
        200,
        'Successfully retrieved filtered banks',
        filteredBanks
      )
    );
};

export { getAllBanks, getBankByName };
