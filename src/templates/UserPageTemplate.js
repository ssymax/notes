import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default UserPageTemplate;
