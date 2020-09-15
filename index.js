var s = new s3Unzip({
    bucket: "test-bucket-in-s3",
    file: "Companies.zip",
    deleteOnSuccess: true,
    verbose: false
  }, function(err, success){
    if (err) console.error(err);
    else console.log(success);
  });