const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    // set header content type
    
    let path = './views';

    switch(req.url){
        case '/' : {
            res.statusCode = 200;
            path += '/index.html';
            break;
        };

        case '/about' :{
            res.statusCode = 200;
            path += '/about.html';
            break;
        };
         
        case '/about-me' :{
            res.statusCode = 301;
            path += '/about'
            res.setHeader('Location', '/about');
            res.end()
            break;
        };

        default:{
            res.statusCode = 404;
            path += '/404.html'
        }

    };



    res.setHeader('Content-Type', 'text/html')
    
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', ()=> {
    console.log("Listining for request for port 3000")
});

