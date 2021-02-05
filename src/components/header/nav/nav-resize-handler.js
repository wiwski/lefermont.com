import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const NavResizeHandler = props => {
  useEffect(() => {
    function handleResize() {
      const isHamburgerActive = document
        .querySelector('.hamburger')
        .classList.contains('is-active');
      if (
        window.innerWidth > 870 &&
        document.querySelector('body').style.overflowY == 'hidden'
      ) {
        document.querySelector('body').style.overflowY = 'auto';
      } else if (
        window.innerWidth <= 870 &&
        document.querySelector('body').style.overflowY == 'auto' &&
        isHamburgerActive
      ) {
        document.querySelector('body').style.overflowY = 'hidden';
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{props.children}</>;
};

NavResizeHandler.propTypes = {
  children: PropTypes.array,
};

export default NavResizeHandler;
