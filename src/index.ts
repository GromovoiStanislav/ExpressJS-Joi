import express, { json } from 'express';
import {userRoute} from './routes';

const app = express();
app.use(json())

app.use('/api/user',userRoute);

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})