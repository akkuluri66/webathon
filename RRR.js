import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {AiOutlineMenu} from "react-icons/ai";
import { Carousel } from 'react-bootstrap';
import rrr1 from './images/rrr1.jpg'
import rrr2 from './images/rrr2.jpg'
import back from './images/back.jpg'
import immg1 from './images/immg1.jpg'
import './RRR.css'
function RRR() {
  return (
    <div className='full'>
    <div >


    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <span className='sum'><AiOutlineMenu/></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/location">Locations</Dropdown.Item>
        <Dropdown.Item href="/calculator">Calculator</Dropdown.Item>
        <Dropdown.Item href="/">Products</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<div className='main2'>
    <div className='cardd1'>
      <div className='text-center'>
        <h3>In a Flash</h3>
        <h4>The 3 'R's</h4>
        <p>Reduce, Reuse, Recycle – these three 'R' words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away.

It's Really simple!</p>
      </div>
      <div className='imgr'>
        <img src={immg1} width="300px"/>
      </div>
    </div>

    <div className='cardd1'>
    <div className='imgr1'>
        <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//reduce-water-usage_370x210_crop_center_q95.jpg" width="300px"/>
      </div>
      <div className='text-center'>
        <h3>In a Flash</h3>
        <h4>The 3 'R's</h4>
        <p>Reduce, Reuse, Recycle – these three 'R' words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away.

It's Really simple!</p>
      </div>
      
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner w-50 caro">
      <div className="carousel-item active c-item">
        <div className="carousel-caption top-0 mt-4">
          <p className="fs-3 text-uppercase x">Cool Facts!</p>
          <p className=" fw-bolder text-capitalize">For every ton of paper that is recycled 13 trees are saved.</p>
          
        </div>
      </div>
      <div className="carousel-item c-item">
        <div className="carousel-caption top-0 mt-4">
            <p className="fs-3 text-uppercase x">Cool Facts!</p>
            <p className=" fw-bolder text-capitalize">For every ton of paper that is recycled 13 trees are saved.</p>
            
          </div>
      </div>
      <div className="carousel-item c-item">
        <div className="carousel-caption top-0 mt-4">
            <p className="fs-3 text-uppercase x">Cool Facts!</p>
            <p className=" fw-bolder text-capitalize">For every ton of paper that is recycled 13 trees are saved.</p>
            
          </div>
      </div>
    </div>
    <button className="carousel-control-prev c100" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next c200" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
    <div className='cardd1'>
      <div className='text-center'>
        <h3>In a Flash</h3>
        <h4>The 3 'R's</h4>
        <p>Reduce, Reuse, Recycle – these three 'R' words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away.

It's Really simple!</p>
      </div>
      <div className='imgr'>
        <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//reused-shoes_370x210_crop_center_q95.jpg" width="300px"/>
      </div>
    </div>


    <div className='kt2'>
      <h2>R3: How can I recycle the products I use?</h2>
      <p>The third 'R' is about making sure you separate items that can be recycled, meaning they can be used for a new purpose.</p>
      <p>Materials that can be recycled include:</p>
      <div className='gt'>
        <div>
          <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle/recycle//recycle-glass_200x200_crop_center_q95.jpg" className='yt'/>
    
        </div>
        <div>
          <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle/recycle//recycle-cardboard_200x200_crop_center_q95.jpg" className='yt'/>
        </div>
        <div>
          <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle/recycle//recycle-cans_200x200_crop_center_q95.jpg" className='yt'/>
        </div>
      </div>

    </div>
    {/*
    <div className='www'>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//reused-shoes_370x210_crop_center_q95.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//reused-shoes_370x210_crop_center_q95.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle/recycle//recycle-glass_200x200_crop_center_q95.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  */}
     
     <div className='cardd1'>
      <div className='text-center'>
        <h3>In a Flash</h3>
        <h4>The 3 'R's</h4>
        <p>Reduce, Reuse, Recycle – these three 'R' words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away.

It's Really simple!</p>
      </div>
      <div className='imgr'>
        <img src="https://www.solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//recycled-bottle-elephant_370x210_crop_center_q95.jpg" width="300px"/>
      </div>
    </div>



    </div>
    </div>
    </div>

  )
}

export default RRR