import fs from 'fs';
import pupa from 'pupa';

const defaultOpts = {
  selector: 'disqus'
};
export {defaultOpts};

export default function disqus(opts = {}) {
  opts = Object.assign({}, defaultOpts, opts);
  const script = fs.readFileSync(`${__dirname}/disqus-script.txt`, 'utf-8');

  return $ => {
    const $disqus = $(opts.selector);
    if ($disqus.length > 1) {
      console.log('Must be one disqus element');
      return;
    }

    const uuid = $disqus.attr('uuid');
    if (typeof uuid !== 'string') {
      console.log('Specify uuid attribute');
      return;
    }

    $(pupa(script, {uuid})).appendTo($.root());
    $disqus.replaceWith('<div id="disqus_thread"></div>');
    return $;
  };
}
