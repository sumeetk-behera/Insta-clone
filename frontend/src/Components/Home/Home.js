import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import MainContent from '../MainContent/MainContent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MainContent />
            </div>
        )
    }
}
