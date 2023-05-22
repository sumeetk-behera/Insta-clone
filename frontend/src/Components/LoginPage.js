import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import inst_image from "../images/9364675fb26a.svg"
import inst_logo from "../images/logoinsta.png"
import fb from "../images/fb.png"
import appstore from "../images/app.png"
import playstore from "../images/play.png"

import './LoginPage.css'
import SignIn from './SignIn';
import SignUp from './SignUp';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    changeisLogin = () => {
        if (this.state.isLogin)
            this.setState({ isLogin: false });
        else
            this.setState({ isLogin: true });
    }


    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                                <img src={inst_image} width="454px"  ></img>
                            </div>
                            <div>
                                <div className='loginpage_rightComponent'>
                                    <img className='loginpage_logo' src={inst_logo} />
                                    <div className='loginpage_signin'>

                                        {
                                            this.state.isLogin ? <SignIn /> : <SignUp />
                                        }

                                        <div className='login_ordiv'>
                                            <div className='login_divider'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_divider'></div>
                                        </div>

                                        <div className='login_fb'><img src={fb} width="13px" style={{ "marginRight": "5px" }} /> Log in with Facebook</div>
                                        <div className='login_forget'>Forget password?</div>
                                    </div>
                                </div>

                                <div className='loginpage_signupOption'>
                                    {
                                        this.state.isLogin ?
                                            <div className='loginpage_signup'>
                                                Don't have an account? <span onClick={this.changeisLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign up</span>
                                            </div> :
                                            <div className='loginpage_signin'>
                                                Have an account? <span onClick={this.changeisLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign In</span>
                                            </div>
                                    }

                                </div>

                                <div className='loginpage_getapp'>
                                    <div >Get the app.</div>
                                    <div className='loginpage_apps'>
                                        <img src={appstore} width="136px" />
                                        <img src={playstore} width="136px" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>

                </Grid>
            </div >
        )
    }
}
