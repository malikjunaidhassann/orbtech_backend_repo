import { Onboarding } from '../models/onboarding.model.js';
import { parseStringToObject } from '../utils/helper.js';

export const onboardingController = {
  async create(req, res) {
    try {
      const rawData = req.body;

      if (!rawData) {
        console.log("No Data Found.")
        res.status(404).json({ message: "No form data received in request." });
      }

      const { pretty, submissionID, formID, formTitle, username, webhookURL } = rawData;
      const formData = parseStringToObject(pretty);

      const data = {
        formID,
        formTitle,
        formData,
        submissionID,
        username,
        webhookURL
      }

      const document = await Onboarding.create({ data });

      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getOnboardingById(req, res) {
    try {
      const { sessionId } = req.params;

      const documents = await Onboarding.findOne({"data.formData.sessionId": sessionId});
      
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};