import React from 'react';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';

const Login = () => (
  <div className={styles.component}>
    <h2>Login view</h2>
  </div>
);

Login.propTypes = {
  children: PropTypes.node,
};


export default Login;