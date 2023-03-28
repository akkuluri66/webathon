import React from 'react'
import './Homeweb.css'
import img3 from './images/img3.jpg'
import { Link } from 'react-router-dom'
import Navbarweb from './Navbarweb'
function Homeweb() {
  return (
    <div>
        <Navbarweb/>
    <div className='main'>
    <div className='car1'>
    <Link className='text' to="/rrr">
    <div className='col'>
    <div className="card c1">
  <img src={img3} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title"><span className='textcolor'>RRR</span></h5>
    <p className="card-text"><span className='textcolor'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
    <div className='like'>
  </div>
  </div> 
    </div>
    </div>
</Link>
<Link className='text' to="/energy">
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
<Link className='text' to="/transport">
    <div className='col'>
    <div className="card c1">
  <img src={img3} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title"><span className='textcolor'>Transportation</span></h5>
    <p className="card-text"><span className='textcolor'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
    <div className='like'>
  </div>
  </div> 
    </div>
    </div>
</Link>
</div>
    </div>
    </div>
  )
}

export default Homeweb