import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import {FcApproval,FcAlarmClock,FcAndroidOs} from 'react-icons/fc'

export const App = () => {
    console.log(ParallaxBanner)
    return (
        <ParallaxProvider>
           {/* <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/4FB7/production/_116970402_a20-20sahas20barve20-20parrotbill_chavan.jpg',
            amount: 0.1,
        },
        {
            image: 'https://www.allaboutbirds.org/news/wp-content/uploads/2020/04/RBGull-Vyn-FI-1280x720.jpg',
            amount: 0.2,
        },
    ]}
    style={{
        height: '300px',
    }}
>
                <h1>Banner Children</h1>
                <h1>Banner Children</h1>
                <h1>Banner Children</h1>
                <h1>Banner Children</h1>
                <h1>Banner Children</h1>
</ParallaxBanner> */}

            {/* ............x............. */}
            <Parallax x={[30,0]} tagOuter="figure">
                <FcAlarmClock className='icons'/>
            </Parallax>
            <Parallax x={[0, 20]} tagOuter="figure">
                <FcAndroidOs className='icons'/>
            </Parallax>
            <Parallax x={[10, 0]} tagOuter="figure">
                <FcApproval className='icons'/>
            </Parallax>
            {/* .......................... */}

            {/* ..........y............ */}
            {/*  y={[0, 100]}-->nicher dike asbe niche scroll korle*/}
             <Parallax y={[0, 100]} tagOuter="figure">
                <FcAndroidOs className='icons'/>
            </Parallax>
            {/*  y={[100, 0]}-->oporer dike asbe niche scroll korle*/}
            <Parallax y={[100, 0]} tagOuter="figure">
                <FcApproval className='icons'/>
            </Parallax>
            <Parallax y={[10, 50]} tagOuter="figure">
                <FcAlarmClock className='icons'/>
            </Parallax>
            {/* ......................... */}
        </ParallaxProvider>
    )
}

export default App