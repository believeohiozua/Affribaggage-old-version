import React from 'react'

import {
  facebookIcon,
  googleIcon,
  instagramIcon,
  linkedInIcon,
  telegramIcon,
  twitterIcon
} from 'assets'

import {
  FooterWrapper,
  Link,
  LinkItem,
  OtherLinksWrapper,
  SocialLinkImg,
  SocialLinkItem,
  SocialLinksListWrapper
} from './style'

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinksListWrapper>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={googleIcon}/>
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={telegramIcon}/>
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={facebookIcon}/>
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={twitterIcon}/>
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={instagramIcon}/>
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <SocialLinkImg src={linkedInIcon}/>
          </Link>
        </SocialLinkItem>
      </SocialLinksListWrapper>
      <OtherLinksWrapper>
        <LinkItem>
          <Link>Advertise</Link>
        </LinkItem>
        <LinkItem>
          <Link>Transport</Link>
        </LinkItem>
        <LinkItem>
          <Link>Resources</Link>
        </LinkItem>
        <LinkItem>
          <Link>Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link>About</Link>
        </LinkItem>
        <LinkItem>
          <Link>Terms</Link>
        </LinkItem>
        <LinkItem>
          <Link>© Afriaggage.com 2020</Link>
        </LinkItem>
      </OtherLinksWrapper>
    </FooterWrapper>
  )
}

export default Footer