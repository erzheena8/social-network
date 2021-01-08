import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Dialogs/>
            <div className='container'>
                    {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
