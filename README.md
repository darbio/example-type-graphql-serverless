# example-type-graphql-serverless
* Install deps `npm install`
* Run `npm start`
* Attempt to load graphql endpoint:

```
Error: Cannot use GraphQLSchema "[object Object]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
    at instanceOf (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:28689:13)
    at isSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35013:35)
    at validateSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35287:25)
    at assertValidSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35312:16)
    at Object.validate (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:43344:35)
    at doRunQuery (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:892:38)
    at /Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:803:56
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)
Serverless: [500] {"statusCode":500,"body":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Error: Cannot use GraphQLSchema &quot;[object Object]&quot; from another module or realm.<br><br>Ensure that there is only one instance of &quot;graphql&quot; in the node_modules<br>directory. If different versions of &quot;graphql&quot; are the dependencies of other<br>relied on modules, use &quot;resolutions&quot; to ensure only one version is installed.<br><br>https://yarnpkg.com/en/docs/selective-version-resolutions<br><br>Duplicate &quot;graphql&quot; modules cannot be used at the same time since different<br>versions may have different capabilities and behavior. The data from one<br>version used in the function from another could produce confusing and<br>spurious results.<br> &nbsp; &nbsp;at instanceOf (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:28689:13)<br> &nbsp; &nbsp;at isSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35013:35)<br> &nbsp; &nbsp;at validateSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35287:25)<br> &nbsp; &nbsp;at assertValidSchema (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:35312:16)<br> &nbsp; &nbsp;at Object.validate (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:43344:35)<br> &nbsp; &nbsp;at doRunQuery (/Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:892:38)<br> &nbsp; &nbsp;at /Users/darbio/Repositories/darb.io/cad-api/.webpack/service/src/index.js:803:56<br> &nbsp; &nbsp;at &lt;anonymous&gt;<br> &nbsp; &nbsp;at process._tickDomainCallback (internal/process/next_tick.js:228:7)</pre>\n</body>\n</html>\n","headers":{"x-powered-by":"Express","access-control-allow-origin":"*","content-security-policy":"default-src 'self'","x-content-type-options":"nosniff","content-type":"text/html; charset=utf-8","content-length":"1802","date":"Tue, 05 Jun 2018 08:11:15 GMT","connection":"keep-alive"},"isBase64Encoded":false}
```
