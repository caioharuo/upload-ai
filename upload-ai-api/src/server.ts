import { fastifyMultipart } from '@fastify/multipart';
import fastify from 'fastify';

import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify();

app.register(fastifyMultipart, {
  limits: {
    fileSize: 1_048_576 * 25, // 25mb
  },
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀');
  });
