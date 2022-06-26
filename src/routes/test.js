import { Router } from 'express';
import log from '../logging';
const router = Router();

router.get('/', async (req, res) => {
  try {
    log('test', req);
    consola.info('test route was just called');
    return res.sendStatus(418);
  } catch (err) {
    console.error(err);
    return;
  }
});

export default router;
