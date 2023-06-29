import {React} from 'react'
import {Component} from 'react'

import{ useState, useRef, useEffect} from 'react'

// https://stackoverflow.com/questions/51486207/how-to-re-render-a-page-to-get-its-default-values-in-react-js
// https://bobbyhadz.com/blog/react-clear-input-value


const initialState = { value: 23 }
const newState = {value: 42 }
class TestClearValue0 extends Component{
 
    resetState= ()=>{
       this.setState( newState  )
    

    }

    constructor(){
        super()
        this.state =  initialState
        
     }

     onChange= ( evt)=> {
        this.setState({value: evt.target.value })
        

     }
      render(){
            return(
        <div>
            
          <input
              id= "myID"
              type="text"
              onChange = {this.onChange}
           >
          
          </input>
             {this.state.value}
            <button
               onClick={this.resetState}
                >Reset
               </button>
               </div>
         )
      }



}

const TestClearValue = () => {
// https://bobbyhadz.com/blog/react-clear-input-value
     const ref= useRef(null)

     const handleClick = () => {
//        ref.current.value = ""
        window.location.reload()
     }

     return(
           <div>

             <input
               ref={ref}
               type={ref}
               id="value"
               name="value"
             />

             <button
               onClick = {handleClick}
             >Refresh (window.location.reload)
               </button>

            </div>
     )

}




const MyChildForm = (props) => {

    const [value,setValue]= useState( )
    const handleChange = (evt)=>{

              setValue( evt.target.value )

    }

    const handleClear = (evt) => {
        setValue("-.-")
        
    }

    return (
        <div class="container-sm ">
        <div class="row">\
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">
            <input type="text"  
                 id={props.id}
                 placeholder = {props.placeholder }
                 onChange = {handleChange}
             >
               </input>
                &nbsp;{value}
                <button type="button" class="btn btn-dark pull-right"
                onClick = {handleClear}        
            >CValue</button>
        </div>
           
        </div>
        </div> 


    )





}



const  TestClearValue2 =(props)=>{
        const ClearButton = ()=>{

            alert("clear")
        }
     
        return(
             <div>

             <h2>Parent</h2>
                <MyChildForm name="ChildForm" />
                <hr/>
                <button type="button" class="btn btn-dark pull-right"
                onClick = {ClearButton}        
            >+</button>


                </div>

         )


}


export {TestClearValue}