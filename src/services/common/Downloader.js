import Axios from 'axios';
import url from 'url';
import path from 'path';
import fs from 'fs';

const downloadImg = async imgUrl => {
  if (!imgUrl) return;
  try {
    if (imgUrl.startsWith('data:image')) {
      console.log('여기옴');
      var base64Data = imgUrl.replace(/^data:image\/png;base64,/, '');

      fs.writeFileSync('out.png', base64Data, 'base64');
    } else {
      const parsed = url.parse(imgUrl);
      const fileName = path.basename(parsed.pathname);

      const response = await Axios({
        method: 'get',
        url: imgUrl,
        responseType: 'stream'
      });

      response.data.pipe(fs.createWriteStream(fileName));
    }
  } catch (err) {
    console.log(err);
  }
};

export default downloadImg;
