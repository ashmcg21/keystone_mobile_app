import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import {Dehaze,} from '@material-ui/icons';
import {
  Menu,
  Drawer,
  Button,
  MenuItem,
  MenuList,
  IconButton
} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const muiStyles = (theme) => createStyles({
  navDrawer: {
    width: 240,
    backgroundColor: '#efefef',
  },
  navItem: {
    backgroundColor: '#333333',
    color: '#efefef',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333333',
  }
});



class Nav extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
    console.log('click');
  };
  handleClose = () => {
    this.setState({ open: false });
    console.log('close');
  };

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div className="nav">
          <IconButton label="dehaze drawer" onClick={this.handleOpen}>
            <Dehaze />
          </IconButton>
          
          <Link to="/home">
            <h2 className="nav-title">Keystone Community </h2>
          </Link>
          
        </div>

        <Drawer
          anchor="left"
          open={this.state.open} onClose={this.handleClose}>
          <div className={this.props.classes.navDrawer}>
            <MenuList>

            <MenuItem className={this.props.classes.navItem}>
            <Link to="/home" className={this.props.classes.navLink}>
              {/* Show this link if they are logged in or not,
              but call this link 'Home' if they are logged in,
              and call this link 'Login / Register' if they are not */}
              {props.user.id ? 'Home' : 'Login / Register'}
            </Link>
            </MenuItem>
            {/* Show the link to the info page and the logout button if the user is logged in */}
            {props.user.id && (
              <>
                <MenuItem>
                  <Link to="/profile" className={this.props.classes.navLink}>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/feedback" className={this.props.classes.navLink}>
                    Feedback
                  </Link>
                </MenuItem>
                <MenuItem>
                  <LogOutButton asLink className={this.props.classes.navLink} />
                </MenuItem>
              </>
            )}
            {/* Always show this link since the about page is not protected */}
            </MenuList>
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(muiStyles)(Nav));
