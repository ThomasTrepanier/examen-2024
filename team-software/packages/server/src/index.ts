import 'dotenv/config';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { Application } from './app';
import { env } from './environments/environment.dev';

(async () => {
  const application = container.resolve(Application);

  application.start(env.PORT);
})();
