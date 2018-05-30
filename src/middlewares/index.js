import { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const middleware = Router();

middleware.use(cors());
middleware.use(bodyParser.json());

export default middleware;
