import express from 'express';
import concat from 'ffmpeg-concat';
import path from 'path';

const app: express.Application = express();

app.use(express.urlencoded({
  extended: true
}));

console.log([
  path.resolve(__dirname, '../videos/blue.mp4'),
  path.resolve(__dirname, '../videos/BOOBA Feat. ZED - Jauné.mp4'),
  path.resolve(__dirname, '../videos/KIKESA - ROUGE (SOLO3).mp4')
]);

app.post('/viedo-generator', async (req, res, next) => {
  console.log('req.body', req.body);
  console.log('-'.repeat(10));

  try {
    const res = await concat({
      output: 'test.mp4',
      videos: [
        path.resolve(__dirname, '../videos/blue.mp4'),
        path.resolve(__dirname, '../videos/BOOBA Feat. ZED - Jauné.mp4'),
        path.resolve(__dirname, '../videos/KIKESA - ROUGE (SOLO3).mp4'),
      ],
      log: console.log,
    });
    console.log({res});
  } catch (error) {
    console.log('eroooooor');
    console.error(error);
  }
  res.sendFile
  res.send('ok');
});

app.listen(3000, () => {
  console.log('App listening');
});
