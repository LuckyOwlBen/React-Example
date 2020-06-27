import React from 'react'
import { Link } from 'react-router-dom'

export class Nav extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <Link to="/">Home  |</Link>
                    <Link to="/extra">  Something Extra</Link>
                </ul>
            </div>
        )
    }
}