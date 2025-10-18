import express from 'express';
import bodyParser from 'body-parser';
import suggestRoutes from './routes/suggest';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/suggest', suggestRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});