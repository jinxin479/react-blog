import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { withStyles } from 'material-ui/styles';


import Front from "./front"
import NotFound from "../components/notFound"
import Admin from "../components/admin"
import Edit from "../pages/edit"
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      boxSizing: 'border-box',
      '@media print': {
        background: theme.palette.common.white,
      },
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
    },
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        position: 'fixed',
        background:
          theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        borderRadius: 1,
        zIndex: theme.zIndex.tooltip,
        top: 0,
        left: 0,
        width: '100%',
        height: 2,
      },
      '& dd, & dt': {
        position: 'absolute',
        top: 0,
        height: 2,
        boxShadow: `${theme.palette.type === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white} 1px 0 6px 1px`,
        borderRadius: '100%',
        animation: 'nprogress-pulse 2s ease-out 0s infinite',
      },
      '& dd': {
        opacity: 0.6,
        width: 20,
        right: 0,
        clip: 'rect(-6px,22px,14px,10px)',
      },
      '& dt': {
        opacity: 0.6,
        width: 180,
        right: -80,
        clip: 'rect(-6px,90px,14px,-6px)',
      },
    },
    '@keyframes nprogress-pulse': {
      '30%': {
        opacity: 0.6,
      },
      '60%': {
        opacity: 0,
      },
      to: {
        opacity: 0.6,
      },
    },
    fadeEnter: {
      opacity: 0.01,
      '&.fadeEnterActive':{
          opacity: 1,
          transition: 'opacity 5000ms ease-in',
      }
  },
    fadeExit: {
      opacity: 1,
      '&.fadeExitActive':{
          opacity: 0.01,
          transition: 'opacity 5800ms ease-in',
      }
  },

  '.pageSlider-enter': {
      transform: 'translate3d(100%, 0, 0)',
      opacity: 0.01,
      '&.pageSlider-enter-active': {
         opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: 'all 600ms'
      }
 },
 '.pageSlider-exit': {
  transform: 'translate3d(0, 0, 0)',
  opacity: 1,
  '&.pageSlider-exit-active':{
      opacity: 0.01,
      transform: 'translate3d(-100%, 0, 0)',
      transition: 'all 600ms'
  }
 }


  }

});
class Main extends Component{
    render(){
        return(
            <Router>

               <Switch>
                   <Route path='/404' component={NotFound}/>
                   <Route path="/admin" component={Admin}/>
                   <Route path="/edit" component={Edit}/>
                   <Route path="/" component={Front}/>
               </Switch>

           </Router>
        )
    }
}
Main = withStyles(styles, {
    name: 'app',
})(Main)
export default Main;
