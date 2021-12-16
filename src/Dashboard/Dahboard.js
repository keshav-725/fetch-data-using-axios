import React from 'react'
import "./dashboard.css"

const Dahboard = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col dash">
                        <div className="name">{props.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dahboard
