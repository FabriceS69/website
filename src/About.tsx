import React from 'react';
import { withStyles } from '@material-ui/core' 

import './About.css';

const styles = {
}

function About({classes} : any) {
  return <main className='background'>
      <p className="mission"><b>Our mission</b></p>
      <h1 className="mission">
      Dare to innovate by staying always up to date. 
      To encourage web developer to dare to innovate.
      To support web developers in mastering new technologies.
      To empower web developers to dare to innovate with cutting edge technologies.
      Train and connect web developers to innovate all together for a better future. 
      To shape the future of the web by training and connecting developers.
      Bring training and innovation to every developer.

      </h1>
      <p className="mission"><b>Our CEO's quote</b></p>
      <h2 className="mission">
      Better commit yourself into a short but very specific training, than try to learn by yourself .......

      </h2>

    </main>
}

export default withStyles(styles)(About);