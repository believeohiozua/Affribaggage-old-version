import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'components/UI'
import {HeaderSidebarFooterLayout} from 'layouts'

import {
  CommentsList,
  FiltersSorting,
  FindLoadsForm,
  HowItWorksVideo,
  LoadsCardsDescription,
  LoadsList,
  LoadsTripsSwitcher,
  Statistic,
  TravellersCardsDescription,
  TravellersCardsList,
  SenderDescription,
  TravellerDescription
} from 'components'

import {
  AvailableLoadContent,
  AvailableLoadWrapper,
  CommentsPart,
  CommentsReviews,
  CommentsTitle,
  CommentsTitleReviewsWrapper,
  FiltersBlockWrapper,
  FoundOffersContent,
  FoundOffersWrapper,
  PageWrapper,
  PostsPart,
  ShowMoreCommentsButtonWrapper,
  ShowMoreLoadsButtonWrapper,
  Title,
  UnderFormLine
} from './style'

const TravellersPage = (props) => {
  const showMoreLoads = () => {
    console.log('Show more loads')
  }

  const showMoreComments = () => {
    console.log('Show more comments')
  }

  return (
    <HeaderSidebarFooterLayout>
      <PageWrapper>
        <PostsPart>
          <Title>
            Save money shipping, Make money Travelling.
          </Title>
          <FindLoadsForm/>
          <UnderFormLine/>
          <FiltersBlockWrapper>
            <LoadsTripsSwitcher/>
            <FoundOffersWrapper>
              <FoundOffersContent>
                Founded {props.foundedOffers} offers
              </FoundOffersContent>
            </FoundOffersWrapper>
            <FiltersSorting/>
          </FiltersBlockWrapper>
          <AvailableLoadWrapper>
            <AvailableLoadContent>
              Available Load you can pick from as a traveller
            </AvailableLoadContent>
          </AvailableLoadWrapper>
          {props.areLoadsSelected ? (
            <>
              <LoadsCardsDescription/>
              <LoadsList/>
            </>
          ) : (
            <>
              <TravellersCardsDescription/>
              <TravellersCardsList/>
            </>
          )}
          <ShowMoreLoadsButtonWrapper>
            <Button
              btnType="secondary"
              onClick={showMoreLoads}>
              SHOW MORE
            </Button>
          </ShowMoreLoadsButtonWrapper>
        </PostsPart>
        <CommentsPart>
          {props.isHomeLinkActive ?
            <>
              <Statistic/>
              <HowItWorksVideo/>
              {!props.isUserInfoVisible ? (
                <>
                  <CommentsTitleReviewsWrapper>
                    <CommentsTitle>WHAT CUSTOMERS ARE SAYING</CommentsTitle>
                    <CommentsReviews>12 262+ Reviews</CommentsReviews>
                  </CommentsTitleReviewsWrapper>
                  <CommentsList/>
                  <ShowMoreCommentsButtonWrapper>
                    <Button
                      btnType="secondary"
                      onClick={showMoreComments}>
                      SHOW MORE
                    </Button>
                  </ShowMoreCommentsButtonWrapper>
                </>
              ) : props.areLoadsSelected ? <SenderDescription/> : <TravellerDescription/>}
            </>
            : <div>How it works</div>}
        </CommentsPart>
      </PageWrapper>
    </HeaderSidebarFooterLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    foundedOffers: state.filters.foundedOffers,
    areLoadsSelected: state.filters.areLoadsSelected,
    isHomeLinkActive: state.pages.isHomeLinkActive,
    isTravellerDescriptionActive: state.pages.isTravellerDescriptionActive,
    isUserInfoVisible: state.filters.isUserInfoVisible
  }
}

export default connect(mapStateToProps)(TravellersPage)