import http2 from "http2";

const server = http2.createServer({
  key:'',
  ssl:''
},(req, res) => {
  console.log(req.url);

  res.write('josddfsdf');
  // res.json({'ewe':'dsd'})
  res.end();

})

server.listen(3000, ()=> {
  console.log('server listening')
})


