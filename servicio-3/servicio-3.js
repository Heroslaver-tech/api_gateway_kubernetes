const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const port = 4000;

router.get('/service-3', (ctx) => {
  ctx.body = { mensaje: "Response from Service 3, I am Nicol and I like the sonatas of Beethoven, Chopin and Vivaldi" };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});
