import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HNY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xeC7166261A0963B89EFdF78C09E7DC5E1266c217',
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HNY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x361296b4FBb8d61e9961c772AF213eDC2D0486a7',
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BEEZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaaBCEB7549A4F476A28ad36d08D6051190CEf7a2',
    },
    tokenSymbol: 'BEEZ',
    tokenAddresses: {
      97: '',
      56: '0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  /* {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, */
  /* {
    pid: 3,
    risk: 5,
    lpSymbol: 'BEEZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaaBCEB7549A4F476A28ad36d08D6051190CEf7a2',
    },
    tokenSymbol: 'BEEZ',
    tokenAddresses: {
      97: '',
      56: '0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, */
]

export default farms
