const helper = require('think-helper');

/**
 * get page url
 * @param  {Object} options []
 * @param  {Object} http    []
 * @return {String}         []
 */
const getPageUrl = (options, ctx) => {
  let pageUrl = options.url;
  if (!pageUrl) {
    let prefix = (options.prefix || '') + '?';
    const querys = [];
    for (const name in ctx.query) {
      if (name === 'page') {
        continue;
      }
      querys.push(helper.escapeHtml(name) + '=' + helper.escapeHtml(ctx.query[name]));
    }
    prefix += querys.join('&');
    if (querys.length) {
      prefix += '&';
    }
    pageUrl = prefix + 'page=__PAGE__';
  }
  return pageUrl;
};

/**
 * get page index
 * @param  {Object} pagerData []
 * @param  {Object} options   []
 * @return {Array}           []
 */
const getPageIndex = (pagerData, options) => {
  const num = options.pageNum || 2;
  const page = pagerData.currentPage | 0 || 1;
  const totalPages = pagerData.totalPages;
  const pageIndex = [];
  let start = page - num;
  let stop = page + num;

  if (start <= 1) {
    start = 1;
    stop = start + num * 2 + 1;
  }

  if (stop >= totalPages) {
    stop = totalPages;
    start = totalPages - num * 2 - 1;
  }

  for (let i = start; i <= stop; i++) {
    if (i >= 1 && i <= totalPages) {
      pageIndex.push(i);
    }
  }
  return pageIndex;
};

/**
 * thinkjs pagenation
 * @param  {Object} pagerData [pagerData by countSelect]
 * @param  {Object} ctx      []
 * @param  {Object} options   []
 * @return {String}           []
 */
module.exports = (pagerData, ctx, options) => {
  if (pagerData.totalPages <= 1) return '';

  options = Object.assign({
    desc: false, // show desc
    pageNum: 1,
    url: '',
    class: '',
    text: {
      next: 'Next',
      prev: 'Prev',
      total: 'count: __COUNT__ , pages: __PAGE__'
    }
  }, options);
  const pageUrl = getPageUrl(options, ctx);
  const currentPage = pagerData.currentPage | 0 || 1;

  let html = `<div class="page">`;
  if (options.class) {
    html = `<div class="page ${options.class}">`;
  }
  // if (options.desc) {
  //   const total = options.text.total.replace('__COUNT__', pagerData.count).replace('__PAGE__', pagerData.totalPages);
  //   html += `<li class="disabled"><span>${total}</span></li>`;
  // }
  if (currentPage > 1) {
    html += `<a href="${pageUrl.replace('__PAGE__', currentPage - 1)}">${options.text.prev}</a>`;
  }

  const pageIndex = getPageIndex(pagerData, options);
  if (pageIndex[0] > 1) {
    html += `<a href="${pageUrl.replace('__PAGE__', 1)}">1</a>`;
  }
  if (pageIndex[0] > 2) {
    html += `<span>...</span>`;
  }

  for (let i = 0, length = pageIndex.length; i < length; i++) {
    const p = pageIndex[i];
    if (p === currentPage) {
      html += `<a class="current" href="${pageUrl.replace('__PAGE__', p)}">${p}</a>`;
    } else {
      html += `<a  href="${pageUrl.replace('__PAGE__', p)}">${p}</a>`;
    }
  }
  if (pageIndex.length > 1) {
    const last = pageIndex[pageIndex.length - 1];
    if (last < (pagerData.totalPages - 1)) {
      html += `<span>...</span>`;
    }
    if (last < pagerData.totalPages) {
      html += `<a href="${pageUrl.replace('__PAGE__', pagerData.totalPages)}">${pagerData.totalPages}</a>`;
    }
  }
  if (currentPage < pagerData.totalPages) {
    html += `<a href="${pageUrl.replace('__PAGE__', currentPage + 1)}">${options.text.next}</a>`;
  }
  html += '</div>';
  return html;
};
