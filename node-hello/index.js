const http = require('http');
const port = process.env.PORT || 3000;
const Eureka = require('eureka-js-client').Eureka;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

const client = new Eureka({
  instance: {
    app: 'NODE-JS-EUREKA',
    hostName: 'localhost',
    ipAddr: `127.0.0.1:${port}`,
    statusPageUrl: `http://localhost:${port}`,
    port: {
      '$': port,
      '@enabled': 'true',
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  }
});
client.logger.level('debug');
client.start(function(error){
  console.log('start')
  console.log(error || 'complete');
});