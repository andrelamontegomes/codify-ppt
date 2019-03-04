import React from 'react'
import Title from '../slides/Title'
import Description from '../slides/Description'

export default class SlideHandler extends React.Component {
  componentsTest = [
    Title,
    Description,
  ]

  render() {
    const { slide } = this.props
    const Slide = this.componentsTest[slide || 0]
    return <Slide />
  }
}
