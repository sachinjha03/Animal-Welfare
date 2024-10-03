const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors());
app.use(express.json())


require("./db/connection")

app.get("/" , (req,res) => {
    res.send("Hello from backend")
})

app.use(require("./routes/Query"))

//will reflect whether the backend is started or not
app.listen(port , () => {
    console.log("Backend Started");
})