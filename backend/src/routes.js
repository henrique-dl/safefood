import { Router } from 'express';
import EstablishmentsController from './controllers/EstablishmentsController';
import UserController from './controllers/UserController';

export const router = Router();

// Rotas de usuários
router.post('/usuarios', UserController.createUser);
router.get('/usuarios', UserController.findAllUsers);
router.get('/usuarios/:id', UserController.findUser);
router.put('/usuarios/:id', UserController.updateUser);
router.delete('/usuarios/:id', UserController.deleteUser);

// Rotas de estabelecimentos
router.post('/estabelecimentos', EstablishmentsController.createEstablishment);
router.get('/estabelecimentos', EstablishmentsController.findAllEstablishment);
router.get('/estabelecimentos/:id', EstablishmentsController.findAllEstablishment);
router.put('/estabelecimentos/:id', EstablishmentsController.updateEstablishment);
router.delete('/estabelecimentos/:id', EstablishmentsController.deleteEstablishment);