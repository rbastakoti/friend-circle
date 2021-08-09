import React from 'react';
import './css/bootstrap.css';


function Header(props){
    return(
        <header className="shadow rounded" style={{background: "powderblue"}}>
            <h1 style={{display:"block"}}>{props.name}</h1>
        </header>
    );
}

function Main(){
    return(
        <section>
            <p>Social Network of College Mates!</p>
        </section>
    );
}

function Footer(props){
    return(
        <footer>
            <p>Copyright@ {props.year}</p><br/>
            <div className = "w-25 p-3" style={{float:"left"}} >
                <div className="list-group" align={"left"} >
                    <ul className="list-group">
                    <p className="font-weight-bold">Web Features</p>
                    {props.users.map((user) =><li className="list-group-item">{user}</li>)}
                    </ul>
                </div>
            </div>
        </footer>

    );
}

const users = [
    "Create a Profile",
    "Search People",
    "Get Connected"
];


function App() {
    return (

        <div className="container" align="center">
            <Header name = "Friend Circle"/>
            <Main />
            <Footer year = {new Date().getFullYear()} users = {users}/>

        </div>

    );




}
export default App;