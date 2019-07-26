import React from 'react'
import Tabs from './Tabs'
import { Row, Col } from 'reactstrap'

import RepoLayout from './RepoLayout'

const UserRepo = (props) => {

    const { repo } = props
    
    return (
        <div className="userRepo">
            <Tabs repo_length={repo.length} />
            <div className="repoList">
                <h2>Popular repositories</h2>
                <div className="repoItems">
                    <Row>
                        { repo.length > 0 &&
                            repo.map(item => {
                                return (
                                    <Col lg="6" key={item.id}>
                                        <RepoLayout item={item} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
            <p className="note">2 contributions in the last year</p>
        </div>
    )
}

export default UserRepo