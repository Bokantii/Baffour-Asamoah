import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Button.module.scss';
const Button = ({href,children}) => {
  return (
    <Link to={href} className={classes.cta}>{children}</Link>
  )
}

export default Button