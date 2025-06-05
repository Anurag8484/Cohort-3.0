const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());


function middleware(req,res,next){
  console.log(`Method: ${req.method}`)
  console.log(`Url: ${req.hostname}`)
  const ts = new Date().toISOString()
  console.log(ts)
  console.log(res.status)
  next();
}
app.use(middleware)

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        Sum: a+b
    })
});

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
      Product: a * b,
    });
});

app.get("/divide", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
      Divide: a / b,
    });
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
      Sub: a - b,
    });
});

app.listen(3000);
