import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import logo_img from "../../images/pp1.png"
import "./Suggestion.css"

export default class Suggestion extends Component {
    render() {
        return (
            <div>
                <div className='suggestion_container'>
                    <div className='suggestion_header'>
                        Suggestion For You
                    </div>
                    <div className='suggestion_content'>
                        <div className='suggestion_frnd'>
                            <Avatar className='suggestion_img' src={logo_img} />
                            <div className='suggestion_name'>Freind 1</div>
                            <div className='suggestion_follow'>Follow</div>
                        </div>
                        <div className='suggestion_frnd'>
                            <Avatar className='suggestion_img' src={logo_img} />
                            <div className='suggestion_name'>devi 1</div>
                            <div className='suggestion_follow'>Follow</div>
                        </div>
                        <div className='suggestion_frnd'>
                            <Avatar className='suggestion_img' src={logo_img} />
                            <div className='suggestion_name'>enemy 3</div>
                            <div className='suggestion_follow'>Follow</div>
                        </div> <div className='suggestion_frnd'>
                            <Avatar className='suggestion_img' src={logo_img} />
                            <div className='suggestion_name'>develop 4</div>
                            <div className='suggestion_follow'>Follow</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
