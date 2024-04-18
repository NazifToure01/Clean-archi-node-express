import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './frameworks-and-drivers/web/routes/userRoutes.js';
import connectDB from './frameworks-and-drivers/db/mongooseConnection.js';

const app = express();

connectDB().then(() => console.log("Connected to database")).catch(e => console.log(e));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res)=>{
    res.send('hello welcome')
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
