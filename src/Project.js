import React from 'react';
import {
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'


const projectVariants = {
    enterRight: {
        x: "150vw"
    },
    enterUp: {
        y: "100%"
    },
    enterDown: {
        y: "-300vh",
        opacity: 0
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
    },
    exitUp: {
        y: "-100%",
        transition:{
            type: "tween",
            delay: .2,
            duration: 1
        }
    },
    exitDown: {
        y: "300vh",
        opacity: [1,0,0],
        transition:{
            type: "tween",
            delay: 0,
            duration: 1.2
        }
    }
}


const coloredStrongRenderer = { //somewhat janky way to pass a color value in a markdown strong tag using two escaped asterixes as a delimiter for the color and content values
    strong: (props) => {
        if (props.children[0]) {
            const splitText = props.children[0].props.children.split("**")
            if (splitText.length > 1) {
                return(
                    <strong style={{color: splitText.shift()}}>{splitText.join("")}</strong>
                )
            } else {
                return(
                    <strong>{props.children}</strong>
                )
            }
        } else {
            return(
                <strong>{props.children}</strong>
            )
        }
    }
}

class ProjectPage extends React.Component { //whole page containing a project
    constructor(props) {
        super(props);
        this.state = {scrolled: false,
                        content: {"children": []},
                        isLoaded: false,
                        imagesLoaded: false,
                        style: document.createElement('style'),
                        homepage: "index.json",
                        pageOrder: [{"title": "Home", "url": "/"}]
                    };
    }

    componentDidMount() {
        this.imgCount = this.imgLoadCount = 0;
        fetch("/projects.json") //stolen code begins
        .then(res => res.json())
        .then(
          (result) => {
                //console.log(this.props.slug);
                this.setState({
                  isLoaded: true,
                  content: result.projects.find(p => p.slug === this.props.slug)
              });
                setTimeout(() => { // TODO: make this actually check on images
                    this.setState({
                      imagesLoaded: true,
                    });
                }, 2000)
                if (this.state.content.popColor !== undefined || this.state.content.strongBold !== undefined) { //dynamic color and font weight for strong tags
                    var tempStyle = this.state.style
                    tempStyle.innerHTML =
                    	'.project-page strong {' +
                    		'font-weight: ' + ((this.state.content.strongBold === true) ? 'bold' : 'inherit') + ';' +
                    		'color: ' + this.state.content.popColor + ';' +
                    	'}';
                    this.setState({
                        style: tempStyle
                    });
                        // Insert our new styles at the end of head
                        document.getElementsByTagName('head')[0].appendChild(this.state.style)
                }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
            this.setState({
              isLoaded: true,
              error
            });
          }
      ) //stolen code ends
      fetch(this.state.homepage) //stolen code begins
      .then(res => res.json())
      .then(
        (result) => {
            result.sections.map(child => {
                child.slides.map(grandchild => {
                    this.state.pageOrder.push(grandchild)
                })
            })
            this.state.pageOrder.push({"title": "Rose!", "url": "/about"})
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
      //set popColor (strong color)
    }

    componentWillUnmount() {
        this.state.style.remove()
    }
    render() {
        if (!this.state.content){
            console.log("page has no data");
            return(
                <Redirect to="/" />
            );
        }
        var enterAnimation
        var exitAnimation
        switch((this.props.location.state !== undefined) ? this.props.location.state.from : undefined) {
            case "project":
                enterAnimation = "enterUp"
                break;
            case "projectBelow":
                enterAnimation = "enterDown"
            break;
            case "projectAbove":
                enterAnimation = "enterUp"
                break;
            case "watercolor":
                enterAnimation = "enterRight"
                break;
            default:
                enterAnimation = "enterUp"
                break;
        }
        switch((this.props.history.location.state !== undefined) ? this.props.history.location.state.to : undefined) {
            case "project":
                exitAnimation = "exitUp"
                break;
            case "projectAbove":
                exitAnimation = "exitDown"
            break;
            case "projectBelow":
                exitAnimation = "exitUp"
                break;
            case "watercolor":
                exitAnimation = "exitRight"
                break;
            default:
                exitAnimation = "exitUp"
                break;
        }
        return(
            <div className="project-page">
                <motion.div
                variants={projectVariants}
                initial={enterAnimation}
                animate="view"
                exit={exitAnimation}
                >
                    {this.state.content.children.map((child, index) => (
                        componentLookup(child.component, child.props)
                    ))}
                    <ProjectFooter slug={this.props.slug} pageOrder={this.state.pageOrder}  />
                </motion.div>
            </div>
        );
    }
}

function componentLookup(name, props = {}) {
  switch(name) {
    case 'ProjectFullImage': return <ProjectFullImage props={props} />;
    case 'ProjectTitle': return <ProjectTitle props={props} />;
    case 'ProjectHeading': return <ProjectHeading props={props} />;
    case 'ProjectImageByText': return <ProjectImageByText props={props} />;
    case 'ProjectImageByImage': return <ProjectImageByImage props={props} />;
    case 'ProjectColumns': return <ProjectColumns props={props} />;
    case 'ProjectCycleThree': return <ProjectCycleThree props={props} />;
    case 'ProjectImageCaptioned': return <ProjectImageCaptioned props={props} />;
    case 'ProjectImageGallery': return <ProjectImageGallery props={props} />;
    default: return <ProjectTitle props={props} />;
  }
}
//<WatercolorSection element={child} />
//<FullImage src={this.state.content.children[0].src} alt={this.state.content.children[0].alt} />

function ProjectFullImage(props){ //try to fill page, but if not, its all good
    return(
        <div className={"project-full-image".concat(props.props.isTitle ? " title" : "").concat(props.props.bleed !== undefined ? " " + props.props.bleed : "")} style={((props.props.imageMaxWidth !== undefined) ? {maxWidth: props.props.imageMaxWidth} : {})}>
            <img src={props.props.src} alt={props.props.alt} style={((props.props.imageWidth !== undefined) ? {width: props.props.imageWidth} : {})} className={(props.props.pageImage ? "page-image" : "")} />
        </div>
    );
}
function ProjectTitle(props){
    return(
        <ReactMarkdown className="project-heading" children={props.props.value} />
    );
}
function ProjectHeading(props){
    return(
        <ReactMarkdown className={"project-heading".concat(props.props.unfinished ? " unfinished" : "")} children={props.props.value} />
    );
}
function ProjectImageByText(props){
    return(
        <div className={"project-image-by-text".concat(props.props.unfinished ? " unfinished" : "")}>
            {(props.props.imageSide === "left")
                ? <div className={"project-image-by-text-image left".concat(props.props.bleed ? " bleed" : "")} style={((props.props.imageWidth !== undefined) ? {flexBasis: props.props.imageWidth} : {})}>
                    <img src={props.props.src} alt={props.props.alt} className={(props.props.pageImage ? "page-image" : "")} />
                  </div>
                : null
            }
            <ReactMarkdown className={"project-image-by-text-text".concat(props.props.details === false ? "" : " details").concat(props.props.smallText ? " small-text" : "")} children={props.props.value} />
            {(props.props.imageSide === undefined || props.props.imageSide === "right")
                ? <div className={"project-image-by-text-image right".concat(props.props.bleed ? " bleed" : "")} style={((props.props.imageWidth !== undefined) ? {flexBasis: props.props.imageWidth} : {})}>
                    <img src={props.props.src} alt={props.props.alt} className={(props.props.pageImage ? "page-image" : "")} />
                  </div>
                : null
            }
        </div>
    );
}
function ProjectImageByImage(props){
    return(
        <div className={"project-image-by-image".concat(props.props.unfinished ? " unfinished" : "")}>
            <div>
                <img src={props.props.src1} alt={props.props.alt1} className={(props.props.pageImage1 ? "page-image" : "")} />
            </div>
            <div>
                <img src={props.props.src2} alt={props.props.alt2} className={(props.props.pageImage2 ? "page-image" : "")} />
            </div>
        </div>
    );
}
function ProjectColumns(props){
    return(
        <div className={"project-columns".concat(props.props.unfinished ? " unfinished" : "")}>
            <ReactMarkdown className="project-columns-heading" children={props.props.value} />
            <div className="project-columns-columns">
                {props.props.columns.map((column, index) => (
                    ((column.src !== undefined)
                    ? <div className="project-columns-column">
                        <img src={column.src} alt={column.alt} style={((column.opacity !== undefined) ? {opacity: column.opacity} : {})} />
                      </div>
                    : null)
                ))}
            </div>
            <div className="project-columns-columns">
                {props.props.columns.map((column, index) => (
                    <ReactMarkdown className="project-columns-column" renderers={coloredStrongRenderer} children={column.value} />
                ))}
            </div>
        </div>
    );
}
function ProjectCycleThree(props){ //try to fill page, but if not, its all good
    return(
        <div className="project-cycle-three">
            <img className="project-cycle-arrow" src="/images/osmo/circle-arrow.png" alt="" />
            <img className="project-cycle-arrow" src="/images/osmo/circle-arrow.png" alt="" style={{transform: "rotate(130deg)"}} />
            <img className="project-cycle-arrow" src="/images/osmo/circle-arrow.png" alt="" style={{transform: "rotate(230deg)"}} />
            <div className="project-cycle-stage">
                <img src={props.props.stages[0].src} alt={props.props.stages[0].alt} />
                <ReactMarkdown className="big-details" children={props.props.stages[0].value} />
            </div>
            <div className="project-cycle-stage">
                <img src={props.props.stages[2].src} alt={props.props.stages[2].alt} />
                <ReactMarkdown className="big-details" children={props.props.stages[2].value} />
            </div>
            <div className="project-cycle-stage">
                <img src={props.props.stages[1].src} alt={props.props.stages[1].alt} />
                <ReactMarkdown className="big-details" children={props.props.stages[1].value} />
            </div>
        </div>
    );
}
function ProjectImageCaptioned(props){
    return(
        <div className={"project-image-captioned".concat(props.props.unfinished ? " unfinished" : "")}>
            <img src={props.props.src} alt={props.props.alt} style={((props.props.imageWidth !== undefined) ? {width: props.props.imageWidth} : {})} className={(props.props.pageImage ? "page-image" : "").concat(props.props.isTitle ? " title" : "")} />
            <div className={"project-image-captioned-caption"} >
                <h2 className="project-image-captioned-title">{props.props.titleValue}</h2><span className="project-image-captioned-details">{props.props.detailsValue}</span>
            </div>
        </div>
    );
}

class ProjectImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.slider = React.createRef();
    }
    render() {
        var sliderWidth = -(this.slider.current !== null ? this.slider.current.clientWidth - this.slider.current.parentElement.clientWidth + parseFloat(window.getComputedStyle(this.slider.current).marginLeft)*2 + parseFloat(window.getComputedStyle(this.slider.current).marginRight)*2 : 1);
        sliderWidth = (this.slider.current !== null ? (this.slider.current.clientWidth < this.slider.current.parentElement.clientWidth ? 1 : sliderWidth) : sliderWidth)
        return(
            <div className={"project-image-gallery".concat(this.props.props.unfinished ? " unfinished" : "")}>

                <motion.div className="project-image-gallery-gallery"
                    style={{
                        transform: "translateZ(0)",
                        cursor: "grab",
                    }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div className="project-image-gallery-slider"
                        drag="x"
                        dragPropagation
                        dragConstraints={{
                            left: sliderWidth,
                            right: 0,
                        }}
                        ref={this.slider}
                    >
                            {this.props.props.images.map((image, index) => (
                                <img src={image.src} alt={image.alt} className={(image.pageImage ? "page-image" : "")} />
                            ))}
                    </motion.div>
                </motion.div>
                <div className={"project-image-gallery-caption"} >
                    <h2 className="project-image-captioned-title">{this.props.props.titleValue}</h2><span className="project-image-captioned-details">{this.props.props.detailsValue}</span>
                </div>

            </div>
        );
    }
}

const footerVariants = {
    initial: { },
    hover: { }
}
const footerArrowVariants = {
    initial: {
        x: 0,
        y: 0,
        opacity: 1
    },
    hover: {
        originX: 0,
        originY: 1,
        scale: 3,
        x: 0,
        y: 0,
        opacity: .1,
        transition:{
            type: "tween",
            duration: .5
        }
    }
}

function ProjectFooter(props){
    return( //from: "projectBelow", to: (((props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1] !== undefined) ? props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1].url : null) === "/" ? "watercolor" : "projectAbove")
        <div className="project-footer">
            <div className="project-footer-big">
                <Link className="project-footer-link project-footer-link-prev" to={{

                    pathname: ((props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1] !== undefined) ? props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1].url : null),
                    state: { from: "projectBelow", to: (props.pageOrder.findIndex(p => p.url === props.slug) <= 1 ? "watercolor" : "projectAbove") }
                }}>
                    <motion.div
                    variants={footerVariants}
                    whileHover="hover"
                    >
                        <h3>Previous:</h3>
                        <h2>
                            {((props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1] !== undefined) ? props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)-1].title : null)}
                        </h2>
                        {(props.pageOrder.findIndex(p => p.url === props.slug) <= 1 &&
                            <motion.img
                            src="/images/left-arrow.svg"
                            alt=""
                            className=""
                            variants={footerArrowVariants}
                            />
                        )}
                        {(props.pageOrder.findIndex(p => p.url === props.slug) > 1 &&
                            <motion.img
                            src="/images/up-arrow.svg"
                            alt=""
                            className=""
                            variants={footerArrowVariants}
                            />
                        )}
                    </motion.div>
                </Link>
                {(
                    props.pageOrder.findIndex(p => p.url === props.slug)+1 < props.pageOrder.length &&
                    <Link className="project-footer-link project-footer-link-next" to={{
                        pathname: ((props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)+1] !== undefined) ? props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)+1].url : null),
                        state: { from: "projectAbove", to: "projectBelow" }
                    }}>
                        <motion.div
                        variants={footerVariants}
                        whileHover="hover"
                        >
                            <h2>Next:</h2>
                            <h1>
                            {((props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)+1] !== undefined) ? props.pageOrder[props.pageOrder.findIndex(p => p.url === props.slug)+1].title : null)}
                            </h1>
                            <motion.img
                             src="/images/down-arrow.svg"
                             alt=""
                             className=""
                             variants={footerArrowVariants}
                            />
                        </motion.div>
                    </Link>
                )}
            </div>
            <div className="project-footer-little">
                <Link className="watercolor-follower-link"
                to={{
                    pathname: "/about",
                    state: { from: "project", to: "project" }
                }}>About</Link>
                <br />
                <span>© Rose Kirby | 2021</span><br/><br/>
                <Link className="watercolor-follower-link"
                to={{
                    pathname: "/",
                    state: { from: "project", to: "watercolor" }
                }}>Home</Link>
                <a href="mailto:rose@rosekir.by?subject=Hey%20Rose!" target="_blank" rel="noreferrer">Contact</a>
            </div>
        </div>
    );
}


export default withRouter(ProjectPage);
