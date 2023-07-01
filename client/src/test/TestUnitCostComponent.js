
import Axios from 'axios'
import {useState , useEffect} from 'react'
import {CUnitCost} from '../components/CUnitCost.js'
import { CPopUp } from '../components/CPopUp.js'
import * as CONSTANTS from '../pages/Constants.js'

const url_costid = CONSTANTS.url_costid



const TestUnitCostComponent = () => {


  const [menu, setMenu] = useState( 9999 )
  const [text, setText] = useState( "9999" )

  const pullMenuItem = (data)=>{
    setMenu(data)
    console.log("menu # selected:" + data )
  }
  
  const pullText = (data)=>{
    setText(data)
    console.log("text: " + data )
  }

  const GetSelections = () => {
        
        let sel = "text: " + text
        sel += " item #: " + menu
        sel += " "

        alert( sel )

   }


  

  return (
        <div>
        <h1>Test Unit Cost Menu</h1>

        <span style={{ color:'blue' ,'fontSize':'12px'}}>
        if menus are empty, then likely server isnt running<br/>
        or the database/tables not found<br/>
        returns selected label<br/>
        text entered , or 999 if nothing entered <br/>
        the default useState(999) value  <br/>
        {url_costid}
  
        </span>
        <p/>
   {/*
  
  */}
  <CUnitCost name="-UnitCost" url={url_costid}  returnCostText={pullText}  returnMenuOption = {pullMenuItem }  />

  <button
           type="button"
           class="btn btn-primary"
           onClick= {GetSelections }
           ><b>GetSelections</b>
          </button>

        </div>     


  )


}


export {TestUnitCostComponent}