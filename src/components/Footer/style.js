import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 91%;
  height: 50px; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #D9D9D9;
  background: #f5f5f5;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
`

export const SocialLinksListWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 16px;
`

export const SocialLinkItem = styled.li`
  margin-left: 18px;
  max-height: 20px;
`

export const SocialLinkImg = styled.img``

export const OtherLinksWrapper = styled.ul`
  display: flex;  
  list-style: none;
`

export const LinkItem = styled.li`
  padding: 0 16px;
  height: 50px;
  display: flex;
  align-items: center;
  border-left: 1px solid #D9D9D9;
`

export const Link = styled.a.attrs(({
  href: '#!'
}))`
  font-size: 15px;
  color: #000000;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`