import React from 'react'
import {upload} from 'assets'
import {TravellerInfoTable, UserInfoMain} from 'components'
import {Button} from 'components/UI'

import {
  Requirements,
  RequirementsLabel,
  Title,
  TravellerDescriptionHeader,
  TravellerDescriptionWrapper,
  TravellerInfoTableWrapper,
  TravellerRequirements,
  Upload,
  UploadButton,
  ButtonWrapper
} from './style'

const TravellerDescription = () => {
  return (
    <>
      <TravellerDescriptionWrapper>
        <TravellerDescriptionHeader>
          <Title>Travellers Delivery To Nigeria</Title>
          <UploadButton>
            <Upload src={upload}/>
          </UploadButton>
        </TravellerDescriptionHeader>
        <UserInfoMain status="Traveller"/>
        <TravellerInfoTableWrapper>
          <TravellerInfoTable/>
        </TravellerInfoTableWrapper>
        <TravellerRequirements>
          <RequirementsLabel>Requirements from the traveller:</RequirementsLabel>
          <Requirements>I don't want anything complicated on my trips i need to know and check items before flying with
            it. </Requirements>
        </TravellerRequirements>
      </TravellerDescriptionWrapper>
      <ButtonWrapper>
        <Button btnType="blue">CONTACT TRAVELLER</Button>
      </ButtonWrapper>
    </>
  )
}

export default TravellerDescription