import React from 'react';
import './css/bootstrap.css';
import './css/App.css';
import {Form} from "reactstrap";


function Header(props){
    return(
        <div>
        <header className="shadow rounded container-md" style={{background: "powderblue"}}>
            <h1 align="center" style={{display:"block"}}>{props.name}</h1>

        </header>
    <p align = "center">Social Network of College Mates!</p>
        </div>
    );
}

function Footer(props){
    return(
        <section id="bottom">

            <p><small> Copyright@ {props.year} </small></p>
            <p><small>  Developed By: Rajan Bastakoti</small></p><br/>
        </section>
    );
}

function Feature(props){
    return(
        <footer >

        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a  className="navbar-brand" href="#">Feature</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {props.users.map((user) =><li className="nav-item" ><a className="nav-link"
                                                                               href="#">{user}</a></li>)}
                    </ul>


                </div>
            </nav>
        </div><br/>

        </footer>

    );
}

function MoreAddress (){
    return(
    <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"> </input>
    </div>
    );
}

function MakeForm(props){


    return(
        <div >
            <form className= "container">
                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="College">College</label>
                    <input type="text" className="form-control" id="College" placeholder="Universty Name"></input>
                </div>
                <div className="form-group">
                    <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>

                </div>

                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                    </div>
                    <div className="form-group col-md-4">

                        <label htmlFor="countryStates" >States:</label>
                        <select className="form-control" id="countryStates">
                            {props.states.map((state)=> <option value="true">{state}</option>)}
                        </select>

                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"></input>
                    </div>
                    <div className="form-group col-md-1">
                        <button onClick={()=>MoreAddress()}><img src="https://img.icons8.com/material-outlined/24/000000/add-property.png"/></button>
                    </div>
                </div>

                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" id="Email" placeholder="example@xyz.com"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="lastName" placeholder="Password"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="Check"></input><br/>
                            <label className="form-check-label" htmlFor="Check">
                                <small>Check to receive email notification</small>
                            </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </div>
    );
}


const users = [
    "Create a Profile",
    "Search People",
    "Get Connected"
];

const states = [
    "Ohio",
    "Pennsylvania",
    "Michigan",
    "Iowa",
    "New York",
    "Georgia",
    "Kentucky"
];


function App() {

    return (
        <div >
            <Header name = "Friend Circle"/>

                <Feature  users = {users}/>
                <MakeForm states = {states}/>

            <Footer year = {new Date().getFullYear()}/>
        </div>

    );




}
export default App;