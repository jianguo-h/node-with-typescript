import Koa from 'koa';
import { IResponse } from './types';

const port = 3000;
const app = new Koa();

app.use(async ctx => {
  const res: IResponse = {
    data: 'hello world! auto compile',
    code: 200,
    status: 'OK',
  };
  ctx.body = JSON.stringify(res);
});

app.listen(port, () => {
  console.log('server start at port ', port);
});
