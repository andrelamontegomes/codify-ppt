import React from 'react';
import { SlideHandler, WindowFrame } from './_helpers'

class App extends React.Component {
  render() {
    return (
      <WindowFrame>
        <SlideHandler />
      </WindowFrame>
    );
  }
}

export default App;
