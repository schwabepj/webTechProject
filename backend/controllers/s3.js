require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;

// uploads a file to s3
function updateFile(newfile,fileKey) {
  const fileStream = fs.createReadStream(newfile.path);

  const updateParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: fileKey,
  };

  return s3.putObject(updateParams).promise();
}
exports.updateFile = updateFile;


// get a file from s3
function getFile(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}
exports.getFile = getFile;

function deleteFile(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: bucketName,
    };
  
    return s3.deleteObject(downloadParams).promise();
  }
  exports.deleteFile = deleteFile;
