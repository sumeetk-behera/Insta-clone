import React, { Component } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'

import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //for dynamic comments to load--
            //1.state varibale of type array
            commentList: []
        }
    }

    //4.usually we cll all ajax function in react under componentDidMount() func below
    //comment got populated here now display it below
    componentDidMount() {
        this.getComments();
    }

    //2. over here when post get loaded we ll call a func tht will retireve all the comments associated with the post
    //basically this func ll cl an backend api
    getComments = () => {
        let data = [
            {
                "username": "skb",
                "commentId": "1234",
                "timestamp": "12345",
                "description": "Comment 1"
            },
            {
                "username": "kk",
                "commentId": "1234",
                "timestamp": "12345",
                "description": "Comment 2"
            },
            {
                "username": "dv",
                "commentId": "1234",
                "timestamp": "12345",
                "description": "Comment 3"
            }

        ]
        //3.
        this.setState({ commentList: data })
    }

    render() {
        return (
            <div className='post_container'>
                {/* Header */}
                <div className='post_header'>
                    <Avatar className='post_image' src="" />
                    {/* <div className='post_username'>userName</div> */}
                    {/* we ll remove the hardcoded string with the props from mainpage.js */}
                    <div className='post_username'>{this.props.userName}</div>
                </div>

                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="615px" />
                </div>

                {/* Analytic(likes, heart save) */}
                <div>
                    <div style={{ "marginLeft": "10px" }}>
                        <img src={love} className='post_likeimg'></img>
                        <img src={comment} className='post_likeimg'></img>
                        <img src={share} className='post_likeimg'></img>
                    </div>
                    <div style={{ "fontWeight": "bold", "marginLeft": "20px" }}>
                        {this.props.likes} Likes
                    </div>
                </div>

                {/* Comment */}
                <div>
                    {/* display the populated comment list from ajax response */}
                    {
                        this.state.commentList.map((item, index) => (
                            <div className='post_comment'>{item.username}:{item.description}</div>
                        ))
                    }
                    <input text="text" className='post_commentbox' placeholder='Add a comment...' />
                </div>
            </div>


        )
    }
}
