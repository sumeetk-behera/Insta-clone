import React, { Component } from 'react'
import "./StatusBar.css"
import Avatar from '@mui/material/Avatar';

import statusimg from "../../images/pp1.png"
import uploadicon from "../../images/upload.png"

export default class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //1.declared a empty array as state prop jst like global variable
            statusList: []
        }
    }
    //call the function getData() to get the values
    //usually we cll all ajax function in react under componentDidMount() func below
    componentDidMount() {
        this.getData();
    }


    //2.to populate the statusList create a func, this is a ajax cl to api from backend we ll recieve data
    getData = () => {
        let data = [
            {
                "username": "sumeet_adi",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "devil_ace",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "princi_as",
                "imageURL": "../../images/pp1.png"
            }

        ]
        //3.set the empty declared array statusList with the data(the json we ll recieve from backend) inside the getData func
        this.setState({ statusList: data })
    }

    render() {
        return (
            <div>
                <div className='statusbar_container'>

                    {/* laststep-upload icon for status */}
                    <img src={uploadicon} className='statusbar_uploadicon' />

                    {/* to dynamiclly render the list we ll create react block and iterate the data */}
                    {
                        this.state.statusList.map((item, index) => (
                            <div className='status'>
                                <Avatar className='statusbar_avatar' src={statusimg} />
                                {/*instaed of hardcoding the username(sumeet_adi) we cn get the data from iterattion above*/}
                                {/* <div className='statusbar_text'>sumeet_adi</div> */}
                                <div className='statusbar_text'>{item.username}</div>

                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}
