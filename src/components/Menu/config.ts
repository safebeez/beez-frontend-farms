import { MenuEntry } from 'beez-uikit'
import { getCakeAddress } from 'utils/addressHelpers'

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
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency='.concat(getCakeAddress()),
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/',
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
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
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
        href: 'https://goosedefi.gitbook.io/goose-finance/',
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
