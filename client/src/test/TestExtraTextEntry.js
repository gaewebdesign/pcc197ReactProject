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
import {useState,useRef} from 'react'
//    localStorage.getItem("loggedin")
//    localStorage.setItem("password", info.password )

function InputBox(){
    const [ inputFields, setInputFields ]  = useState( [
        {name:'Janet' } ,
        {name:'Rae' }        

    ] )

    const addFields = (evt) => {
       evt.preventDefault()
       let newField = {name: 'Erin'}
       setInputFields( [ ...inputFields , newField])

    }

    const clearFields = (evt) => {
         evt.preventDefault()
         setInputFields( [{name: ''}])
    }
    

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
        
{/*         <form onSubmit={addFields}> */}

         <h1> InputBoxes</h1>
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

        <button type="button"
        class="btn btn-secondary"
            onClick={clearFields}
        >
        Clear
        </button>
        &nbsp;
          <button type="button"
          class="btn btn-primary"
              onClick={addFields}
          >
          Add
          </button>
          &nbsp;
 
        
  {/*       </form>  */}
        
         
        </div>


    )


}


const TestExtraTextEntry = () => {

   
  return (
            <div>
            <h1>TextBox </h1>
              <InputBox/>
            </div>



  )

}


export {TestExtraTextEntry}