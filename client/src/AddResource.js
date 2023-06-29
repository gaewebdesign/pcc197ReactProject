import {React} from 'react'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./AddResource.css"
import "./allstyles.css"

const AddResource =  () =>
{
    const Primary = [
      { label: 1, value: "Transportation"  },
      { label: 2, value: "Communications"  },
      { label: 3, value: "Engineering"  },
      { label: 4, value: "Search and Rescue"  },
      { label: 5, value: "Education"  },
      { label: 6, value: "Energy"  },
      { label: 7, value: "Firefighting"  },
      { label: 8, value: "Human Services"  }
    ]
 
    const Secondary  = [
      { label: 2, value: "Communications"  },
      { label: 3, value: "Engineering"  },
      { label: 4, value: "Search and Rescue" },
      { label: 5, value: "Education"  },
      { label: 6, value: "Energy"  },
      { label: 7, value: "Firefighting"  },
      { label: 8, value: "Human Services"  }

    ]

    const Owner = "Michele Lee"
    
    const Distance =  [
      { label:1, value: "Mile (8-4pm)"  } ,
      { label:2, value: "Mile (4-12)"  } ,
      { label:3, value: "Mile (12-8 am)"  } ,

    ]

    return(
     <div>

       <p/>
       

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
                 <div class="col-sm-4 TextBox"> Owner </div>
                 <div class="col-sm-8"><b>{Owner}</b></div>
                 </div>
       </div>
       


       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4 TextBox"> Resource Name </div>
       <div class="col-sm-8">
           <input type="text"  id="resourcename"></input>
       </div>
       </div>
       </div>



       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4 TextBox"> Primary Function</div>
       <div class="col-sm-8 Primary">


               <select>
                 {
                         Primary.map(
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



       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4 TextBox"> Secondary Function </div>
       <div class="col-sm-8 Secondary  TextBox">
       
       <select>
       {
               Secondary.map(
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



       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4 TextBox"> Description </div>
       <div class="col-sm-8">
       <input type="text" id="description"></input>
       </div>
       </div>
       </div>


       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4  TextBox"> Capabilities </div>
       <div class="col-sm-8">
       <input type="text"  id="capabilities"></input>
       </div>
       </div>
       </div>


       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4  TextBox"> Distance from PCC </div>
       <div class="col-sm-8">
       <input type="text" id="distance"></input>
       </div>
       </div>
       </div>

       <div class="container-sm Function">
       <div class="row">
       <div class="col-sm-4  TextBox"> Cost </div>
       <div class="col-sm-8">
       <input class="Cost" type="text" size="10" id="distance" ></input>
       &nbsp;<b>per</b> &nbsp;

       <select>
       {
               Distance.map(
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

       <p/>
       <hr/>

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


export {AddResource}