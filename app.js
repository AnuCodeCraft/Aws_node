const express = require("express");
const fs = require('fs');
const AWS = require('aws-sdk');
const { type } = require("os");
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const ID = process.env.awsid;
const SECRET = process.env.awskey;
const signedUrlExpireSeconds = 60 * 5

console.log(process.env.awsid);
console.log(SECRET);



// The name of the bucket that you have created
// const BUCKET_NAME = 'newbucketpic';

// const s3 = new AWS.S3({
//     accessKeyId: ID,
//     secretAccessKey: SECRET
// });

// const params = {
//     Bucket: BUCKET_NAME,
//     CreateBucketConfiguration: {
//         // Set your region here
//         LocationConstraint: "eu-west-1"
//     }
// };

// // s3.createBucket(params, function(err, data) {
// //     if (err) console.log(err, err.stack);
// //     else console.log('Bucket Created Successfully', data.Location);
// // });

// const uploadFile = (fileName) => {
//     // Read content from the file
//     const fileContent = fs.readFileSync(fileName);

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: BUCKET_NAME,
//         fileName:'myfolder',
//         contentType:"image/jpeg",
//         Key: 'pic1.jpg', // File name you want to save as in S3
//         Body: fileContent
//     };


//    // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });

//     //creating signedUrl
//     const url = s3.getSignedUrl('getObject', {
//     Bucket: BUCKET_NAME,
//     Key: 'pic1.jpg' ,
//     Expires: signedUrlExpireSeconds
// })

// //SignedUrl
// console.log(url)
// };

// uploadFile('pic1.jpg');

app.get("",(req,res)=>{
res.send("<h1>Hello world</h1>")
    
})


app.listen(3000,()=>{
    console.log("server is up and running");
})
