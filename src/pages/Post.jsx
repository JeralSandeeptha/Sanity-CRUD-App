import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Post.css';

const Post = () => {
  return (
    <div className='blog'>
      <div className="blog-inner">
        <h1 className='header'>BLOG POSTS PAGE</h1>
        <h5 className="sub-header">Welcome to my blog page</h5>
        <div className="posts">
            <div className="post">
              <img src="https://img.freepik.com/free-photo/handsome-successful-businessman-full-suit-opens-his-car-streets-city-near-modern-office-center_496169-609.jpg" alt="" />
              <h3 className='title'>Title</h3>
            </div>
            <div className="post">
              <img src="https://img.freepik.com/free-photo/handsome-successful-businessman-full-suit-opens-his-car-streets-city-near-modern-office-center_496169-609.jpg" alt="" />
              <h3 className='title'>Title</h3>
            </div>
            <div className="post">
              <img src="https://img.freepik.com/free-photo/handsome-successful-businessman-full-suit-opens-his-car-streets-city-near-modern-office-center_496169-609.jpg" alt="" />
              <h3 className='title'>Title</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post