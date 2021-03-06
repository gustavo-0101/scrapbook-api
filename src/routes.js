import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ScrapController from './app/controllers/ScrapController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
routes.use(cors());

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users/:userId', UserController.delete);

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.get('/scraps', ScrapController.index);
routes.post('/scraps', ScrapController.store);
routes.put('/scraps/:id', ScrapController.update);
routes.delete('/scraps/:id', ScrapController.delete);

export default routes;
