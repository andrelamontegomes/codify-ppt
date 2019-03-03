import React from 'react'
import Slide1 from '../slides/slide1'
import Slide2 from '../slides/slide2'
import Slide3 from '../slides/slide3'

export default class SlideHandler extends React.Component {
  components = {
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
  }

  render() {
    const { slide } = this.props
    const Slide = this.components[slide || "slide1" ]
    return <Slide />
  }
}
