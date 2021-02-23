import styled from 'styled-components'

export const TablesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: content;
  cursor: default;
`

export const InfoTableWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;   
  padding: 14px;
  white-space: nowrap;
  background: #ffffff;
  box-shadow: 0 1.71517px 12.8638px rgba(0, 0, 0, .05);
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 12px;
  
  & > * > * {
    display: flex;
    justify-content: center;
    width: 100%;  
    border-bottom: 1px solid #B8CCFF;
    padding: 6px 11px;
    text-align: center;
    font-size: 13px;
    color: #737373;
    box-sizing: border-box;
    
    &:nth-child(2) {
      border-bottom: none;
      color: #141414;
      font-weight: 600; 
    }      
  }
  
  & > * {
    border-right: 1px solid #B8CCFF;
    flex-wrap: wrap;
    box-sizing: border-box;

    :last-of-type { 
      border-right: none;
    }
  }
`

export const InfoItemWrapper = styled.div``

export const Info = styled.span``