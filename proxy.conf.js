var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: '/api',
  target: 'https://api.apeuni.com/api/v1/studies/records/list?user_detail=jahanjerin%40gmail.com&token=1sGAxFNNUrDDeb387eJvPCY2etsKzhKAPwJaFXFP&acc_type=email&client=-QxsFYxcAA&api_type=e1&locale=en&device_type=web-1.0.0-Chrome-Chrome+83.0.4103.116+on+Windows+10+64-bit&page=1&page_size=4',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
    var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
    if (proxyServer) {
        var agent = new HttpsProxyAgent(proxyServer);
        console.log('Using corporate proxy server: ' + proxyServer);
        proxyConfig.forEach(function(entry) {
            entry.agent = agent;
        });
    }
    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);