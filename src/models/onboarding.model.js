import mongoose from 'mongoose';

// Define the schema for a JotForm document
const onboardingSchema = new mongoose.Schema(
  {
      data: {
        type: mongoose.Schema.Types.Mixed
      },
      createdAt:{
        type: Date,
        default: new Date()
      },
      updatedAt: {
        type: Date,
        default: new Date()
      }
  }
);

// Create the model from the schema
export const Onboarding = mongoose.model('onboarding', onboardingSchema);
