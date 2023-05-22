import React, { Component } from 'react'
import "./Info.css"
import { Avatar } from '@mui/material'
import img from "../../images/pp2.png"

export default class Info extends Component {
    render() {
        return (
            <div className='info_container'>
                <Avatar className='info_img' src={img} />
                <div className='info_content'>
                    <div className='info_username'>skb</div>
                    <div className='info_description'>Description</div>
                </div>
            </div>
        )
    }
}
