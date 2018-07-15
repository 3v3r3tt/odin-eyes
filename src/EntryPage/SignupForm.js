import React from 'react'
import { Link } from 'react-router-dom'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
    }

    this.showLogin = this.showLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  showLogin () {
    this.prism.style.transform = 'translateZ(-100px)'
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ submitted: true })
    const { user } = this.state
    const { dispatch } = this.props
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user))
    }
  }

  render() {
    const {
      submitted,
      user,
      registering
    } = this.state

    return (
      <div className='content signup'>
        <h2>Sign up</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
            <div className="help-block">{submitted && !user.firstName ? 'First Name is required' : null}&nbsp;</div>
          </div>
          <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
            <div className="help-block">{submitted && !user.lastName ? 'Last Name is required' : null}&nbsp;</div>
          </div>
          <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
            <div className="help-block">{submitted && !user.username ? 'Username is required' : null}&nbsp;</div>
          </div>
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
            <div className="help-block">{submitted && !user.password ? 'Password is required' : null}&nbsp;</div>
          </div>
          <div className="form-group text-center">
            <div onClick={this.showLogin} className="btn btn-default">&larr; Login</div>
            { registering ? <img src='src/_assets/gifs/loading.gif' /> : null }
            <button className="btn btn-success">Sign up</button>
          </div>
        </form>

        <CubeNav currentFace='signup'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration
  return {
    registering
  }
}

export { SignupForm }
