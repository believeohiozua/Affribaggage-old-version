import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SenderDescriptionWrapper = styled.div`
  margin: 30px 0 51px;
  padding: 15px 25px;
  background: #ffffff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 16px;
  box-sizing: border-box;
`

export const SenderDescriptionHeader = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-right: 15px;
`

export const SendersAmount = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
  margin-right: 6px;
  height: 20px;
`

export const StarsWrapper = styled.div`
  display: flex;
  
  :last-of-type {
    margin-right: 0;
  }
`

export const StarButton = styled.button`
  display: block;
  background: none;
  border: none;
  height: 19px;
  margin-right: 3px;
  cursor: pointer;
`

export const StarImg = styled.img``

export const UploadButton = styled.button`
  margin-left: auto;
  margin-right: 5.3%;
  background: none;
  border: none;
  width: 17px;
  height: 18px;
  cursor: pointer;
`

export const UploadImg = styled.img``

export const CopyLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #CACACA;
`

export const CopyLinkButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 5.3%;
`

export const CopyLinkButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #4378FF;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

export const ItemDescriptionWrapper = styled.div`
  margin-bottom: 15px;
`

export const ItemDescription = styled.div`
  display: flex;
`

export const ItemDescriptionTitle = styled.h2`
  font-size: 18px;  
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;  
`

export const ItemInfoTable = styled.div`
  display: inline-block;
  background: #ffffff;
  padding: 10px;
  box-shadow: 0 1.65347px 12.4011px rgba(0, 0, 0, .05);
  border-radius: 8.26737px;
  cursor: default;
`

export const ItemRow = styled.div`
  display: flex;
  border-bottom: 1px solid #B8CCFF;
  
  :last-of-type {
    border-bottom: none;
  }
`

export const ItemFirstCol = styled.span`
  padding: 10px;
  border-right: 1px solid #B8CCFF;
  font-size: 14px;
  color: #737373;
  width: 86px;
`

export const ItemSecondCol = styled.span`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
`

export const WeightSwitcher = styled.span`
  color: ${p => p.isItemWeightInKg || p.isItemWeightInLbs ? '#141414' : '#737373'};
  font-weight: normal;
  margin-right: 5px;
  
  :last-of-type {
    color: #737373;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const ItemLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 10px;
  color: #4378FF;
  
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;  
`

export const ButtonWrapper = styled.div`
  margin-right: 10.6%;
  
  :last-of-type {
    margin: 0;
  }
`

export const ItemPhotosSliderWrapper = styled.div`
  margin-right: 30px;
  width: 40%;
`

export const SenderInfoTableWrapper = styled.div`
  margin-bottom: 30px;
`