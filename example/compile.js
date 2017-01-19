import fs from 'fs';
import magu from 'magu';
import disqus from '../dist/magu-plugin-disqus';

magu({}, [disqus()])
  .process(`${__dirname}/example.md`)
  .then(result => {
    console.log(result.html);
    fs.writeFileSync(`${__dirname}/index.html`, result.html, 'utf-8');
  });
