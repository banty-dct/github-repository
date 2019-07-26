import React from 'react'

const Tabs = (props) => {
    return (
        <div className="tabs">
            <ul>
                <li className="active">Overview</li>
                <li>Repositories <span>{props.repo_length}</span></li>
                <li>Projects <span>0</span></li>
                <li>Stars <span>7</span></li>
                <li>Followers <span>4</span></li>
                <li>Following <span>2</span></li>
            </ul>
        </div>
    )
}

export default Tabs