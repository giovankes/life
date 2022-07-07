import { Router } from 'express';
import log from '../logging';
const router = Router();

router.get('/', async (req, res) => {
  try {
    log('root', req);
    console.log('root route was just called');
    return res.send('Hello world!');
  } catch (err) {
    console.error(err);
    return;
  }
});

export default router;
