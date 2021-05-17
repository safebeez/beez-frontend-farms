import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, BaseLayout } from 'beez-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { getCakeAddress, getBeeAddress } from 'utils/addressHelpers'


const StyledSwapCard = styled(Card)`
  background-image: url('/images/egg/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
`

const Block = styled.div`
  margin-bottom: 16px; margin: 0px auto;
`

const CardImage = styled.img`
  
`
const Center = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 16;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const hnyAddr = getCakeAddress()

const urlLink = 'https://exchange.pancakeswap.finance/#/swap?outputCurrency='.concat(hnyAddr)
const Link = styled.a`
  color: #00BBFF;
`

const SwapCard = () => {
  const TranslateString = useI18n()
  return (
    <StyledSwapCard>
      <CardBody>
        <Heading size="xl" mb="24px" >
          <CardImage src="/images/egg/2.png" alt="cake logo" width={64} height={64} />
          <Center>{TranslateString(10006, 'HNYCMB Swap')}</Center>
        </Heading>
        <Center>
          {"HNYCMB Address: ".concat(hnyAddr)}
        </Center>
        <Center>
          {"Not loading? Try "}<Link href={urlLink} target="_blank">THIS LINK</Link>
        </Center>
        <Block>
        <iframe title="V2 Swap"
          src={"https://exchange.pancakeswap.finance/#/swap&amp;theme=dark?outputCurrency=".concat(hnyAddr)}
          width="100%" 
          height="750px" />
        </Block>
      </CardBody>
    </StyledSwapCard>
  )
}

const v2swap: React.FC = () => {
  return (
    <Page>
      <div>
        <Cards>
          <SwapCard />
        </Cards>
      </div>
    </Page>
  )
}

export default v2swap
