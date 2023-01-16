export const navbarItems = [
  {
    url: '/',
    regex: /\/$/,
    icon: 'home-line',
    label: 'home',
  },
  {
    url: '/optimization/business-logic/rules',
    regex: /(\/optimization\/business-logic)?\/rules/,
    icon: 'git-fork-line',
    label: 'automations',
  },
  {
    url: '/optimization/pricing/recomendations',
    regex: /\/optimization\/pricing/,
    icon: 'tag-line',
    label: 'prices',
  },
  {
    url: '/sales/list',
    regex: /\/sales/,
    icon: 'shopping-cart-line',
    label: 'sales',
  },
  {
    url: '/product-list',
    regex: /^\/product.*/,
    icon: 'box-line',
    label: 'products',
  },
  {
    url: '/market-research',
    regex: /\/market.*/,
    icon: 'article-search-line',
    label: 'market',
  },
];