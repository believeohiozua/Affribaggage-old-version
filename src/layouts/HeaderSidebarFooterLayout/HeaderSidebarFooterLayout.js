import React from 'react'
import {Header, SideBar, Footer} from 'components'
import {LayoutWrapper, HeaderSideBarWrapper, MainContent} from './style'

const HeaderSidebarFooterLayout = (props) => {
  return (
    <>
      <LayoutWrapper>
        <HeaderSideBarWrapper>
          <SideBar moreThanTwoPages/>
          <Header/>
        </HeaderSideBarWrapper>
        <Footer/>
      </LayoutWrapper>
      <MainContent>
        {props.children}
      </MainContent>
    </>
  )
}

export default HeaderSidebarFooterLayout