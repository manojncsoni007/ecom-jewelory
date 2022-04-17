import React from 'react'
import './Footer.css'
import { FaHeart} from "react-icons/fa"



const Footer = () => {
  return (
    <div className='footer'>
       <h5>Made with <FaHeart color='red'/> by <a href="https://github.com/manojncsoni007">Manoj Soni</a></h5>
    </div>
  )
}

export {Footer};
