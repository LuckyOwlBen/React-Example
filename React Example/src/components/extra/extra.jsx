import React from 'react'

export class Extra extends React.Component {
    render() {
        return(
            <div>
                <h6>Something extra</h6>
                <form>
                    <label>Are you using react?</label>
                    <input type="checkbox"/>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}