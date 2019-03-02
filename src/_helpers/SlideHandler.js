import React from 'react'
import Slide1 from '../slides/slide1'
import Slide2 from '../slides/slide2'

export default class SlideHandler extends React.Component {
  components = {
    slide1: Slide1,
    slide2: Slide2,
  }

  render() {
    const Slide = this.components[this.props.slide || "slide1" ]
    return <Slide />
  }
}
