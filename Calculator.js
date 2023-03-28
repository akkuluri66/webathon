import React from 'react'
import './Calculator.css'
import { useForm } from 'react-hook-form';
function Calculator() {
  return (
    <div>
        <div className='part'>
    <div>
<span><b>Plastic</b></span>
<input  type="text" height="60%" name="plastic" id="plastic" size="10" className='i1'/>
<span>Kg</span>
</div>
<br></br>
<br></br>
<div>
<span><b>Paper</b></span>
<input  type="text" height="60%" name="paper" id="paper" size="10" className='i2'/>
<span>Kg</span>
</div>
<br></br>
<br></br>
<div>
<span><b>Glass</b></span>
<input  type="text" height="60%" name="Glass" id="Glass" size="10" className='i3'/>
<span>Kg</span>
</div>
<br></br>
<br></br>
<div>
<span><b>Cardboard</b></span>
<input  type="text" height="60%" name="Cardboard" id="Cardboard" size="10" className='i4'/>
<span>Kg</span>
</div>
<br></br>
<br></br>
<div>
<span><b>Other</b></span>
<input  type="text" height="60%" name="Other" id="Other" size="10" className='i5'/>
<span>Kg</span>
</div>
    <button type='submit' className='btn btn-danger mt-5 btt'>Calculate</button>
</div>
    </div>
  )
}

export default Calculator