import React from 'react'
import './About.css'
import AlexP from './images/AlexP.jpg'
import AlexR from './images/AlexR.jpg'
import AliciaW from './images/AliciaW.jpg'
import DanielN from './images/DanielN.jpg'
import JoeS from './images/JoeS.JPG'
import NickA from './images/NickA.jpg'
import JacobL from './images/JacobL.jpg'
import JoshM from './images/JoshM.jpg'

const About = () => {
    return (
        <div className='about-page'>
            <h2 className='about-title'>About our project</h2>
            <p className='content'>We all know how your dog can become such an important part of your family. So we all set out to create a convient dog training app with a variety of commands in one spot. Meet the friendly team and the doggos that inspired the project.</p>
            <div className='dog-container'>
                <div className='dev'>
                    <h3 className='text-styling'>Alex R</h3>
                    <p className='text-styling'>Meet their pups Lugnut and Skeeter</p>
                    <img className='about-img' src={AlexR} alt='Photo of Alex Rs dogs'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Alex P</h3>
                    <p className='text-styling'>Meet their pup Olive</p>
                    <img className='about-img' src={AlexP} alt='Photo of Alex Ps dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Alicia W</h3>
                    <p className='text-styling'>Meet their pup Staniel</p>
                    <img className='about-img' src={AliciaW} alt='Photo of Alicias dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Joe S</h3>
                    <p className='text-styling'>Meet their pup Bhodi</p>
                    <img className='about-img' src={JoeS} alt='Photo of Joes dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Jacob L</h3>
                    <p className='text-styling'>Meet their pup Jojo</p>
                    <img className='about-img' src={JacobL} alt='Photo of Jacobs dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Josh M</h3>
                    <p className='text-styling'>Meet their pup Phoenix</p>
                    <img className='about-img' src={JoshM} alt='Photo of Joshs dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Nick A</h3>
                    <p className='text-styling'>Meet their pup Lucas</p>
                    <img className='about-img' src={NickA} alt='Photo of Nicks dog'/>
                </div>
                <div className='dev'>
                    <h3 className='text-styling'>Daniel N</h3>
                    <p className='text-styling'>Meet their pup Kuma</p>
                    <img className='about-img' src={DanielN} alt='Photo of Daniels dog'/>
                </div>
            </div>
        </div>
    )
}

export default About
