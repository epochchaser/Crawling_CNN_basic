import cheerio from 'cheerio';

export class CnnHtmlParser {
  parse = html => {
    let ulList = [];
    try {
      const $ = cheerio.load(html);
      const $bodyList = $('section.zn-world-zone-1 ul').children('li');

      $bodyList.each(function(i, elem) {
        ulList[i] = {
          title: $(this)
            .find('div.cd__content h3 a span.cd__headline-text')
            .text(),
          image_url: $(this)
            .find('div.media a img')
            .attr('src'),
          image_alt: $(this)
            .find('div.media a img')
            .attr('alt')
        };
      });
    } catch (err) {
      console.err('Error during parsing html.');
    }

    return ulList;
  };
}
