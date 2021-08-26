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

const filterBanks = (key: string) => {
    const regex = new RegExp(`${key}`, 'ig');
    // filter by search query
    return banksWithLogos.filter((bank) => bank.name.match(regex));
};

const getResponseIfNoKeyProvided = (res: Response, key: string) => {
    if (!key) {
        res
            .status(400)
            .json(
                new MonoResponse(400, 'Error. You must provide a key to filter by', [])
            );
    }
};

const getFilteredBanksResponse = (res: Response, key: string) => {
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

const getBanksByName = (req: Request, res: Response): void => {
    const key = req?.query?.key as string;
    getResponseIfNoKeyProvided(res, key);
    getFilteredBanksResponse(res, key)
};

export { getAllBanks, getBanksByName };
