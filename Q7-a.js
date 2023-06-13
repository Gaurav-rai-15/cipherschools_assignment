const http = require('http');
const myDateTime = require('./myDateTime');

const server = http.createServer((req, res) => {
  const dateTime = myDateTime.getDateTime();

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.write('<h1>Current Date and Time</h1>');
  res.write('<p>' + dateTime + '</p>');

  res.end();
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
