import models from '../models';
import { v4 as uuidv4 } from 'uuid';
const seed = async () => {
  const user1 = new models.User({
    username: 'giovankes',
    id: uuidv4(),
  });

  await user1.save();
};

export default seed;
