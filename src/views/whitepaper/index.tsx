import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, BaseLayout } from 'beez-uikit'
import Page from 'components/layout/Page'

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

const SwapCard = () => {
  return (
    <StyledSwapCard>
      <CardBody>
        <Heading size="xl" mb="24px" >
          <CardImage src="/images/whitepaper.jpg" alt="Whitepaper"  />
        </Heading>
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
