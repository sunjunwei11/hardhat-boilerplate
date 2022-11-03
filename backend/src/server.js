const Koa = require("koa");
const serve = require("koa-static");
const app = new Koa();
const path = require("path");

app.use(serve(path.resolve(__dirname, "../../frontend/build")));

app.listen(3000);
