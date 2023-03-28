import React from 'react'
import { Carousel } from 'bootstrap'
import './Energy.css'
function Energy() {
  return (
    
    <div className='bbb'>
        <h2 className='utt'>Electricity</h2>
        <div className='btt2'>
        <div className='ht2'>
        <div>
                <img src="https://www.solarschools.net/build/img/learn/energy/electricity//electric-car-charging-station_370x210_crop_center_q95.jpg" width="300px"/>
        </div>

        <div >
            
            <h2>In a Flash</h2>
            <h3>Electricity</h3>
            <p>Electricity comes from electrical energy. This is energy that is caused by moving electric charges.

Electricity can either build up in one place (static electricity) or flow from one place to another (current electricity).</p>
        </div>
        
</div>

<div className='ht2'>
        <div >
            <h2>In a Flash</h2>
            <h3>Electricity</h3>
            <p>Electricity comes from electrical energy. This is energy that is caused by moving electric charges.

Electricity can either build up in one place (static electricity) or flow from one place to another (current electricity).</p>
        </div>
        <div>
                <img src="https://atlanticces.com/wp-content/uploads/2016/04/renewable-energy.jpg" width="250px" className='pic'/>
        </div>

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

<div className='ht2'>
        <div>
                <img src="https://media.defense.gov/2016/Nov/30/2001673543/1200/1200/0/161130-F-ZZ999-0003.JPG.jpg" width="300px"className='pic'/>
        </div>
        <div  className='ms-3'>
            <h2>In a Flash</h2>
            <h3>Electricity</h3>
            <p>Electricity comes from electrical energy. This is energy that is caused by moving electric charges.

Electricity can either build up in one place (static electricity) or flow from one place to another (current electricity).</p>
        </div>
        

</div>




    <div className='part1'>
        <h3>What are the alternatives to taking the car?</h3>
        <p>There are plenty of healthy and fun ways to get around without going by car.</p>
        <p>Here are some ideas:</p>
        <div className='part2 '>
            <div >
                <img src="https://www.solarschools.net/build/img/learn/energy/types/thermal//oven_370x210_crop_center_q95.jpg" width="300px" className='pic'/>
                <p>Take public transport: Catching the bus, taking the train or hopping on a tram or ferry are all more environmentally-friendly ways to travel.</p>

            </div>
            <div >
                <img src="https://www.solarschools.net/build/img/learn/energy/conversion//charger_370x210_crop_center_q95.jpg" width="300px" className='pic'/>
                <p>Carpool or walking bus: Arranging a carpool with friends or setting up a walking bus route is a fun and sustainable way to get to and from school.</p>
            </div>
        </div>
        <div className='part3'>
            <div >
                <img src="https://www.solarschools.net/build/img/learn/energy/electricity//lamp_370x210_crop_center_q95.jpg" width="300px" className='pic'/>
                <p>Walk or cycle: For shorter journeys, ride your bike or use your own two feet! It's better for the environment and for your health.</p>
            </div>
            <div>
                <img src="https://www.solarschools.net/build/img/learn/energy/conversion//lightning_370x210_crop_center_q95.jpg" width="300px" className='pic'/>
                <p>Other: There are many different types of human powered vehicles such as scooters and skateboards.</p>
            </div>
        </div>
    </div>


    


</div>
    </div>
  )
}

export default Energy