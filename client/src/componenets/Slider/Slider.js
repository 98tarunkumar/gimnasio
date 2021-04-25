/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'
const getWidth = () => window.innerWidth
/**
 * @function Slider
 */
const Slider = props => {
 

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state
const autoplayRef=useRef()
useEffect(()=>{
  autoplayRef.current=nextSlide
})

useEffect(()=>{
  const play=()=>{
    autoplayRef.current()
  }
  if(props.autoplay!==null)
  {
    const interval=setInterval(play,props.autoplay*1000)
    return()=> clearInterval(interval)
  }
  
},[props.autoplay])
  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }
  
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
        {!props.autoplay &&(
          <>
           <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
          </>
        )}
     
        <Dots slides={props.slides} activeIndex={activeIndex}/>
    </div>
  )
}
Slider.defaultPropa={
  slides:[],
  autoplay:null
}
const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider