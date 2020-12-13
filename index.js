const jimp = require('jimp');

const image = 'img/1.png';

const collage = 'img/cyberpunk-2077-logo.png'

// const jimps = [];

// for (let i = 0; i < images.length; i++) {
//   jimps.push(jimp.read(images[i]));
// }
// jimps.push();

Promise.all([image, collage].map(v => jimp.read(v)))
  .then(function (data) {
    const width = data[0].bitmap.width
    const height = data[0].bitmap.height
    const collagewidth = data[1].bitmap.width
    const collageheight = data[1].bitmap.height

    console.log('width: ', width)
    console.log('height: ', height)
    console.log('collagewidth: ', collagewidth)
    console.log('collageheight: ', collageheight)

    const collagescale = width / (collagewidth * 1.2)

    console.log('collagescale: ', collagescale)

    data[1].scale(collagescale)

    const collagecompositex = (width / 2) - ((collagewidth * collagescale) / 2)
    const collagecompositey = ((height * 7) / 10) - ((collageheight * collagescale) / 2)

    console.log('collagecompositex: ', collagecompositex)
    console.log('collagecompositey: ', collagecompositey)

    data[0].composite(data[1], collagecompositex, collagecompositey);

    data[0].write('final-images/test.png', function () {
      console.log("wrote the image");
    });
  });