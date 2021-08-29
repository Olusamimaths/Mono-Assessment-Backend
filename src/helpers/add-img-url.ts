import banks from '../data/banks.json';
import { config } from '../config/config';

const addImgUrlToBanks = (
  banks: { id: string; code: string; name: string }[]
) => {
  return banks
    .map((bank) => ({
      ...bank,
      imgUrl: `${config.API_URL}images/${bank.code}.svg`
    }))
    .filter((bank) => !!bank.imgUrl);
};

const banksWithLogos = addImgUrlToBanks(banks);

export { banksWithLogos };
