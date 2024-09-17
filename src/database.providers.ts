import { Sequelize } from 'sequelize-typescript';
import { Account } from './accounts/accounts.entity';
import { Setting } from './settings.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'adisan_db',
        password: 'password',
        database: 'mock_db',
      });
      sequelize.addModels([Account, Setting]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
