import next from 'next';

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  port: PORT,
});

//self host NextJS
export const nextHandler = nextApp.getRequestHandler();
