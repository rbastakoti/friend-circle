import React from 'react';
import './css/bootstrap.css';


function Header(){
    return(
        <header className={App} style={{background: "powderblue"}}>
            <h1>Friend Circle</h1>
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

function Footer(){
    return(
        <footer>
            <p>Copyright@ 2020</p>
        </footer>

    );
}


function App() {
    return (

        <div className={"container"} align="center">
            <Header />
            <Main />
            <Footer />

        </div>

    );




}
export default App;