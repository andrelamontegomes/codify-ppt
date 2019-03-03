import React from 'react';
import SlideHandler from './_helpers/SlideHandler'
import EventHandler from './_helpers/EventHandler'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentSlide: 1,
    }
  }

  _handleSlideChange = evt => {
    const { currentSlide } = this.state
    const keyCode = evt.keyCode
    if(keyCode === 39) {
      this.setState({ currentSlide: currentSlide + 1})
    } else if (keyCode === 37 && currentSlide > 1 ){
      this.setState({ currentSlide: currentSlide - 1})
    }
    else {}
  }

  render() {
    const { currentSlide } = this.state
    const slide = `slide${currentSlide}`
    return (
      <div>
        <SlideHandler slide={slide}/>
        <EventHandler slideChange={this._handleSlideChange}/>
      </div>
    );
  }
}

export default App;
