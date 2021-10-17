let fs = require('fs');
let http = require ('http');

 let server = http.createServer();

  // as we know streams are instances of EventEmitter class

  server.on('request', (req, res) => {
       // it is the first way to read a file we can only read file when it is completly load
    //   fs.readFile("inputfile.js", "utf-8", (err, data) => {
    //       if(err) return console.log(err)
    //       return res.end(data);
    //   } );


    // now we use streams to read ,write file , which load the data immediately or in chunks
    // 2nd way
    //  let readstream = fs.createReadStream("reads.txt");
    //  readstream.on("data", (datastored) => {
    //      res.write(datastored);
    //  });

    //  readstream.on("end", ()=> {
    //      res.end()
    //  });

     // for err we have error event to fire 

    //  readstream.on('error', (err) => {
    // console.log(err);
    // res.end(" file not found");
    //  })

   

    // 3rd way 
    // we can use pipe method to read and write file

    let readstream = fs.createReadStream('inputfile.js');
      readstream.pipe(res);


  });
   server.listen(8000, "127.0.0.1" , () => {
       console.log("listening to the port no 8000");
   })