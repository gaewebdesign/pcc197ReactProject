import {useState,useEffect} from 'react'


const CFormInput = (props) => {

    // Save the text entered into the text box
    const [value,setValue]= useState( )

/*
    this is a function passed in through props
    It is run within the Component
    it is how Child element pass data back to the Parent
    it essentialy sets value
    which is saved via useState in the parent
    
    https://plainenglish.io/blog/how-to-pass-props-from-child-to-parent-component-in-react
*/

    props.func(value)
  
  const handleChange = (evt)=> {
        
       setValue ( evt.target.value )

  }

  return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">
            <input type="text"  
                 id={props.id}
                 placeholder = {props.placeholder }
                 onChange = {handleChange}
             >
               </input>

        </div>

        </div>
        </div> 
        



         </div>

  )


}


export {CFormInput}