// var finalhandler = require('finalhandler')
// var http = require('http')
// var serveStatic = require('serve-static')

// // Serve up public/ftp folder
// var serve = serveStatic('', { index: ['calculator.html', 'calculator.htm'] })

// // Create server
// var server = http.createServer(function onRequest (req, res) {
//   serve(req, res, finalhandler(req, res))
// })

// // Listen
// server.listen(3000)

await fetch('https://graph.netlify.com/graphql?app_id=b83d3c66-7e5b-47e6-96b4-5ef3cc6f57b6&show_metrics=false',
  {
    method: 'POST',
    body: JSON.stringify({
      query: `query HelloNetlifyGraph {
    helloGraph(sessionId: "7ef8c2c1-a22a-456e-a46f-9a530b78df20") {
      welcome
      about
      whatToDoNext
    }
  }`,
    }),
  }
)
.then((r) => r.json())