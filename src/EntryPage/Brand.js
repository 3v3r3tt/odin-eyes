import React from 'react'
import { CubeNav } from './CubeNav'

import logo from '../_assets/images/1x/logo-square-outline.png'

import { userActions } from '../_actions'

class Brand extends React.Component {
  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content'>
        <div className='entry-brand'>
          <img src={logo} />
        </div>

        <CubeNav currentFace='brand'/>
      </div>
    )
  }
}

export { Brand }
