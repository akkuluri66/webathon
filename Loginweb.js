import React from 'react'
import './Loginweb.css'
import { TiGroup } from "react-icons/ti";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Loginweb() {


    const navigate = useNavigate()

    let {register,handleSubmit,formState:{errors}}=useForm()

  let submitForm=(userobj)=>{
         console.log(userobj)
         //make http post request to server new user to local api
         fetch("http://localhost:4000/user-api/user-login",{

          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({
            name : userobj.username,
            password: userobj.password
        })
      })
      .then(res=>res.json())
      .then(message=>{
        if(message.message==="success")
        {
            navigate("/home2")
        }
        else{
          alert(message.message)
        }
      })
      .catch(err=>console.log(err))
    }

  return (
    <div className='log5'>
      <h3>.</h3>
      <div className='log1'>
        <div className='ch'>
            <form onSubmit={handleSubmit(submitForm)}>
            <div className='icon'>
            <TiGroup size={'7em'}/>
            </div>
            <div className='line'>
                <div className='username'>
                <input  type="text" height="60%" name="username" id="username" placeholder="Username"  className='bigtext form-control mt-1' size="10" {...register("username",{required:true,minLength:"4"})}/>
                {errors.username?.type==="required" && <p className='text-danger'>*username is required</p>}
                {errors.username?.type=="minLength" && <p className='text-danger'>*min length is 4</p>}
                </div>
                <div className='pass'>
                    <input type="password" name="password" id="password" placeholder='password' className='form-control bigtext mt-3 ' size="20" {...register("password",{required:true})}/>
                {errors.password?.type=="required" && <p className="text-danger">*password is required</p>}
                </div>
                </div>
              {/*<Link className='text' to="/home2" >*/}
                <button type='submit' className='btn btn-success mt-3'>Login</button>
                {/*</Link>  */}
            </form>
            </div>
    </div>
  </div>
  )
}

export default Loginweb