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

  _handleSlideChange = () => {

  }

  render() {
    return (
      <div>
        <SlideHandler slide={"slide2"}/>
        <EventHandler />
      </div>
    );
  }
}

export default App;
