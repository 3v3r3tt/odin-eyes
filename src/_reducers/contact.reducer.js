import { userConstants } from '../_constants'

const initialState = { contacted: false }

export function contact(state = initialState, action) {
  switch (action.type) {
    case userConstants.CONTACT_SUCCESS:
      return {
        contacted: true,
        email: action.email
      }
    default:
      return state
  }
}
