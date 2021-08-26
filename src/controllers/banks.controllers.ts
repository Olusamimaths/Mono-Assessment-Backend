import { Request, Response } from 'express';
import { banksWithLogos } from '../helpers/add-img-url';

const getAllBanks = (req: Request, res: Response): Response => {
  return res.status(200).json(banksWithLogos);
};

const getBankByName = (req: Request, res: Response): void => {
  const { key } = req.query;
  const regex = new RegExp(`${key}`, 'ig');

  // filter by search query
  const filteredBanks = banksWithLogos.filter((bank) => bank.name.match(regex));
  res.json(filteredBanks);
};

export { getAllBanks, getBankByName };
