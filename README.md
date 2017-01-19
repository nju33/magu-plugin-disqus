# magu-plugin-disqus

[![Build Status](https://travis-ci.org/nju33/magu-plugin-disqus.svg?branch=master)](https://travis-ci.org/nju33/magu-plugin-disqus) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/magu-plugin-disqus.svg)

## Install

```bash
yarn add magu-plugin-disqus
npm install magu-plugin-disqus
```

## Usage

```js
magu({}, [disqus()])
  .process(`${__dirname}/markdown.md`)
  .then(result => {
    console.log(result.html);
  });
```

## Example

With markdown like this

```md
# headline

contents

<disqus uuid=842a1d40-de19-11e6-8e19-d1f8596fcd4d />
```

By default, this plugin looks at the `<disqus>` element. For that element, you need to specify the `uuid` attribute.

It will be like this after the conversion

```html
<h1 id="headline">headline</h1>
<p>contents</p>
<div id="disqus_thread"></div>
<script>
  var disqus_config = function() {
    this.page.url = location.href;
    this.page.identifier = '842a1d40-de19-11e6-8e19-d1f8596fcd4d';
  };
  (function() {
    var d = document,
      s = d.createElement('script');
    s.src = '//test-i3nu5ckmb5.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
