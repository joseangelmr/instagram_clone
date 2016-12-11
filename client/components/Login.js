import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../common/actions/authActions'

import '../css/main.css'
import '../css/materialize.css'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showError: false,
        };
    }

    onSubmit() {
        var {username, password} = this.refs;
        this.props.onSubmit(username.value, password.value)
    }

    render() {
        return (
            <div>

                <div className="section"></div>
                <main>
                    <center>
                        <div className="section"></div>
                        <h5 className="blue-grey-text darken-3">Instagram</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 white row"
                                 style={{ minWidth: 350, display: 'inline-block', padding: '32px 48px 32px 48px', border: '1px solid #EEE'}}>

                                <form className="col s12">
                                    <div className='row'>
                                        <div className='col s12'>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' type='text' name='text' id='text'
                                                   ref="username"/>
                                            <label htmlFor='text'>Enter your username</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' type='password' name='password' id='password'
                                                   ref="password"/>
                                            <label htmlFor='password'>Enter your password</label>
                                        </div>
                                    </div>

                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button
                                                className='col s12 btn btn-large waves-effect blue-grey darken-3'
                                                onClick={this.onSubmit.bind(this)}>Login
                                            </button>
                                        </div>
                                    </center>
                                </form>
                            </div>
                        </div>
                        <a>Create account</a>
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>


            </div>
        )
    }
}


const mapStateToProps = function (state, ownProps) {
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {
        onSubmit: (username, password) => {
            dispatch(actions.userAuthenticate(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);