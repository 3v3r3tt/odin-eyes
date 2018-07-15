import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { ContactForm } from './ContactForm'
import { ForgotPasswordForm } from './ForgotPasswordForm'
import { Brand } from './Brand'
import { Thanks } from './Thanks'

import '../app.scss'
import logo from '../_assets/images/1x/logo-rectangle.png'

import { userActions } from '../_actions'

class EntryPage extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.dispatch(userActions.logout())

    this.showLogin = this.showLogin.bind(this)
    this.showSignup = this.showSignup.bind(this)
    this.showForgotPassword = this.showForgotPassword.bind(this)
    this.showSubscribe = this.showSubscribe.bind(this)
    this.showContactUs = this.showContactUs.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  showLogin () {
    this.prism.style.transform = 'translateZ(-100px)'
  }

  showSignup () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -90deg)'
  }

  showForgotPassword () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -180deg)'
  }

  showSubscribe () {
    console.log('showSubscribe')
    this.prism.style.transform = 'translateZ(-100px) rotateX( -90deg)'
  }

  showContactUs () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( 90deg)'
  }

  showThankYou (){
    // TODO: do this after a subscribe or contact us submit
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  render() {
    return (
      <div>
        <div className='entry-logo'>
          <img src={logo} />
        </div>

        <div className='wrapper'>
          <div className='rec-prism'>
            <div className='face face-right'>
              <SignupForm registering={this.props.registering} dispatch={this.props.dispatch}/>
            </div>

            <div className='face face-front'>
              <LoginForm loggingIn={this.props.loggingIn} dispatch={this.props.dispatch}/>
            </div>

            <div className='face face-left'>
              <ContactForm contacted={this.props.contacted} dispatch={this.props.dispatch}/>
            </div>

            <div className='face face-top'>
              <Brand />
            </div>

            <div className='face face-back'>
              <ForgotPasswordForm />
            </div>

            <div className='face face-bottom'>
              <Thanks />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  const { registering } = state.registration
  const { contacted } = state.contact
  return {
    loggingIn,
    registering,
    contacted
  }
}

const connectedEntryPage = connect(mapStateToProps)(EntryPage)
export { connectedEntryPage as EntryPage }
