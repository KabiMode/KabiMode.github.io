import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <WatercolorPage />
    </div>
  );
}

class WatercolorPage extends React.Component { //the whole page. there will be multiple layouts which is why this is not done with APP directly
  constructor(props) {
    super(props);
    this.state = {scrolled: false};
  }

  componentDidMount() {
      if (this.state.scrolled == false && window.scrollY >= 50) {
          this.setState({ scrolled: true });
      }
      document.addEventListener('scroll', () => {
        //alert(window.scrollY);
        if (this.state.scrolled == false && window.scrollY >= 50) {
            this.setState({ scrolled: true });
        } else if (this.state.scrolled == true && window.scrollY < 50) {
            this.setState({ scrolled: false });
        }
    });
  }
  render() {
    return (
      <div className="watercolor-page">
          <div className="watercolor-header">
              <div className={"menu-logo".concat(this.state.scrolled ? " scrolled" : "")}></div>
              <h2 className="title-name">Rose Kirby</h2>
          </div>
          <WatercolorPens />
          <WatercolorLeader />
          <WatercolorSection section='Products' />
          <WatercolorSection section='Textiles' />
          <WatercolorFollower />
      </div>
    );
  }
}

function WatercolorLeader(props) { //first segment
  return (
    <div className="watercolor-leader">
        <div className="watercolor-category"></div>
        <div className="watercolor-beginning">
            <h1>Industrial Design I Guess</h1>
            <p>Hi! I'm Rose and these are some things I made. I care about sustainability and plants and stuff, but Im also real good at CAD and sewing.</p>
            <div className="watercolor-sheet-tip"></div>
        </div>
        <div className="watercolor-introduction">
        </div>
    </div>
  );
}

function WatercolorSection(props) { //container for projects of same category
  return (
    <div className="watercolor-section">
        <div className="watercolor-category"><h2>{props.section}</h2></div>
        <div className="watercolor-slides">
            <WatercolorSlide title='osmo'/>
        </div>
    </div>
  );
}

function WatercolorSlide(props) { //individual projects
  return (
    <div className="watercolor-slide">
        <div className="watercolor-sheet">
            <img className="watercolor-image" src={"/images/osmo/watercolor-thumbnail.png"} />
        </div>
        <div className="watercolor-sidebar">
            <h1>{props.title}</h1>
            <span>10 week project</span>
            <p>Reducing food waste</p>
        </div>
    </div>
  );
}

function WatercolorFollower(props) { //first segment
  return (
    <div className="watercolor-follower">
        <div className="watercolor-category"></div>
        <div className="watercolor-ending">
            <div className="watercolor-sheet-tip"></div>
            <h1>Thats it! ...or is it?</h1>
            <p>Hope you enjoyed! Now go back and beat it on hard mode</p>
            <br/>
            <span>©Rose Kirby | 2020</span><br/><br/>
            <a href="https://instagram.com" target="_blank">instant gram</a>
        </div>
        <div className="watercolor-conclusion">
        </div>
    </div>
  );
}

function WatercolorPens() { //individual projects
  return (
    <img className="watercolor-pens" src={"/images/pens.png"} />
  );
}


export default App;
