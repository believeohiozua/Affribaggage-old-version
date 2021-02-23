import React from 'react'
import {connect} from 'react-redux'
import {SenderInfoTable, UserInfoMain, ItemPhotosSlider} from 'components'
import {Button} from 'components/UI'
import {senderStarSolid, upload} from 'assets'
import {showItemWeightInKg, showItemWeightInLbs} from '../../redux'

import {
  ButtonsWrapper,
  ButtonWrapper,
  CopyLinkButton,
  CopyLinkButtonWrapper,
  ItemDescription,
  ItemDescriptionTitle,
  ItemDescriptionWrapper,
  ItemFirstCol,
  ItemInfoTable,
  ItemLink,
  ItemRow,
  ItemSecondCol,
  SenderDescriptionHeader,
  SenderDescriptionWrapper,
  SendersAmount,
  StarButton,
  StarImg,
  StarsWrapper,
  Title,
  UploadButton,
  UploadImg,
  WeightSwitcher,
  CopyLinkWrapper,
  ItemPhotosSliderWrapper,
  SenderInfoTableWrapper
} from './style'

const SenderDescription = (props) => {
  return (
    <>
      <SenderDescriptionWrapper>
        <SenderDescriptionHeader>
          <Title>
            Travellers Delivery To Nigeria
          </Title>
          <SendersAmount>
            24
          </SendersAmount>
          <StarsWrapper>
            <StarButton>
              <StarImg src={senderStarSolid}/>
            </StarButton>
            <StarButton>
              <StarImg src={senderStarSolid}/>
            </StarButton>
            <StarButton>
              <StarImg src={senderStarSolid}/>
            </StarButton>
            <StarButton>
              <StarImg src={senderStarSolid}/>
            </StarButton>
            <StarButton>
              <StarImg src={senderStarSolid}/>
            </StarButton>
          </StarsWrapper>
          <UploadButton>
            <UploadImg src={upload}/>
          </UploadButton>
        </SenderDescriptionHeader>
        <UserInfoMain status="Sender"/>
        <SenderInfoTableWrapper>
          <SenderInfoTable/>
        </SenderInfoTableWrapper>
        <CopyLinkWrapper>
          <CopyLinkButtonWrapper>
            <CopyLinkButton>Copy link</CopyLinkButton>
          </CopyLinkButtonWrapper>
        </CopyLinkWrapper>
        <ItemDescriptionWrapper>
          <ItemDescriptionTitle>Item Description</ItemDescriptionTitle>
          <ItemDescription>
            <ItemPhotosSliderWrapper>
              <ItemPhotosSlider/>
            </ItemPhotosSliderWrapper>
            <ItemInfoTable>
              <ItemRow>
                <ItemFirstCol>Weight</ItemFirstCol>
                <ItemSecondCol>
                  0,5 <WeightSwitcher
                        isItemWeightInKg={props.isItemWeightInKg}
                        isItemWeightInLbs={props.isItemWeightInLbs}>
                        {props.isItemWeightInKg ? 'kg' : 'lbs'}
                      </WeightSwitcher>
                      <WeightSwitcher
                        isItemWeightInKg={props.isItemWeightInKg}
                        isItemWeightInLbs={props.isItemWeightInLbs}
                        onClick={() => props.isItemWeightInKg ? props.showItemWeightInLbsCmp() : props.showItemWeightInKgCmp()}>
                        {props.isItemWeightInKg ? 'lbs' : 'kg'}
                      </WeightSwitcher>
                </ItemSecondCol>
              </ItemRow>
              <ItemRow>
                <ItemFirstCol>Quantity</ItemFirstCol>
                <ItemSecondCol>37</ItemSecondCol>
              </ItemRow>
              <ItemRow>
                <ItemFirstCol>Package</ItemFirstCol>
                <ItemSecondCol>With a box</ItemSecondCol>
              </ItemRow>
              <ItemRow>
                <ItemFirstCol>Where to buy</ItemFirstCol>
                <ItemLink to="#!">amazon.com</ItemLink>
              </ItemRow>
            </ItemInfoTable>
          </ItemDescription>
        </ItemDescriptionWrapper>
      </SenderDescriptionWrapper>
      <ButtonsWrapper>
        <ButtonWrapper>
          <Button btnType="blue">ACCEPT OFFER</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button btnType="blue">SEND A MESSAGE</Button>
        </ButtonWrapper>
      </ButtonsWrapper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isItemWeightInKg: state.userInfo.isItemWeightInKg,
    isItemWeightInLbs: state.userInfo.isItemWeightInLbs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showItemWeightInKgCmp: () => dispatch(showItemWeightInKg()),
    showItemWeightInLbsCmp: () => dispatch(showItemWeightInLbs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SenderDescription)