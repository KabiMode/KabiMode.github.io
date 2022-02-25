import React from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import ScrollToTop from './ScrollToTop.js';


const aboutVariants = {
    enterRight: {
        x: "150vw"
    },
    enterUp: {
        y: "100%"
    },
    view: {
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            type: "tween",
            delay: .2,
            duration: 1
        }
    },
    exitRight: {
        x: "150vw",
        transition:{
            type: "tween",
            delay: .2,
            duration: 1
        }
    }
}

class AboutPage extends React.Component { //the whole page. there will be multiple layouts which is why this is not done with APP directly
  constructor(props) {
    super(props);
    this.state = {
                    content: {},
                };
  }

  componentDidMount() {
      fetch("/about.json") //stolen code begins
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            content: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
          console.log(error);
        }
    ) //stolen code ends
  }

  render() {
    var enterAnimation
    switch((this.props.location.state !== undefined) ? this.props.location.state.from : undefined) {
      case "project":
          enterAnimation = "enterUp"
          break;
      case "projectAbove":
          enterAnimation = "enterUp"
          break;
      case "watercolor":
          enterAnimation = "enterRight"
          break;
      case "header":
          enterAnimation = "enterRight"
          break;
      default:
          enterAnimation = "enterUp"
          break;
    }
    return (
        <div className="about-page">
            <motion.div className="about-page-content"
            variants={aboutVariants}
            initial={enterAnimation}
            animate="view"
            exit="exitRight"
            >
                <div className="about-main">
                    <ScrollToTop />
                    <ReactMarkdown className="about-main-content" children={this.state.content.mainContent} linkTarget="_blank" />
                    <div className="about-main-image">
                        <img src={this.state.content.mainSrc} alt={this.state.content.mainAlt} />
                    </div>
                </div>
                <div className="about-footer">
                    <Link className="watercolor-follower-link"
                    to={{
                        pathname: "/",
                        state: { from: "about", to: "watercolor" }
                    }}>Home</Link>
                    <a href="mailto:rose@rosekir.by?subject=Hey%20Rose!" target="_blank" rel="noreferrer">Contact</a>
                </div>
            </motion.div>
        </div>
    );
  }
}

export default withRouter(AboutPage);
