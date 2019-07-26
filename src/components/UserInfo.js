import React from 'react'
import { Row, Col } from 'reactstrap'

import supreet from '../images/supreet.jpg'
import multipleUser from '../images/multiple-users-silhouette.svg'
import location from '../images/placeholder.svg'
import message from '../images/message.svg'

const UserInfo = () => {
    return (
        <div className="userInfo">
            <Row>
                <Col md="12" sm="6" xs="5">
                    <img className="profilePic" src={supreet} alt="icon" />
                </Col>
                <Col md="12" sm="6" xs="7">
                    <h1>Supreet Singh</h1>
                    <h2>supreetsingh247</h2>
                    <button>Follow</button>
                </Col>
            </Row>
            <p>Front end developer since 1.5 years</p>
            <ul>
                <li>
                    <img src={multipleUser} alt="icon" />
                    <span>Target Corporation</span>
                </li>
                <li>
                    <img src={location} alt="icon" />
                    <span>India</span>
                </li>
                <li>
                    <img src={message} alt="icon" />
                    <a href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</a>
                </li>
            </ul>
            <div className="block">Block or report user</div>
        </div>
    )
}

export default UserInfo