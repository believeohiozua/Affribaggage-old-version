import styled from 'styled-components'

export const InfoItemWrapper = styled.div``

export const Info = styled.span``

export const WeightSwitcher = styled.span`
  color: ${p => p.isItemWeightInKg || p.isItemWeightInLbs ? '#141414' : '#737373'};
  font-weight: normal;
  margin-left: 5px;
  
  :last-of-type {
    color: #737373;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`