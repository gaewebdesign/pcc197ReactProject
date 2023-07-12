
import Axios from 'axios'
import {useState, useEffect} from 'react'


const empty = [
     {label: -1 , value: "  ... --- ..."}
]


const CPopUpAppend = (props) => {

     const [ menu, setMenu] = useState(empty)
     const [ selected ,setSelected]  = useState(0)

     const [ menu2, setMenu2] = useState(empty)

     useEffect( ()=>{ fetcher() } ,[ ])
     props.func(selected)

     function fetcher(){

        Axios.get(props.url)
          .then(
               (response)=>{
                    setMenu2( response.data )
                    setSelected( response.data.length )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      const handleChange = (evt)=> {
          evt.preventDefault();

          setSelected ( evt.target.value )
          console.log( evt.target.value)
   
     }
///onMouseDown = {handleMouseDown}
     const handleMouseDown = (evt) => {
          //evt.preventDefault();
          setMenu( menu2)
     }

     return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">
        <select
           onChange = {handleChange}
           onMouseDown = {handleMouseDown}

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


export {CPopUpAppend}