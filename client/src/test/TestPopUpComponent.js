
import Axios from 'axios'
import {useState , useEffect} from 'react'
import {CPopUp} from '../components/CPopUp.js'

import * as CONSTANTS from '../pages/Constants.js'



const TestPopUpComponent = () => {

  const [selectResource, setSelectResource] = useState( 99999)
  const [selectCategory, setSelectCategory] = useState( 99999 )
  const [selectCost, setSelectCost] = useState( 99999 )

  const pullResourceSelected = (data)=>{
    setSelectResource(data)
    console.log("resource menu selected:" + data)
  }

  const pullCateogrySelected = (data)=>{
    setSelectCategory(data)
    console.log("category menu selected:" + data )
  }

  const pullCostSelected = (data)=>{
    setSelectCost(data)
    console.log("cost menu selected:" + data )
  }

  const GetSelections = () => {
        
        let sel = "selected Resource #: " + selectResource 
        sel += " Category#: " + selectCategory
        sel += " Cost #:" + selectCost 
        sel += " )"


        alert( sel )

   }

  
  const url_categoryid = CONSTANTS.url_categoryid
  const url_resourceid = CONSTANTS.url_resourceid
  const url_costid = CONSTANTS.url_costid

  return (
        <div>
        <h1>Test PopUp Menu</h1>

        <span style={{ color:'blue' ,'fontSize':'12px'}}>
        this tests getting the label,value from a pop-up menu component<br/>
        using a child to parent function
        if menus are empty, then likely server isnt running<br/>
        or the database/tables not found<br/>
        {url_categoryid}<br/>
        {url_resourceid}<br/>
        {url_costid}<br/>
        </span>
        <p/>

        <CPopUp name="-Primary" url={url_resourceid}
        func = {pullResourceSelected}
        />

        <CPopUp name="-Category" url={url_categoryid} 
        func = {pullCateogrySelected }
        />
       
        <CPopUp name="-UnitCost" url={url_costid} 
        func = {pullCostSelected }
        />
           <button
           type="button"
           class="btn btn-primary"
           onClick= {GetSelections }
           ><b>GetSelections</b>
          </button>

        </div>     


  )


}


export {TestPopUpComponent}