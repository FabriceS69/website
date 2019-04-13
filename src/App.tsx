import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Footer from './Footer'

import theme from './theme'

import { Link } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core'

const styles = {
  appBar: {
    backgroundColor: 'rgba(200, 200, 200, 0.4)'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    color: 'white',
    textDecoration: 'none',
  }
  
}

function App({ classes }: any) {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppBar className={classes.appBar} position="fixed" color="inherit">
          {/* Nav */}
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <Button className={classes.navButton}>Dapps Nation</Button>
            </Link>
            <Link to="/about">
              <Button className={classes.navButton}>About</Button>
            </Link>
          </Toolbar>
        </AppBar>
        {/* sections */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Footer */}
        <Footer />
      </Router>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
