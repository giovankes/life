import models from '../models'
import { v4 as uuidv4 } from 'uuid'

function seed() {
  const user = new models.User({
    username: "giovankes",
    id: uuidv4()
  })

  await user.save()
}

export default seed
