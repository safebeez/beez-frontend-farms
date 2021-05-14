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

const SwapCard = () => {
  const TranslateString = useI18n()
  const hnyAddr = getCakeAddress()
  return (
    <StyledSwapCard>
      <CardBody>
        <Heading size="xl" mb="24px" >
          <CardImage src="/images/egg/2.png" alt="cake logo" width={64} height={64} />
          <Center>{TranslateString(10006, 'Honey Swap & Liquidity')}</Center>
        </Heading>
        <Center>
          {"HNY Address: ".concat(getCakeAddress())}
        </Center>
        <Block>
        <iframe title="V2 Swap"
          src={"https://exchange.pancakeswap.finance/#/add/".concat(hnyAddr).concat("/bnb")}
          width="100%" 
          height="1000px" />
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
