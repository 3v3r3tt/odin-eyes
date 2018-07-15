import React from 'react'
import { CubeNav } from './CubeNav'

import icon from '../_assets/images/1x/icon.png'
import loading from '../_assets/gifs/loading.gif'

import { userActions } from '../_actions'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showSignup = this.showSignup.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state
    const { dispatch } = this.props
    if (username && password) {
      dispatch(userActions.login(username, password))
    }
  }

  showSignup () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -90deg)'
  }

  render() {
    const { loggingIn } = this.props
    const {
      username,
      password,
      submitted
    } = this.state

    return (
      <div className='content login'>
        <div className='entry-icon'>
          <img src={icon} />
        </div>

        <h2>Login</h2>
        <form name='form' onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' name='username' value={username} onChange={this.handleChange} />
            <div className="help-block">{submitted && !username ? 'Username is required' : null}&nbsp;</div>
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' name='password' value={password} onChange={this.handleChange} />
            <div className="help-block">{submitted && !password ? 'Password is required' : null}&nbsp;</div>
          </div>
          <div className='form-group text-center'>
            <button className='btn btn-info'>Login</button>
            { loggingIn ? <img src={loading} /> : null }
            <div className='btn btn-default' onClick={this.showSignup}>Sign up &rarr;</div>
          </div>
        </form>

        <CubeNav currentFace='login'/>
      </div>
    )
  }
}

export { LoginForm }
