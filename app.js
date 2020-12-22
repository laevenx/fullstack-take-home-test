
// require("dotenv").config();
// };

const express = require("express");
const app = express();
const cors = require("cors");
const PORT =  3002;
// const server = require('http').createServer(app);
// const io = require('socket.io')({path: '/chat'});
// const io = require('socket.io')(server);
// const cookieParser = require('cookie-parser')

require("./config/db")();


app.set("trust proxy", 1);
app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var router = require("./routes");
app.use('/', router);

app.listen(PORT, () => console.log("Server started on " + PORT));