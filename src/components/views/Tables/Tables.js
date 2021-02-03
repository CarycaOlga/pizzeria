import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/xyz`}>Booking xyz</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/xxx`}>Event xxx</Link>
  </div>
);

export default Tables;