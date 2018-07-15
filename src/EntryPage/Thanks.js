import React from 'react'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class Thanks extends React.Component {
  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content'>
        <div className='thank-you-msg'>
          Thank you!
        </div>

        <CubeNav currentFace='contact'/>
      </div>
    )
  }
}

export { Thanks }
