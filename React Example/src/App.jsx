import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from './components/landing/landing'
import { Footer } from './components/footer/footer'
import { Extra } from './components/extra/extra'
import { Nav } from './components/nav/nav'

const App: React.FC =()=> {
    return(
        <BrowserRouter>
        <Nav/>
        <Switch>
            <Route path="/extra" component={Extra}/>
            <Route path="/" component={Landing}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    )
    }
export default App