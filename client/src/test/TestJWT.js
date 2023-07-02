
import {React,useState, useEffect} from 'react'

import Axios from 'axios'

import {LoginPageJWT} from "../pages/LoginPageJWT"
import * as CONSTANTS from '../pages/Constants.js'

const TestJWT = ( )=>  {

    
    return(
        <div>
          <center><h2>Test JWT </h2></center>
             <LoginPageJWT/>          
           </div>

  )

}

export {TestJWT}