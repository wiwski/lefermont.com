import { Link } from 'gatsby';
import styled from 'styled-components';

export default styled(Link)`
  color: #000;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #757575;
  }
`;
