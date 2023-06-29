import {React} from 'react'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./AddEmergencyIncident.css"
import "./allstyles.css"

const AddEmergencyIncident =  () =>
{   
    const Category =[
      { label: 1, value: "must evac. secure lockdown"  },
      { label: 2, value: "may evac. secure lockdown"  },
      { label: 3, value: "no evac, limited lockdown"  },
      { label: 4, value: "no evac, no lockdown"  }

    ]

    const Owner = "Michele Lee"

    return(
     <div>

       <p/>

       <hr/>
       <h2>New Incident Information</h2>

       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4 TextBox"> Category</div>
       <div class="col-sm-8 Primary">

        <select>
                 {
                         Category.map(
                               (option) => {
                                return (
                                 <option value={option.label}>{option.value}</option>
                                )
                               }
                         )
                 }
               
               </select>
       
       </div>
       </div>
       </div>


       <div class="container-sm Header">

        <div class="row">
         <div class="col-sm-6 TextBox">
          Resource ID
          (assigned on save)
        </div>
        <div class="col-sm-6"></div>
      </div>
      </div>

      <div class="container-sm Function">
      <div class="row">
      <div class="col-sm-4 TextBox"> Date </div>
      <div class="col-sm-8">
          <input type="text"  id="resourcename"></input>
      </div>
      </div>
      </div>


      <div class="container-sm Function">
      <div class="row">
      <div class="col-sm-4 TextBox"> Description </div>
      <div class="col-sm-8">
      <textarea class="TArea" type="text" id="description"></textarea>
      </div>
      </div>
      </div>

      
      <div class="container-sm">
      <div class="row">
      <div class= "col-sm-6"></div>
      <div class= "col-sm-3">
      <button type="button" class="btn btn-secondary ">Cancel</button>
      </div>

      <div class= "col-sm-3">
      <button type="button" class="btn btn-primary">Save</button>
      </div>

      </div>
      </div>

       </div>
       
    )

}


export {AddEmergencyIncident}