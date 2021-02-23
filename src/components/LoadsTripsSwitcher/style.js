import styled from 'styled-components'

export const LoadsTripsSwitcherWrapper = styled.div`
  width: 25.5%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

export const LoadsWrapper = styled.div`
  width: 50%;
  background: ${p => !p.isActive ? '#DBE5FF' : '#82A5FF'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #8DADFF;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`

export const LoadsLabel = styled.span`
  font-size: 14px;
  color: ${p => p.isActive ? '#ffffff' : '#8DADFF'};
`

export const TripsWrapper = styled.div`
  width: 50%;
  background: ${p => !p.isActive ? '#DBE5FF' : '#82A5FF'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: #8DADFF;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`

export const TripsLabel = styled.span`
  font-size: 14px;
  color: ${p => p.isActive ? '#ffffff' : '#8DADFF'};
`