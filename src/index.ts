import Koa from 'koa';

const port: number = 3000;
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world!';
});;

app.listen(port, () => {
  console.log('server start at port ', port)
});