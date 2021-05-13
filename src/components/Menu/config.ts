import { MenuEntry } from 'beez-uikit'
import { getCakeAddress, getBeeAddress } from 'utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange HNY',
        href: 'https://safebeez.github.io/#/swap?outputCurrency='.concat(getCakeAddress()),
      },
      {
        label: 'HNY Liquidity',
        href: 'https://safebeez.github.io/beez-frontend-amm/#/add/'.concat(getCakeAddress()).concat('/BNB'),
      },
      {
        label: 'Exchange BEEZ',
        href: '?outputCurrency='.concat(getBeeAddress()),
      },
      {
        label: 'Liquidity: BEEZ',
        href: 'https://safebeez.github.io/beez-frontend-amm/#/add/'.concat(getBeeAddress()).concat('/BNB'),
      },
    ],
  },
  {
    label: 'Honeycomb',
    icon: 'FarmIcon',
    href: '/honeycomb',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/'.concat(getCakeAddress()),
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/e',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketc',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      }, */
    ],
  },
/*   {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://gnce/',
      }
    ],
  }, */
  {
    label: 'Partnership?',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Apply Here',
        href: 'https://github.com/goosedefi/',
      },
      {
        label: 'Info',
        href: 'https://github.com/goosedefi/',
      },
    ],
  },
]

export default config
