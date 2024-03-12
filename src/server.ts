import express, { Request, Response } from 'express';

export const server = express();
server.get('/hello', (req: Request, res: Response) => {
  const { 'user-name': userName } = req.query;
  res.send(`Hello ${userName}!`);
});
