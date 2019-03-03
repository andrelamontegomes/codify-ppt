import React from 'react'

// left arrow = 37
// up arrow = 38
// right arrow = 39
// down arrow = 40
class EventHandler extends React.Component {
  componentDidMount(){
    document.addEventListener('keydown', this.props.slideChange);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.props.slideChange);
  }

  render() { return <div></div> }
}

export default EventHandler
