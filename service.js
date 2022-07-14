
import Post from "./Post.js";
import express from 'express'
import mongoose from "mongoose";
import {router} from "./router.js";
import fileUpload from 'express-fileupload'
const app = express()

const DB_URL = 'mongodb+srv://root:root@cluster0.oakq3.mongodb.net/?retryWrites=true&w=majority'
app.get('/', (req, res) => {

  console.log(req.query)
  res.status(200).json('server')
});
// app.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send({ msg: 'This has CORS enabled 🎈' });
// });
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp () {
  try {
    await mongoose.connect(DB_URL)
    app.listen(8080, () => {
      console.log('listening on port 8080');
    });
  } catch (e) {
    console.log(e);
  }
}
startApp().then(r => console.log(r))


