import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SPC',
    tokenAddress: '0x3BB12D3BA827A83072A633B8860587CB1982577e',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x3BB12D3BA827A83072A633B8860587CB1982577e',
    contractAddress: {
      97: '0xEA0884521490Ad7aE457300eab59F85D4C53BF5C',
      56: '0x5f4b9CF6F15145d7a3c3412628e2652Df1a75374',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
