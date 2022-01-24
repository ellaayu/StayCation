import React from 'react'

import ImageHero from 'assets/images/Banner.jpg'
import IconCamera from 'assets/images/Icon/icon-camera.svg'
import Button from 'elements/Button'
import LandingPage from 'json/landingPage.json'
import numberFormat from 'utils/formatNumber';


export default function Hero(props) {
    
    //ketika button di klik, otomatis scroll
    function showMostPicked(){
        window.scrollTo({
            // ketika otomatis scrolling ke yang dituju, jarak dikurangi 30 pixel agar tidak terlalu nempel ke atas browser
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className='container pt-4'>
            <div className='row align-items-center'>
                <div className='col-auto pr-5' style={{ width:530 }}>
                    <h1 className='font-weight-bold line-height-1 mb-3'>
                        Start your future <br/>
                        Holiday
                    </h1>
                    <p className='mb-5 font-weight-light text-gray-500 w-75'>
                        We provide anything you need in your dream holiday with your love ones. 
                        Time to make another memorable moments. Your money can return but your time is not. 
                        So, Are you in??
                    </p>
                    <Button className='btn px-5' hasShadow isPrimary onclick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className='row' style={{ marginTop:80 }}>
                        <div className='col-auto' >
                            <img width='36' height='36' src={IconCamera} alt={`${props.data.travelers} Travelers`} />
                            <h6 className='mt-3'>
                                {numberFormat(props.data.travelers)} <span className='text-gray-500 font-weight-light'>Travelers</span>
                            </h6>
                        </div>
                        <div className='col-auto'>
                            <img width='36' height='36' src={IconCamera} alt={`${props.data.travelers} Travelers`} />
                            <h6 className='mt-3'>
                                {props.data.treasures} <span className='text-gray-500 font-weight-light'>Treasures</span>
                            </h6>
                        </div>
                        <div className='col-auto'>
                            <img width='36' height='36' src={IconCamera} alt={`${props.data.travelers} Travelers`} />
                            <h6 className='mt-3'>
                                {props.data.cities} <span className='text-gray-500 font-weight-light'>Cities</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='col-6 pl-5'>
                    <div style={{ width:600, height:410 }}>
                        <img className='img-fluid position-absolute' src={ImageHero} alt='Room with Couches' 
                        style={{ margin:'-30px 0 0 -30px', zIndex:1 }}></img>
                        <img className='img-fluid position-absolute-frame' src={ImageHero} alt='Room with Couches' 
                        style={{ margin:'0 -0 -15px 0'}}></img>
                    </div>

                </div>
            </div>
        </section>
    )
}
