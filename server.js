var http = require('http');
var url = require('url');
var obj = {
    name: 'Vova',
    age: 26,
    profession: 'FE developer',
    car: 'img/red_ferrari.jpg',
    history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aliquid quod necessitatibus tempore laborum! Numquam quisquam, praesentium delectus quasi provident esse commodi nemo illum. Libero dolore quia placeat, ipsa voluptas non quaerat, veniam odio aperiam veritatis deserunt saepe commodi nam amet numquam! Cum incidunt quia blanditiis magnam fuga doloribus, aut.'
};
http.createServer(function (req, res) {
    if(req.url === '/favicon.ico'){return;}
    if(req.url === '/getObj') {
        setTimeout(function(){
            res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*'});
            res.end(JSON.stringify(obj));
        }, 10000);
    }

    console.log(req.url);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/*

jQuery.ajax('http://127.0.0.1:1337/getObj').done(function(data){
    console.log(JSON.parse(data));
});

*/
