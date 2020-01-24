// upload a file after enabling Strict Transformations
// attempt to access a transformation
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open');

//use upload API to upload a private asset

cloudinary.uploader.upload('https://images.pexels.com/photos/9210/food-japanese-food-photography-sushi.jpg', {
  public_id: 'sushi',
  type: 'upload'
})
  .then(uploadResult => {
    console.log(uploadResult);
    // expect a 401/404 because the strict transform is enabled
    let url = cloudinary.url(`${uploadResult.public_id}`, {
      secure: true, width: 300,
      height: 300,
      quality: "auto",
      fetch_format: "auto",
      crop: "mfit",
      sign_url: true
    })
    console.log(url)
    open(url)
  })
  .catch(error => console.error(error));

