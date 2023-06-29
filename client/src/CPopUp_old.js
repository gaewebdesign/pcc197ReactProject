import {useState,useEffect} from 'react'




const CPopUp = (props) => {

    const [value,setValue]= useState([] )


    props.func(value)
  const returnValue = (v) => {
       return v;

  }

  const handleChange = (evt)=> {
        
       setValue ( evt.target.value )
       console.log( evt.target.value)

  }

  return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">

        <select
         onChange = {handleChange}
        >
        {
                props.menu.map(
                      (option) => {
                        let value = "#" + option.label + " " + option.value
                       return (
                        <option value={option.label}>{value}</option>
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


export {CPopUp}