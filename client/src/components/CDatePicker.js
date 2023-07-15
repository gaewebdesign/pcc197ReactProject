
import Axios from 'axios'
import { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CDatePicker = (props) => {

//    const [startDate, setStartDate] = useState( " "  )
    var date = new Date(); 
    date.setFullYear(date.getFullYear() - 33);
    const [startDate, setStartDate] = useState( )
//  const [epochDate, setEpochDate] = useState(new Date().getTime()  )
    const [epochDate, setEpochDate] = useState( )



    const changeDate = (date)=> {

         setStartDate(date)
         setEpochDate( new Date(date).getTime() )
        // epoch = epoch.getTime();
   
    }

    // returning epochDate to parent
    props.func(epochDate)
    const empty =""
    return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4" > <b>{props.name} </b> </div>
        <div class="col-sm-8">

        <DatePicker placeholderText={empty} selected={startDate}  onChange={changeDate}/>


        </div>
        </div>
        </div> 
        
         </div>

  )


}


export {CDatePicker}