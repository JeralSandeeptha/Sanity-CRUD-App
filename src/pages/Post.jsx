import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Post.css';
import sanityClient from '../client';

const Post = () => {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      author,
      body
    }`).then( (data) => {
      setPosts(data);
      console.log(data);
    }).catch( error => console.log(error));
  }, []);

  return (
    <div className='blog'>
      <div className="blog-inner">
        <h1 className='header'>BLOG POSTS PAGE</h1>
        <h5 className="sub-header">Welcome to my blog page</h5>
        <div className="posts">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => {
            return (
              <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                <div className="post">
                  <img src={post.mainImage.asset.url} alt="image" />
                  <h3 className="title">{post.title}</h3>
                </div>
              </Link>
            );
          })
        )}
        </div>
      </div>
    </div>
  )
}

export default Post