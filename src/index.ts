import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);
// User CRUD

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.METHOD(PATH,HANLDER)

app.listen(3000, () => {
  console.log('Server ready at localhost:3000');
});
