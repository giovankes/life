import consola from 'consola';
import models from '../models';
const date = new Date();

async function log(route, req) {
  console.log(date);
  const new_log_entry = await models.Log.create({
    log: {
      ip: req?.ip,
      route: route,
      time: date,
      was_finished: true,
    },
  });
  if (new_log_entry) new_log_entry.save();
  return consola.info('new log entry added');
}

export default log;
