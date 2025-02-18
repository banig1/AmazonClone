import React from 'react'
import { useEffect, useState } from 'react'
import "./Footer.css";
function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
    {backToTopButton && (
        <button className="top" onClick={scrollUp}>Back to The Top</button>
    )}
    </div>
  )
}

export default BackToTopButton