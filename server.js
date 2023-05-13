const express = require('express');
const app = express();
const port=process.env.PORT || 27017;

const database = require('./database');
const userRouter = require('./routes/userRouter');
app.use(express.json())

app.use('/api/login',userRouter)
app.use('/api/registers',userRouter)


app.listen(port , ()=>{
    console.log(`Server is running Port ${port}`);
});