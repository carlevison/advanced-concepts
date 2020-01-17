require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// https://cloudinary.com/blog/how_to_automatically_migrate_all_your_images_to_the_cloud
// https://cloudinary.com/documentation/image_transformations?query=cloudinary.url&c_query=Embedding%20images%20in%20web%20pages#embedding_images_in_web_pages

// upload a spreadsheet
console.log(cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx", 
               { resource_type: 'raw',secure:true } ));

