import fs from 'fs';
import test from 'ava';
import marked from 'marked';
import cheerio from 'cheerio';
import disqus from '../dist/magu-plugin-disqus';

test.beforeEach(t => {
  t.context.md = fs.readFileSync(`${__dirname}/fixtures.md`, 'utf-8');
  t.context.$ = cheerio.load(marked(t.context.md));
});

test('magu plugin disqus', t => {
  const result = disqus()(t.context.$).html();

  const $ = cheerio.load(result);
  t.is($('#disqus_thread').length, 1);
  t.is($('script').length, 1);

  t.regex(
    result,
    /this\.page\.identifier = '842a1d40-de19-11e6-8e19-d1f8596fcd4d';/
  );
});
