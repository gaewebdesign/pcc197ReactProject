
import Axios from 'axios'
import {useState, useEffect} from 'react'

const m = [
     {label: 1 , value: "Menu item 1 "},
     {label: 2 , value: "Menu item 2"}

]
/*
  TODO:  improve default selected item, (last one )

  */
const CUnitCost = (props) => {

     const [  menu , setMenu] = useState(m)

     const [ menuOption, setMenuOption] = useState(9999)
     const [ value, setValue]= useState("cost")

/*     
     "http://localhost:3001/test/resource"     
     "http://localhost:3001/test/category"     

 */
     useEffect( ()=>{ fetcher() } ,[ ])
//  return text entered and menu # item selected up to Parent   
//<CUnitCost name="-UnitCost" url={url_cost}  returnText={pullText}  returnMenuOption = {pullMenuItem }  />
//     props.url
     props.returnCostText(value)
     props.returnMenuOption(menuOption)
//   returnValue={pullText}  returnMenuOption = {pullMenuItem }  />
     
// **********************************************************

     function fetcher(){

        Axios.get(props.url)
          .then(
               (response)=>{
                    setMenu( response.data )
                    setMenuOption( response.data.length)
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      const handleMenuChange = (evt)=> {
        
          setMenuOption ( evt.target.value )
          console.log( evt.target.value)
   
     }

      const handleTextChange = (evt) => {
          setValue( evt.target.value)
          console.log( evt.target.value)
      }

     return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">

        <input 
        type="text"
        onChange = {handleTextChange}
        ></input>
        &nbsp;&nbsp; per &nbsp;&nbsp;
        <select
           onChange = {handleMenuChange}
        >
        {
                menu.map(
                      (option) => {
                           return (
                            <option selected value={option.label}>{option.value}</option>
                       )
                      }
                )
        }
        </select>

        </div>
        </div>
        </div> 
        
         </div>

  )


}


export {CUnitCost}