http.createServer(function(req,res){
  var header=req.headers['authorization']||'',        // get the header
      token=header.split(/\s+/).pop()||'',            // and the encoded auth token
      auth=new Buffer(token, 'base64').toString(),    // convert from base64
      parts=auth.split(/:/),                          // split on colon
      username=parts[0],
      password=parts[1];

  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('username is "'+username+'" and password is "'+password+'"');

}).listen(1337,'http://mspwork.azurewebsites.net');