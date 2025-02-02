import express from 'express';
import { onboardingController } from '../controllers/onboarding.controller.js';
import multer from 'multer';

const upload = multer();
export const webhookRouter = express.Router();

webhookRouter.post('/', upload.none() , onboardingController.create);