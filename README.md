# rework-plugin-import-url

[![NPM version](https://img.shields.io/npm/v/rework-plugin-import-url.svg?style=flat)](https://www.npmjs.org/package/rework-plugin-import-url)

> Replace URLs in CSS @import rules using a given function.


## Install

1. Install the plugin with the following command:

	```shell
	npm install rework-plugin-import-url
	```


## Usage

```js
var rework = require('rework');
var reworkImportUrl = require('rework-plugin-import-url');

var css = rework(originalCss)
  .use(reworkImportUrl(function(url){
    return 'http://example.com' + url;
  }))
  .toString()
```


## License

[MIT](http://opensource.org/licenses/MIT) © Dmitriy Simushev
