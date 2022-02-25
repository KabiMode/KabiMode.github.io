import React from 'react';
import { useState, useEffect, useContext } from 'react'
//import React, { useState, useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import WatercolorPage from './Watercolor.js';
import ProjectPage from './Project.js';
import AboutPage from './About.js';
import './App.css';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'


const HeaderContext = React.createContext()

class HeaderProvider extends React.Component {
    state = {
        headerMinimal: false,
        headerShift: false
    }
    render() {
        return(
            <HeaderContext.Provider value={{
                state: this.state,
                setHeaderMinimal: (minimal) => this.setState({
                    headerMinimal: minimal
                }),
                setHeaderShift: (shift) => this.setState({
                    headerShift: shift
                })
            }}>
                {this.props.children}
            </HeaderContext.Provider>
        )
    }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                      headerMinimal: false,
                  };
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/scripts.js";
        script.async = true;
        document.body.appendChild(script);
    } //{(context) => ( (context.state.headerMinimal && context.setHeaderMinimal(false)) )}
    //{(context) => ( (!context.state.headerShift && context.setHeaderShift(true)) )}
    render() {
        return (
            <HeaderProvider>
                <div className="app">
                    <Header />
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={this.props.location} key={this.props.location.pathname}>
                            <Route exact path="/">
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (context.state.headerMinimal && context.setHeaderMinimal(false));
                                        (!context.state.headerShift && context.setHeaderShift(true))
                                    }}
                                </HeaderContext.Consumer>
                                <WatercolorPage />
                            </Route>
                            <Route path="/products"  key="products">
                                <WatercolorPage />
                            </Route>
                            <Route path="/textiles" >
                                <WatercolorPage />
                            </Route>
                            <Route path="/misc" >
                                <WatercolorPage />
                            </Route>
                            <Route path="/about"  key="about" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (context.state.headerMinimal && context.setHeaderMinimal(false));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <AboutPage />
                            </Route>
                            <Route path="/osmo" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (!context.state.headerMinimal && context.setHeaderMinimal(true));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <ProjectPage slug="/osmo" key="osmo" />
                            </Route>
                            <Route path="/mitrium" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (!context.state.headerMinimal && context.setHeaderMinimal(true));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <ProjectPage slug="/mitrium" key="mitrium" />
                            </Route>
                            <Route path="/poly" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (!context.state.headerMinimal && context.setHeaderMinimal(true));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <ProjectPage slug="/poly" key="osmo" />
                            </Route>
                            <Route path="/hopper" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (!context.state.headerMinimal && context.setHeaderMinimal(true));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <ProjectPage slug="/hopper" key="hopper" />
                            </Route>
                            <Route path="/drawings" >
                                <HeaderContext.Consumer>
                                    {(context) => {
                                        (!context.state.headerMinimal && context.setHeaderMinimal(true));
                                        (context.state.headerShift && context.setHeaderShift(false))
                                    }}
                                </HeaderContext.Consumer>
                                <ProjectPage slug="/drawings" key="drawings" />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </div>
            </HeaderProvider>
        );  //<Switch location={location} key={location.pathname}>
            //<Header scrolled={this.state.scrolled} minimal={true} />
    }
}
//animate={{ x: (scrollY.current > 50 ? "calc(18px + 9vmin + 45vw)" : 0) }}
function Header(props) {//calc(18px + 9vmin + 45vw)
    const { scrollY } = useViewportScroll()
    const size = useWindowSize();
    const context = useContext(HeaderContext)
    //recreating "calc(18px + 9vmin + 45vw)" in pixels
    var vw = size.width
    var vh = size.height
    var vmin = Math.min(vw, vh)
    const transform = useTransform(scrollY, [0, 50], [0, 18+0.09*vmin+0.45*vw]);

    //const location = useLocation()
    //console.log(location);
    //console.log(props);
    //(!context.state.headerMinimal && context.setHeaderMinimal(true)) //this guy sets header minimal true. for testing, obviously
    return(
        <motion.div className={"header".concat(context.state.headerMinimal ? " minimal" : "")}
        initial={{ x: 0 }}
        style={{ x: (context.state.headerShift ? transform : 0 ) }}
        transition={{ duration: .2 }}
        >
            <div className="header-menu">
                <Link className="menu-logo title-link" to={{ pathname:"/", state: { from: "header", to: "watercolor" } }}><div className="hamburger hamburger-top"></div><div className="hamburger hamburger-bottom"></div></Link>
                <div className="header-menu-item">
                    <Link className="header-link" to={{ pathname:"/about", state: { from: "header", to: "watercolor" } }}>About</Link>
                </div>
            </div>
            <h2 className="title-name"><Link className="title-link" to={{ pathname:"/", state: { from: "header", to: "watercolor" } }}>Rose Kirby</Link></h2>
            <HeaderContext.Consumer>
                {(value) => (
                    <span>{value.state.headerMinimal}</span>
                )}
            </HeaderContext.Consumer>
        </motion.div>
    ); //<div className={"header".concat(props.scrolled ? " scrolled" : "").concat(props.minimal ? " minimal" : "")}>
} //transform(scrollY, [0,300], [200,500])
//<div className="menu-logo"><Link className="title-link" to={{ pathname:"/", state: { from: "header", to: "watercolor" } }}><div className="hamburger hamburger-top"></div><div className="hamburger hamburger-bottom"></div></Link></div>

/*
<div className="header-menu-item">
    <Link className="header-link" to="/products">Products</Link>
</div>
<div className="header-menu-item">
    <Link className="header-link" to="/textiles">Textiles</Link>
</div>
<div className="header-menu-item">
    <Link className="header-link" to="/misc">Misc</Link>
</div>
*/

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}




export default withRouter(App);
