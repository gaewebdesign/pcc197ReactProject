// Save to data base
/*

Test adding another TextBox
for Capabilities
save to localStorage

*/



import * as CONSTANTS from '../pages/Constants.js'
import '../pages/Page.css'
import {useState} from 'react'
//    localStorage.getItem("loggedin")
//    localStorage.setItem("password", info.password )


const TestExtraTexEntry = () => {
    const [ text, setText] = useState()

const ClearButton = (evt)=> {

    sessionStorage.removeItem("cap")
    
    alert( sessionStorage.getItem("cap") )
  
  
}


const AddButton= (evt)=>{

    let v = sessionStorage.getItem("cap")
    if( v == undefined){

      sessionStorage.setItem("cap",text)
      alert("initial: " + sessionStorage.getItem("cap"))


    }else{
        let s =  sessionStorage.getItem("cap")

        sessionStorage.setItem("cap",s + "," + text)

        alert("found " + sessionStorage.getItem("cap"))

    }

}

const onChange = (evt) => {
       
       setText(evt.target.value)
}

   
  return (

            <div>

             <div class="form-group">
  
             </div>
                 <div class="form-group">
                 <label >Cap:</label>
                 <input 
                     id= "_id"
                     type="text"
                     onChange = {onChange}
                 ></input>
                 </div>
             
                 <hr/>
                 {text}<br/>
                 <button
                       type="button"
                       class="btn btn-primary"
                       onClick= {AddButton }
                     ><b>Add </b>
                 </button>
                 &nbsp;
  
                 <p/>

                 <button
                 type="button"
                 class="btn btn-primary"
                 onClick= {ClearButton }
               ><b>Clear </b>
           </button>
  


                 <p/>
   
            </div>



  )

}


export {TestExtraTexEntry}