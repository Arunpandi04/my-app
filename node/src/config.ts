import { ConnectionOptions } from 'typeorm';
require('dotenv').config();
import User from './entity/user.entity'
import Post from './entity/post.entity'
import Address  from './entity/address.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [ User,Post,Address],
  synchronize: true,
};
 
export default config;