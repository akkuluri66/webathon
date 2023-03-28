import React from 'react'
import './Homeweb.css'
import img3 from './images/img3.jpg'
import { Link } from 'react-router-dom'
import Navbarweb2 from './Navbarweb2'
import home from './images/home.jpg'
import Footerweb from './Footerweb'
import transport from './images/transport.jpg'
import rrr3 from './images/rrr3.jpeg'
function Homeweb() {
  return (
    <div>
        <Navbarweb2/>
    <div className='main'>
    <div className='car1'>
    <Link className='text' to="/Login">
    <div className='col'>
    <div className="card c1">
  <img src={rrr3} className="card-img-top"/>
  <br></br>
  <div className="card-body">
    <h5 className="card-title"><span className='textcolor'>RRR</span></h5>
    <p className="card-text"><span className='textcolor'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
    <div className='like'>
  </div>
  </div> 
    </div>
    </div>
</Link>
<Link className='text' to="/Login">
    <div className='col'>
    <div className="card c1">
  <img src={img3} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title"><span className='textcolor'>Energy Conservation</span></h5>
    <p className="card-text"><span className='textcolor'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
    <div className='like'>
  </div>
  </div> 
    </div>
    </div>
</Link>
<Link className='text' to="/Login">
    <div className='col'>
    <div className="card c1">
  <img src={transport} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title"><span className='textcolor'>Transport</span></h5>
    <p className="card-text"><span className='textcolor'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
    <div className='like'>
  </div>
  </div> 
    </div>
    </div>
</Link>
</div>
    </div>
    <Footerweb/>
    </div>
  )
}

export default Homeweb