import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import fox from "./images/fox.jpg";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src={fox} title="Soumyank padhy" />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information center" />
      
      <SidebarRow Icon={EmojiFlagsIcon} title={"Pages"} />

      <SidebarRow Icon={PeopleIcon} title={"Friends"} />

      <SidebarRow Icon={ChatIcon} title={"Messenger"} />

      <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} />

      <SidebarRow Icon={VideoLibraryIcon} title={"Videos"} />

      <SidebarRow Icon={ExpandMoreIcon} title={"See more"} />
    </div>
  );
}

export default Sidebar;