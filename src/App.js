import React from 'react';
import WindowFrame from './_helpers/WindowFrame'
import SlideHandler from './_helpers/SlideHandler'
import EventHandler from './_helpers/EventHandler'

class App extends React.Component {
  constructor(props){
    super(props)
    this.backNavigation = this.props.backKeyCode || 37
    this.forwardNavigation = this.props.forwardKeyCode || 39
    this.state = {
      currentSlide: 0,
    }
  }

  _handleSlideChange = evt => {
    const { currentSlide } = this.state
    const keyCode = evt.keyCode
    if(keyCode === this.forwardNavigation) {
      this.setState({ currentSlide: currentSlide + 1})
    } else if (keyCode === this.backNavigation && currentSlide > 1 ){
      this.setState({ currentSlide: currentSlide - 1})
    }
    else {}
  }

  render() {
    const { currentSlide } = this.state
    return (
      <WindowFrame>
        <SlideHandler slide={currentSlide}/>
        <EventHandler slideChange={this._handleSlideChange}/>
      </WindowFrame>
    );
  }
}

export default App;
