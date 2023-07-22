// Save to data base
/*

Test adding another TextBox
for Capabilities
save to localStorage
https://www.telerik.com/blogs/how-to-programmatically-add-input-fields-react-forms

https://www.freecodecamp.org/news/build-dynamic-forms-in-react/


*/

import * as CONSTANTS from '../pages/Constants.js'
import '../pages/Page.css'
import {useState} from 'react'

import {CCapabilities} from '../components/CCapabilities.js'




const TestCCapabilities = () => {
  const pullData = (data)=>{

        console.log( data )

  }
   
  return (
            <div>
            <h2>Test CCapabilities Component</h2>
              
              <CCapabilities func={pullData} />
            </div>



  )

}


export {TestCCapabilities}