import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'

import { Spinner } from './components/Spinner'
import { saveUserOnLoad } from './redux/actions/User'
import UserInfo from './components/UserInfo'
import UserRepo from './components/UserRepo'

class App extends React.Component {

    componentDidMount(){
        this.props.dispatch(saveUserOnLoad())
    }

    render(){
        const { user } = this.props
        return (
            <React.Fragment>
                { user.status ? 
                    <div className="app">
                        <Container>
                            <Row>
                                <Col xl="3" md="4">
                                    <UserInfo />
                                </Col>
                                <Col xl="9" md="8">
                                    <UserRepo repo={user.repo} />
                                </Col>
                            </Row>
                        </Container>
                    </div> : <Spinner /> }
            </React.Fragment> 
        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(App)