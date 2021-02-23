import React from 'react'

import {
  StatisticWrapper,
  StatisticItemWrapper,
  StatisticItem,
  StatisticItemLabel
} from './style'

const Statistic = () => {
  return (
    <StatisticWrapper>
      <StatisticItemWrapper>
        <StatisticItem>60,000</StatisticItem>
        <StatisticItemLabel>Shipments posted</StatisticItemLabel>
      </StatisticItemWrapper>
      <StatisticItemWrapper>
        <StatisticItem>48,000</StatisticItem>
        <StatisticItemLabel>Trips posted</StatisticItemLabel>
      </StatisticItemWrapper>
      <StatisticItemWrapper>
        <StatisticItem>100,000</StatisticItem>
        <StatisticItemLabel>Travelled miles</StatisticItemLabel>
      </StatisticItemWrapper>
    </StatisticWrapper>
  )
}

export default Statistic