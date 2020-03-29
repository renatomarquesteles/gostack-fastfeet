import { Router } from 'express';
import multer from 'multer';

import DeliveryController from './app/controllers/DeliveryController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliverymanDeliveriesController from './app/controllers/DeliverymanDeliveriesController';
import DeliveriesProblemsController from './app/controllers/DeliveriesProblemsController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get(
  '/deliveryman/:id/deliveries',
  DeliverymanDeliveriesController.index
);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:delivery_id',
  DeliverymanDeliveriesController.update
);

routes.get('/deliveries/problems', DeliveriesProblemsController.index);
routes.delete(
  '/problem/:id/cancel-delivery',
  DeliveriesProblemsController.delete
);

routes.get('/delivery/:id/problems', DeliveryProblemsController.index);
routes.post('/delivery/:id/problems', DeliveryProblemsController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.get('/deliverymen', DeliverymanController.index);
routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

routes.get('/deliveries', DeliveryController.index);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

export default routes;
