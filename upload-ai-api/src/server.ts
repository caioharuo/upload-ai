import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifyMultipart } from '@fastify/multipart';

import { uploadVideoRoute } from './routes/upload-video';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
});

app.register(fastifyMultipart, {
  limits: {
    fileSize: 1_048_576 * 25, // 25mb
  },
});

app.register(uploadVideoRoute);
app.register(getAllPromptsRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀');
  });
