import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
 

const styles = {
  footer: {
    display : "flex",
    flexDirection : 'column' as 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "darkGrey",
    color : "whiteSmoke",
    padding: 20
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  }
}

function Footer({ classes }: any) {
  return (
    <div className={classes.footer}>
      <p> &copy; 2019 Dappsnation </p>
      <div>
        <Button size="small" color="primary" >
            <a className={classes.link} href="https://www.linkedin.com/company/dappsnation/">Linkedin</a>
        </Button>
        <Button size="small" color="primary" >        
            <a className={classes.link} href="https://medium.com/@grandschtroumpf">Medium</a>
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
