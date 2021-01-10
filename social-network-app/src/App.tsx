import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './container/DialogsContainer';
import {ProfileContainer} from './container/ProfileContainer';


function App() {
    return (
        <div className='App'>
            <Header/>
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <div className='container'>
                <Route path='/profile' render={() => <ProfileContainer />}/>
            </div>
        </div>
    );
}

export default App;
