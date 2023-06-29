// Save to data base
/*
   on the client side, in the React directory (client), install
   Axios:  npm i axios

   on the server side, need to have express server  running
   install with npm i express
   then to run, npm start

   create database 'cert' ( )


*/

const SubmitButton = (evt) =>{

     alert('textbox')


}

// Retrieve from database
const RetrieveButton = (evt) =>{

  alert('textbox')


}
const TestTestBox = () => {

  return (

            <div>
             <b> Grab values from a TextBox 
                 Save into database</b><br/>

            <div className="form">
                    <div class="container-sm Function">
                      <div class="row">
                        <div class="col-sm-4 TextBox"> TestValue </div>
                        <div class="col-sm-8">
                        <input type="text"  id="testbox"></input>
                        </div>
                    </div>
                </div>            
            

            <div class="container-sm">
                    <div class="row">
                      <div class= "col-sm-6"></div>
                      <div class= "col-sm-3">
                        <button type="button" class="btn btn-secondary ">Retrieve</button>
                      </div>

                    <div class= "col-sm-3">
                    <button type="button"
                       onSubmit = {SubmitButton}
                       class="btn btn-primary"
                      >Save</button>
                    </div>
      
            </div>
            
            </div>        
            
            </div>  {/*   end of form */}
            </div>



  )

}


export {TestTestBox}