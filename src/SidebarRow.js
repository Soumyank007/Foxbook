import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React from 'react';
import "./SidebarRow.css";
import "./Sidebar";
function SidebarRow({src,Icon,title}) {
  return (
    <div className='sidebarRow'>
{src && <AccountBoxIcon src={src}/>}  
{Icon &&<Icon/>}
<h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;