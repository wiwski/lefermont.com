import styled from 'styled-components';
import Nav from 'components/header/nav';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100px;
  ${MEDIA.MIN_DESKTOP`
    height: 180px;
  `}
`;

export const LeftSideNav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavStyled = styled(Nav)`
  margin-left: 24px;
`;

export const SocialLinksWrapperDesktop = styled.div`
  ${MEDIA.DESKTOP`
    display: none;
  `}
`;

export const SocialLinksWrapperPhone = styled.div`
  display: none;
  ${MEDIA.DESKTOP`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`}
`;
