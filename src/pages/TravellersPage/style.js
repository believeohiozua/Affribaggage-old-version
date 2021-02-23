import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #f5f5f5;
`

export const PostsPart = styled.div`
  width: 50%;
  padding: 20px 30px;
  box-sizing: border-box;
  border-right: 1px solid #D9D9D9;
  height: calc(100vh - 100px);
  overflow-y: auto;
  
  ::-webkit-scrollbar {
   width: 2px;
   height: 8px;
   background-color: rgba(0, 0, 0, .1);
  }

  ::-webkit-scrollbar-thumb {
   background-color: rgba(0, 0, 0, .4);
  }
`

export const CommentsPart = styled.div`
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  overflow-y: auto;
  
  ::-webkit-scrollbar {
   width: 3px;
   height: 8px;
   background-color: rgba(0, 0, 0, .1);
  }

  ::-webkit-scrollbar-thumb {
   background-color: rgba(0, 0, 0, .4);
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 22px;
`

export const UnderFormLine = styled.div`
  border: 3px solid #FC0707;
  margin-bottom: 22px;
`

export const FiltersBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`

export const FoundOffersWrapper = styled.div`
  width: 36.5%;
`

export const FoundOffersContent = styled.p`
  font-size: 15px;
  font-weight: 500;
`

export const AvailableLoadWrapper = styled.div`
  margin: 10px 0 30px;
`

export const AvailableLoadContent = styled.p`
  font-size: 12px;
  color: #739AFF;
`

export const ShowMoreLoadsButtonWrapper = styled.div`
  width: 144px;
  height: 48px;
  margin: 30px auto;
`

export const CommentsTitleReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 51px;
`

export const CommentsTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`

export const CommentsReviews = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #565656;
`

export const ShowMoreCommentsButtonWrapper = styled.div`
  width: 144px;
  height: 48px;
  margin: 87px auto 30px;
`