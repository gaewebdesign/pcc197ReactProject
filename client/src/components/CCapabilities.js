/*
  Allow multiple text boxes for user to enter capabilities

  https://www.freecodecamp.org/news/build-dynamic-forms-in-react/

*/

import {useState} from 'react'

// Convert JSON Object into a single string 
function flatten(jsonObj){
    let r = ""
    jsonObj?.map(
        (d) => {
          r += " " + d.name
        }
    )
    return r

}

const CCapabilities = (props) => {

    const [inputFields, setInputFields ]  = useState( [ {name:'' }, ])
    const [capability, setCapability]  = useState('')

    // return to Parent capabilities entered
    props.func(capability)

    const addFields = (evt) => {
       evt.preventDefault()
       setInputFields( [ ...inputFields ,{name:''}] )
       setCapability( flatten( inputFields ))
       console.log(">> " + capability + ' <<' )

    }    

    const clearFields = (evt) => {
        evt.preventDefault()
        setInputFields([{name:''}] )
    }

//  Executed for every form change
//  This is to verify all is working via console
//  overkill a bit, yes
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;

        sessionStorage.setItem("cap", JSON.stringify(data) )
        console.log( data )

        try{
             let obj = JSON.parse(sessionStorage.getItem('cap'))
             console.log("****   *****")
             console.log(obj )
             console.log("****   *****")
        }catch{

             console.log("ERR")

        }
        setInputFields( data )

    }

    return(
        <div className="InputBox">

         <div class="container-sm">
         <div class="row">
         <div class= "col-sm-6">
      

          {

            inputFields?.map(
                (input, index) => {
                   return(
                    <div key={index}>
                    <input
                      name='name'
                      onChange={event => handleFormChange(index, event)}
                    />
                    
                 </div>
           )
         })

        }
         
         </div>

         <div class= "col-sm-6">
         <button 
         type="button"
         class="btn btn-secondary btn-sm"
             onClick={clearFields}
         >
         Clear
         </button>
         &nbsp;
         <button type="button"
         class="btn btn-primary  btn-sm"
             onClick={addFields}
         >
         Add
         </button>
         
         </div>


         </div>

         </div>
         
        </div>


    )

}


export {CCapabilities}