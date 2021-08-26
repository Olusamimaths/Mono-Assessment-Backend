import { MonoResponse } from '../utils/MonoResponse';
import { Response } from 'express';
import { banksWithLogos } from '../helpers/add-img-url';

const filterBanks = (key: string) => {
  const regex = new RegExp(`${key}`, 'ig');
  // filter by search query
  return banksWithLogos.filter((bank) => bank.name.match(regex));
};

const getResponseIfNoKeyProvided = (res: Response, key: string): void => {
  if (!key) {
    res
      .status(400)
      .json(
        new MonoResponse(400, 'Error. You must provide a key to filter by', [])
      );
  }
};

const getFilteredBanksResponse = (res: Response, key: string): void => {
  const filteredBanks = filterBanks(key);
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

export { getResponseIfNoKeyProvided, getFilteredBanksResponse };
