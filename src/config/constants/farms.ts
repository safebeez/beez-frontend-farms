import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'HNY-BEEZ LP (V2)',
    nonStandard: true,
    lpAddresses: {
      97: '0x970Db044f9397daA088DC94686438e12514fC85E', // HNY-BNB LP
      56: '0xE7D73Ba4631653173d015D2C7b1B85E6689eda6B', // HNY-BEEZ LP
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x97212bAb58ea9562f4208B9c344212b96aFA7a1B', // HNY
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HNY-BUSD LP (V2)',
    lpAddresses: {
      97: '',
      56: '0xA51B1d6396bb75953E9433af9Aa2D9cd3A3856b8',
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x97212bAb58ea9562f4208B9c344212b96aFA7a1B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HNY-BNB LP(V2)',
    lpAddresses: {
      97: '',
      56: '0x970Db044f9397daA088DC94686438e12514fC85E',
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x97212bAb58ea9562f4208B9c344212b96aFA7a1B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP(V1)',
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
    pid: 6,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP(V2)',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
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
    lpSymbol: 'BEEZ-BNB LP(V1)',
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
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'HNY',
    lpAddresses: {
      97: '',
      56: '0xA51B1d6396bb75953E9433af9Aa2D9cd3A3856b8', // HNY-BUSD LP
    },
    tokenSymbol: 'HNY',
    tokenAddresses: {
      97: '',
      56: '0x97212bAb58ea9562f4208B9c344212b96aFA7a1B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    nonStandard: true,
    lpSymbol: 'BEEZ',
    lpAddresses: {
      97: '0xaaBCEB7549A4F476A28ad36d08D6051190CEf7a2',
      56: '0xaaBCEB7549A4F476A28ad36d08D6051190CEf7a2', // BEEZ-BNB LP V1
    },
    tokenSymbol: 'BEEZ',
    tokenAddresses: {
      97: '',
      56: '0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    tokenSymbol: 'RCAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
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
