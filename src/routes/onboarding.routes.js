import express from 'express';
import { onboardingController } from '../controllers/onboarding.controller.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const onboardingRouter = express.Router();

onboardingRouter.get('/:sessionId', onboardingController.getOnboardingById);