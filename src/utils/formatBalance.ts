import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance: BigNumber, pid: number) => {
  let decimals = 18
  if(pid === 7)
    decimals = 9
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, tokenName: string) => {
  let decimals = 18
  if(tokenName === "BEEZ")
    decimals = 9
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}
