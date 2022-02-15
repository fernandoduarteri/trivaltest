const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
let port = 3000;
//Routes
app.use('/api/bromas', require('./routes/bromas'));


app.listen(port,()=>{
    console.log(`Server running on port:  ${ port}`);
});