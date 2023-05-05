import React from 'react'

function About() {
    return (
        <div className='ms-3 me-3' style={{ backgroundColor: "#3c4042" }}>
            <div className='d-flex justify-content-between'>
                <div className='about-image'>
                    <div className='border-image'>
                        <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055333/living-room-interior-design-checklist-intro-1024x1024.jpg' />
                    </div>
                </div>
                <div className='about-content'>
                    <h2>About Us</h2>
                    <h1>We're here to bring your Vision to Life!</h1>
                </div>
            </div>
        </div>
    )
}

export default About