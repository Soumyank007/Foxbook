import React from 'react';
import "./Header.css";
import logo from './images/wolf.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import {  NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';

 

function Header() {
  return (
 
    < div className = "header" >
      <div className="header_left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_input">
        <SearchIcon />
        <input placeholder='Search Foxbook' type="text" />
      </div>
      <div className="header_middle">
      <div className="header_options">
        <HomeIcon />
        
      </div>
      <div className="header_options">
        <FlagIcon fontsize="large" />
      </div>
      <div className="header_options">
        <SubscriptionsOutlined  fontsize="large"/>
      </div>
      <div className="header_options">
        <StorefrontOutlined fontsize="large" />
      </div>
      <div className="header_options">
        <SupervisedUserCircle fontsize="large" />
      </div>
      </div>
      <div className="header_right">
      <div className="header_info">
        <AccountBoxIcon fontsize="large"/>
        <h4>Soumyank Padhy</h4>
        </div>
        <IconButton >
          <AddIcon />
        </IconButton>
        <IconButton >
          <ForumIcon />

        </IconButton>
        <IconButton >
          <NotificationsActive />
        </IconButton>
      </div>
      </div>
  );
}

export default Header;