import React from 'react'
import './Footer.scss'
import linkedin from '../assets/lilogo.png'
import github from '../assets/ghlogo.png'
import resume from '../assets/resume.pdf'
import resumeicon from '../assets/resumeicon.png'
import email from '../assets/emailicon.png'

function Footer() {
  return (
    <div className='f-container'>
        <div className='f-item'>
            <img src={email} alt='email' className='f-img'/>
            <a href={`mailto:aiharaarin@gmail.com`} className='li-link'>aiharaarin@gmail.com</a>
        </div>
        <button className='f-item'>
            <img src={linkedin} alt='linkedin' className='f-img'/>
            <a href='https://www.linkedin.com/in/arinaihara/' target='_blank' rel='noreferrer' className='li-link'>arinaihara</a>
        </button>
        <button className='f-item'>
            <img src={github} alt='github' className='f-img'/>
            <a href='https://github.com/arin808' target='_blank' rel='noreferrer' className='li-link'>arin808</a>
        </button>
        <button className='f-item'>
            <img src={resumeicon} alt='resume' className='f-img'/>
            <a href={resume} target='_blank' rel='noreferrer' className='li-link'>resume</a>
        </button>
    </div>
  )
}

export default Footer