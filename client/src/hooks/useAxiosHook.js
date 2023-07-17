
import {useState, useEffect} from 'react'
import Axios from 'axios'


const useAxiosHook = (url) => {
   
    const [dataList, setDataList] = useState([] )
    const m = [
        {label: 1 , value: "CMT 1"},
        {label: 2 , value: "CMT 2"},
        {label: 2 , value: "CMT 3"}
    ]
    
    useEffect(()=>{ fetcher() }, [ ] )

    function fetcher(){
        Axios.get(url )
          .then(
               (response)=>{
//                 setDataList( m )
                   setDataList( response.data )
               }
          ).catch(
              (response) => { alert(response)}
          )          
      }

    return dataList // ,error, loading }
}

export { useAxiosHook  }












