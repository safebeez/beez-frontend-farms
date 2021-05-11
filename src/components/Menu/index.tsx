import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, usePriceBeeBusd } from 'state/hooks'
import { Menu as UikitMenu } from 'beez-uikit'
import config from './config'
import { getCakeAddress, getBeeAddress } from '../../utils/addressHelpers'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const beePriceUsd = usePriceBeeBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      beePriceUsd={beePriceUsd.toNumber()}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config}
      beePriceLink={ "https://poocoin.app/tokens/".concat( getBeeAddress() ) }
      priceLink={ "https://poocoin.app/tokens/".concat( getCakeAddress() ) }
      {...props}
    />
  )
}

export default Menu
