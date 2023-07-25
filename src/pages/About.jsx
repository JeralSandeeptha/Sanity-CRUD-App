import React from 'react'
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-inner">
        <div className="profile-container">
          <img src="https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <div className="right">
            <h1>Hello There, I'm Jeral</h1>
            <h4>I'm Fullstack Software Enginner.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About