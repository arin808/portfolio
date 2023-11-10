import React from 'react'
import homepic from '../assets/homepic.jpg'
import './Home.scss'
function Home() {
  return (
    <div className='home-container'>
      <img src={homepic} alt='Me' className='home-img'/>
      <div className='home-content'>
        <div className='home-name'>Hi, I'm Arin Aihara</div>
          <p className='home-text'>
            <div className='home-occupation'>
              Software Engineer
            </div>
            I am a backend-development focused software engineer with a passion for learning and creating. Please, take a look around and get a better idea of who I am and what I do. <br/><br/>
            Looking forward to connecting with you!
          </p>
      </div>
    </div>
  )
}

export default Home