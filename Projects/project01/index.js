import express, { urlencoded } from "express";
import user from './database.js';
import router from './router.js';
const app = express();
const port = 4200;

app.use(express.json());
app.use(urlencoded({extended:false}));
app.set('view engine','ejs')

app.use(router);
app.listen(port, () => {
  console.log(`Server Running on Port No ${port}`);
});
