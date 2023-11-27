import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write('josddfsdf');
  // res.json({'ewe':'dsd'})
  res.end();

})

server.listen(3000, ()=> {
  console.log('server listening')
})


