import React from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import ScrollToTop from './ScrollToTop.js';

const watercolorVariants = {
    firstLoad: {
    },
    enter: {
    },
    view: {
    },
    exit: {
    }
}
const watercolorContentVariants = {
    firstLoad: {
        x: 0
    },
    enter: {
        x: "-100vw"
    },
    view: {
        x: 0,
        transition:{
            type: "tween",
            delay: .2,
            duration: 1
        }
    },
    exit: {
        x: "-100vw",
        transition:{
            type: "tween",
            delay: 0,
            duration: 1
        }
    }
}
const watercolorSplashVariants = {
    firstLoad: {
        opacity: 1
    },
    enter: {
        opacity: 0
    },
    view: {
        opacity: 0,
        transition:{
            delay: 1.5,
            duration: 1
        }
    }
}
const watercolorBackgroundVariants = {
    firstLoad: {
        opacity: 1
    },
    enter: {
        opacity: 0
    },
    view: {
        opacity: 1,
        transition:{
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 1
        }
    }
}

class WatercolorPage extends React.Component { //the whole page. there will be multiple layouts which is why this is not done with APP directly
  constructor(props) {
    super(props);
    this.state = {
                    content: {"sections": []},
                    isLoaded: false,
                };
  }

  componentDidMount() {
      this.imgCount = this.imgLoadCount = 0;
      fetch("/index.json") //stolen code begins
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            content: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    ) //stolen code ends
  }

  render() {
    return (
      <motion.div className="watercolor-page"
      variants={watercolorVariants}
      initial={(((this.props.location.state !== undefined) ? this.props.location.state.from : undefined) === undefined ? "firstLoad" : "enter" )}
      animate="view"
      exit="exit"
      >
          <ScrollToTop />
          {console.log(this.props.location.state)}
          <WatercolorBackground />
          <motion.div className="watercolor-page-content" variants={watercolorContentVariants} >
              <motion.div className="watercolor-splash isloaded"
              variants={watercolorSplashVariants}
              ></motion.div>
              <WatercolorLeader />
              {this.state.content.sections.map((section, index) => (
                  <WatercolorSection section={section} />
              ))}
              <WatercolorFollower />
          </motion.div>
      </motion.div>
    );
  }
}
//<div className={"watercolor-splash".concat(this.state.isLoaded && this.state.imagesLoaded ? "  isloaded" : "")}></div>
function WatercolorLeader(props) { //first segment
  return (
    <div className="watercolor-leader">
        <div className="watercolor-category"></div>
        <div className="watercolor-beginning">
            <h1><div class="content">
  <div class="rolotext">
    <ul class="rolotext-list">
      <li class="rolotext-list-item">Industrial</li>
      <li class="rolotext-list-item">Sustainable</li>
      <li class="rolotext-list-item">Systems</li>
    </ul>
  </div>
</div> Design is My Passion</h1>
            <p>These are things I made! I care about community and humans. I'm also real good at CAD and sewing.</p>
            <div className="watercolor-sheet-tip"></div>
        </div>
        <div className="watercolor-introduction">
        </div>
    </div>
  );
}

class WatercolorSection extends React.Component { //container for projects of same category
    constructor(props) {
        super(props);
        this.state = {stuck: false};
        this.stickyScroll = this.stickyScroll.bind(this);
        this.categoryRef = React.createRef();
        //document.addEventListener('scroll', this.stickyScroll)
    }
    stickyScroll(){
        console.log(window.scrollY);
        console.log(this.categoryRef.current.offsetTop);
        if (window.scrollY >= this.categoryRef.current.offsetTop){
            console.log(this.state.stuck);
            this.setState({ stuck: true });
        }
    }
    render() {
        return (
        <div className="watercolor-section">
            <div className="watercolor-category"><div ref={this.categoryRef} onClick={this.stickyScroll} className={(this.state.stuck ? "stuck" : "")}><h2>{this.props.section.title}</h2></div></div>
            <div className="watercolor-slides">
                {this.props.section.slides.map((slide, index) => (
                    <WatercolorSlide slide={slide} />
                ))}
            </div>
        </div>
      );
    }
}

function WatercolorSlide(props) { //individual projects
  return (
    <div className="watercolor-slide">
        <div className="watercolor-sheet">
            <Link to={{
                pathname: props.slide.url,
                state: { from: "watercolor", to: "project" }
            }}>
                <img className="watercolor-image" src={props.slide.image} alt={"watercolor thumbnail for " + props.slide.title} />
            </Link>
        </div>
        <div className="watercolor-sidebar">
            <div>

                <h1><Link to={{
                    pathname: props.slide.url,
                    state: { from: "watercolor", to: "project" }
                }}>{props.slide.title}</Link></h1>

                <ReactMarkdown className="" children={props.slide.details} />
            </div>
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
            <Link className="watercolor-follower-link"
            to={{
                pathname: "/about",
                state: { from: "watercolor", to: "project" }
            }}>About</Link>
            <br/>
            <span>© Rose Kirby | 2022</span><br/><br/>
            {false &&
                <a className="watercolor-follower-link" href="https://instagram.com" target="_blank" rel="noreferrer">instant gram</a>
            }
            {false &&
                <a className="watercolor-follower-link" href="/behance.txt" target="_blank">bee hands</a>
            }
        </div>
        <div className="watercolor-conclusion">
        <h2><a href="mailto:rose@rosekir.by?subject=Hey%20Rose!" target="_blank" rel="noreferrer">Contact me!</a></h2><br/>
        <a href="mailto:rose@rosekir.by?subject=Hey%20Rose!" target="_blank" rel="noreferrer">There's more where that came from</a>
        </div>
    </div>
  );
}

function WatercolorBackground() { //individual projects
  return (
    <motion.img className="watercolor-pens" src={"/images/pens.png"} alt="" variants={watercolorBackgroundVariants} />
  );
}

export default withRouter(WatercolorPage);
