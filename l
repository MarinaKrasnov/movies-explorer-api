{
  "level": "error",
  "message": "middlewareError",
  "meta": {
    "date": "Sat Aug 06 2022 17:24:58 GMT+0300 (Израиль, летнее время)",
    "error": {},
    "exception": true,
    "level": "error",
    "message": "uncaughtException: Cannot read properties of undefined (reading 'toString')\nTypeError: Cannot read properties of undefined (reading 'toString')\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\controllers\\movies.js:49:46\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)",
    "os": {
      "loadavg": [0, 0, 0],
      "uptime": 308697
    },
    "process": {
      "argv": ["C:\\Program Files\\nodejs\\node.exe", "C:\\Users\\marin\\dev\\movies-explorer-api\\app.js"],
      "cwd": "C:\\Users\\marin\\dev\\movies-explorer-api",
      "execPath": "C:\\Program Files\\nodejs\\node.exe",
      "gid": null,
      "memoryUsage": {
        "arrayBuffers": 18367302,
        "external": 20563746,
        "heapTotal": 31637504,
        "heapUsed": 29200992,
        "rss": 60014592
      },
      "pid": 15264,
      "uid": null,
      "version": "v16.14.0"
    },
    "req": {
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "62",
        "content-type": "application/json",
        "cookie": "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQwZThiOTE3Mzc0NDEzMjc0NDg2OSIsImlhdCI6MTY1OTcwNzIzMCwiZXhwIjoxNjYwMzEyMDMwfQ.mj85fjBNqP0fMpnmeRc4EIo-fw-rz4gJsR2yNsduU_U",
        "host": "localhost:3000",
        "postman-token": "2e133bb0-1ae7-4adb-8cd1-e63c8f54fc71",
        "user-agent": "PostmanRuntime/7.29.2"
      },
      "httpVersion": "1.1",
      "method": "DELETE",
      "originalUrl": "/movies/62ee49958e3f0ffecd828bf7",
      "query": {},
      "url": "/movies/62ee49958e3f0ffecd828bf7"
    },
    "stack": "TypeError: Cannot read properties of undefined (reading 'toString')\n    at C:\\Users\\marin\\dev\\movies-explorer-api\\controllers\\movies.js:49:46\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)",
    "trace": [{
      "column": 46,
      "file": "C:\\Users\\marin\\dev\\movies-explorer-api\\controllers\\movies.js",
      "function": null,
      "line": 49,
      "method": null,
      "native": false
    }, {
      "column": null,
      "file": null,
      "function": "runMicrotasks",
      "line": null,
      "method": null,
      "native": false
    }, {
      "column": 5,
      "file": "node:internal/process/task_queues",
      "function": "processTicksAndRejections",
      "line": 96,
      "method": null,
      "native": false
    }]
  }
}