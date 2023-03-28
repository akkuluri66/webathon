import React from 'react'
import {Outlet} from 'react-router-dom';

import Footerweb  from './Footerweb';
function RootLayout() {


  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default RootLayout