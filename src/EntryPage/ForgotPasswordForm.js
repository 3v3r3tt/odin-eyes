import React from 'react'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class ForgotPasswordForm extends React.Component {
  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content'>
        <h2>Forgot your password?</h2>
        <p>
          Enter your email so we can send you a reset link for your password
        </p>
        <p>
          TODO: Placeholder for forgot password reset form
        </p>

        <CubeNav currentFace='forgot'/>
      </div>
    )
  }
}

export { ForgotPasswordForm }
