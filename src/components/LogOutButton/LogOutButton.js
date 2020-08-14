import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { TextField, Button, MenuItem, Modal } from "@material-ui/core";


 // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
const LogOutButton = props => {
  const handleLogout = () => {
    props.dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      {!props.asLink &&
        <Button  className={props.className}
        onClick={handleLogout} color="primary" variant="outlined">
          Log Out
        </Button>
      }
      {props.asLink &&
        <Link  className={props.className}
        onClick={handleLogout} color="primary" variant="outlined">
          Log Out
        </Link>
      }
    </>
  )
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
