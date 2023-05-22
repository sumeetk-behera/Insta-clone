import React, { Component } from 'react'
import "./Navbar.css"
import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';

import inst_log from "../../images/logoinsta.png"
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import find from "../../images/find.svg"
import react from "../../images/love.svg"
import pp from "../../images/pp1.png"



export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar_content'>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className='navbar_logo' src={inst_log} width="105px" />
                        </Grid>
                        <Grid item xs={3}>
                            <input className='navbar_search' text="text" placeholder='Search' />
                        </Grid>
                        <Grid item xs={3} style={{ "display": "flex" }}>
                            <img className='navbar_img' src={home} width="25px" />
                            <img className='navbar_img' src={message} width="25px" />
                            <img className='navbar_img' src={find} width="25px" />
                            <img className='navbar_img' src={react} width="25px" />
                            <Avatar src={pp} className='navbar_img' style={{ "maxWidth": "30px", "maxHeight": "25px" }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
