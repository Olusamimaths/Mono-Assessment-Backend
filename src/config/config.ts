import { IConfig } from '../types/config.interface';

const CONFIG = {
  development: {
    API_URL: process.env.API_URL
  },
  production: {}
};

const environment = process.env.NODE_ENV;

let config: IConfig = { ...CONFIG.development };

if (environment === 'development') {
  config = {
    ...CONFIG.development
  };
} else if (environment === 'production') {
  config = {
    ...CONFIG.production
  };
}

export { config };
