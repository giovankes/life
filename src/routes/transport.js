import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import models from '../models';

const router = Router();

router.post('/', async (req, res) => {
  const { type, duration, company } = req?.body;
  const transportEntry = new models.Transport({
    type,
    duration,
    submitted_at: new Date(),
    company,
  });
  await transportEntry.save();
  res.sendStatus(418);
});

export default router;
