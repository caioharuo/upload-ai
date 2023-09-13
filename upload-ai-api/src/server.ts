import { fastifyMultipart } from '@fastify/multipart';
import fastify from 'fastify';

import { uploadVideoRoute } from './routes/upload-video';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { createTranscriptionRoute } from './routes/create-transcription';

const app = fastify();

app.register(fastifyMultipart, {
  limits: {
    fileSize: 1_048_576 * 25, // 25mb
  },
});

app.register(uploadVideoRoute);
app.register(getAllPromptsRoute);
app.register(createTranscriptionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀');
  });
