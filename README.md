# s3-lambda-nodeJS-zip-file-extract
The funtionality is used to extract zip files in an S3 bucket through lambda functions in AWS and is written in nodeJS.
AWS S3 bucket donnot have a funtionality for extracting zip files.
We can trigger AWS lambda funtion on S3 zip file upload.
The index.js file has the nodeJS code to extract the zip folder in s3 bucket.
S3-unzip library is used to extract the zip file.
IAM policy is defined for lambda funtion to access the S3 bucket.
