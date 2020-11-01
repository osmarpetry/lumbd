import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

const App = () => (
    <Router>
        <div className='App'>
            <header className='App-header'>
                <Link to='/'>
                    <img src={ logo } className='App-logo' alt='logo' />
                </Link>
            </header>
            <main className='App-main'>
                <Switch>
                    <Route exact path='/' component={ MoviesList } />
                    <Route path='/:id' component={ MovieDetails } />
                </Switch>
            </main>
        </div>
    </Router>
)

export default App
