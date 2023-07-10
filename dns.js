import dns from 'node:dns';

dns.lookup('pornhub.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

const servers = dns.getServers()
console.log({ servers });