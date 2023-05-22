import React, { Component } from 'react'
import "./MainContent.css"
import { Grid } from '@mui/material'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'
import Info from '../InfoSection/Info'
import Suggestion from '../SuggestionSec/Suggestion'

export default class MainContent extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <Info />
                        <Suggestion />
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
