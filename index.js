const S3Unzip = require('s3-unzip'); 



  exports.handler = function(event, context, callback) { 
  
  	  const bucketname = event.Records[0].s3.bucket.name;
      const filename = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

	new S3Unzip({ 
	
		bucket: bucketname, 
		file: filename , 
	 	verbose: true, 
 	}, function(err, success) { 
		if (err) { 
			callback(err); 
		} else { 
			callback(null); 
		} 
 	}); 
} 
