import React from 'react'

class CubeNav extends React.Component {
  constructor(props) {
    super(props)

    this.showLogin = this.showLogin.bind(this)
    this.showSignup = this.showSignup.bind(this)
    this.showForgotPassword = this.showForgotPassword.bind(this)
    this.showBrand = this.showBrand.bind(this)
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

  showBrand () {
    this.prism.style.transform = 'translateZ(-100px) rotateX( -90deg)'
  }

  showContactUs () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( 90deg)'
  }

  showThankYou (){
    // TODO: do this after a subscribe or contact submit
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  render() {
    return (
      <div>
        <ul className='nav'>
          { this.props.currentFace === 'login' ? null : <li onClick={this.showLogin}>Login</li> }
          { this.props.currentFace === 'signup' ? null : <li onClick={this.showSignup}>Sign up</li> }
          { this.props.currentFace === 'contact' ? null : <li onClick={this.showContactUs}>Contact</li> }
          { this.props.currentFace === 'brand' ? null : <li onClick={this.showBrand}>Brand</li> }
          { this.props.currentFace === 'forgot' ? null : <li onClick={this.showForgotPassword}>Forgot password</li> }
        </ul>
      </div>
    )
  }
}

export { CubeNav }
