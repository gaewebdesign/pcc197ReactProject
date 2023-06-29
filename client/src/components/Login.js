import React from 'react'



// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const SubmitButton = (evt) =>{

   
     alert("non functional ")

}

class Login  extends React.Component {

    render() {
       return(
           <div>
            <h2>Login</h2>

            <div class="container-sm Function">
            <div class="row">
            <div class="col-sm-4 TextBox"> User </div>
            <div class="col-sm-8">
                <input type="text"  id="usr"></input>
            </div>
            </div>
            </div>

            <div class="container-sm Function">
            <div class="row">
            <div class="col-sm-4 TextBox"> Password: </div>
            <div class="col-sm-8">
                <input type="password"  id="pwd"></input>
            </div>
            </div>
            </div>


           </div>

       )

    }




}

export { Login }