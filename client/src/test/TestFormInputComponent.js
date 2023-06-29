
import Axios from 'axios'
import {useState , useEffect} from 'react'
import {CFormInput} from '../components/CFormInput'



const TestFormInputComponent = () => {
  const [value1, setValue1] = useState('1')
  const [value2, setValue2] = useState('2')
  const [value3, setValue3] = useState('3')

  useEffect(
     () => {console.log(value1)},
     [value1,value2 , value3]

  )
  const pullData1 = (data)=>{
    setValue1(data)
    console.log("v1:" + data)

  }

  
  const pullData2 = (data)=>{
    setValue2(data)
    console.log("v2:" + data)

  
  }

  const pullData3 = (data)=>{
    setValue3(data)
    console.log("v3:" + data)
  }
  

  const url="http://localhost:3001/api/user"


  const InsertButton = (evt) => {
 
    Axios.post(url,{name: value1, email: value2 , password: value3 } )
    .then(
       () => {  alert("check database (select * from user)")     }
    ).catch(
       () => {  alert("Error: " + url)     }
 
    )
 
 }

  return (
        <div>

           <h1>Test Form Input Component</h1>
           <br/>
           <span style={{ color:'blue' ,'fontSize':'12px'}}>
              Inserts into user table <br/>
              name,email,password
           </span>


           <CFormInput name="Name" id="name" placeholder="name" func={pullData1}/>
           <CFormInput name="Email" id="email" placeholder="email" func={pullData2}/>
           <CFormInput name="Password" id="password" placeholder="password" func={pullData3}/>

           <button
           type="button"
           class="btn btn-primary"
           onClick= {InsertButton }
          ><b>Insert to DB </b>
          </button>
            
            


        </div>     


  )


}


export {TestFormInputComponent}