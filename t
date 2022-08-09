{
  "level": "error",
  "message": "middlewareError",
  "meta": {
    "date": "Sat Aug 06 2022 17:39:18 GMT+0300 (Израиль, летнее время)",
    "error": {
      "statusCode": 404
    },
    "exception": true,
    "level": "error",
    "message": "uncaughtException: Not found\nError: Not found\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\app.js:30:9\n    at Layer.handle [as handle_request] (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:328:13)\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:286:9\n    at param (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:365:14)\n    at param (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:376:14)\n    at Function.process_params (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:421:3)\n    at next (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:280:10)\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:646:15\n    at next (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:265:14)",
    "os": {
      "loadavg": [0, 0, 0],
      "uptime": 309557
    },
    "process": {
      "argv": ["C:\\Program Files\\nodejs\\node.exe", "C:\\Users\\marin\\dev\\movies-explorer-api\\app.js"],
      "cwd": "C:\\Users\\marin\\dev\\movies-explorer-api",
      "execPath": "C:\\Program Files\\nodejs\\node.exe",
      "gid": null,
      "memoryUsage": {
        "arrayBuffers": 18362723,
        "external": 24916682,
        "heapTotal": 33210368,
        "heapUsed": 28950232,
        "rss": 62349312
      },
      "pid": 15288,
      "uid": null,
      "version": "v16.14.0"
    },
    "req": {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "authorization": "Bearer undefined",
        "connection": "keep-alive",
        "cookie": "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTkwZjliMjA4ZTczZjFjNGU2OGRkYyIsImlhdCI6MTY1OTQ0MTA3MSwiZXhwIjoxNjYwMDQ1ODcxfQ.fpdwL3KWD3vvMkj7k1cZh7nekYI4A6uvZ6tW2d4MgT4",
        "host": "localhost:3000",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "none",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
      },
      "httpVersion": "1.1",
      "method": "GET",
      "originalUrl": "/json",
      "query": {},
      "url": "/json"
    },
    "stack": "Error: Not found\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\app.js:30:9\n    at Layer.handle [as handle_request] (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:328:13)\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:286:9\n    at param (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:365:14)\n    at param (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:376:14)\n    at Function.process_params (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:421:3)\n    at next (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:280:10)\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:646:15\n    at next (C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js:265:14)",
    "trace": [{
      "column": 9,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\app.js",
      "function": null,
      "line": 30,
      "method": null,
      "native": false
    }, {
      "column": 5,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\layer.js",
      "function": "Layer.handle [as handle_request]",
      "line": 95,
      "method": "handle [as handle_request]",
      "native": false
    }, {
      "column": 13,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "trim_prefix",
      "line": 328,
      "method": null,
      "native": false
    }, {
      "column": 9,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": null,
      "line": 286,
      "method": null,
      "native": false
    }, {
      "column": 14,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "param",
      "line": 365,
      "method": null,
      "native": false
    }, {
      "column": 14,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "param",
      "line": 376,
      "method": null,
      "native": false
    }, {
      "column": 3,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "Function.process_params",
      "line": 421,
      "method": "process_params",
      "native": false
    }, {
      "column": 10,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "next",
      "line": 280,
      "method": null,
      "native": false
    }, {
      "column": 15,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": null,
      "line": 646,
      "method": null,
      "native": false
    }, {
      "column": 14,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\node_modules\\express\\lib\\router\\index.js",
      "function": "next",
      "line": 265,
      "method": null,
      "native": false
    }]
  }
}