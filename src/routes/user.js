import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.post('/', async (req, res) => {
  const user = await req.context.models.Users.create({
    username: req.body.username,
    id: uuidv4(),
  });
  return res.send(user);
});

export default router;
