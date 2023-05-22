import React, { Component } from 'react'
import "./MainPage.css"
import Post from '../Posts/Post'

import uploadimg from "../../images/upload1.png"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {//API
        let data = [
            {
                "postId": "1234",
                "userName": "sumeet",
                "postImageURL": "https://cdn.pixabay.com/photo/2023/03/18/09/06/railway-7860168_960_720.jpg",
                "timeStamp": "12354",
                "likes": "8796"

            },
            {
                "postId": "1234",
                "userName": "princi",
                "postImageURL": "https://cdn.pixabay.com/photo/2023/05/03/11/32/insect-7967386_960_720.jpg",
                "timeStamp": "12354",
                "likes": "8796"

            },
            {
                "postId": "1234",
                "userName": "kunal",
                "postImageURL": "https://cdn.pixabay.com/photo/2022/05/16/15/25/traffic-7200606_960_720.jpg",
                "timeStamp": "12354",
                "likes": "8796"

            },
            {
                "postId": "1234",
                "userName": "sushma",
                "postImageURL": "https://cdn.pixabay.com/photo/2023/05/03/16/11/alfa-romeo-7968027__340.jpg",
                "timeStamp": "12354",
                "likes": "8796"

            }

        ]
        this.setState({ postArray: data })
    }
    render() {
        return (
            <div>
                {/*1.this is hardcoded post we r sending from this mainpage */}
                {/* <Post/>
                    <Post/>
                    <Post/>
                    <Post/> */}

                {/*2.this is the props we r passing from here--hardcoded*/}
                {/* <Post id="1234" userName="skb" postImage="https://cdn.pixabay.com/photo/2023/03/18/09/06/railway-7860168_960_720.jpg" likes="7795" />
                <Post id="1234" userName="skb" postImage="https://cdn.pixabay.com/photo/2023/03/18/09/06/railway-7860168_960_720.jpg" likes="9865" />
                <Post id="1234" userName="skb" postImage="https://cdn.pixabay.com/photo/2023/03/18/09/06/railway-7860168_960_720.jpg" likes="" />
                <Post id="1234" userName="skb" postImage="https://cdn.pixabay.com/photo/2023/03/18/09/06/railway-7860168_960_720.jpg" likes="" /> */}

                {/* last step-upload option for image firebase */}
                <div className='mainpage_fileupload'>
                    <img className='mainpage_uploadimg' src={uploadimg} />
                    <input type='file' />
                </div>

                {/* 3. for dynamic post */}
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />

                    ))
                }
            </div>
        )
    }
}
