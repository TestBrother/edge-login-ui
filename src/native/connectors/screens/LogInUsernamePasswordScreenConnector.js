import { connect } from 'react-redux'

import * as action from '../../../common/actions'
import * as Constants from '../../../common/constants'
import LinkedComponent from '../../components/screens/LoginUsernamePasswordScreenComponent'

export const mapStateToProps = (state, ownProps) => {
  let pv = false
  if (state.previousUsers.userList.length > 0) {
    pv = true
  }
  return {
    styles: ownProps.styles,
    auth: state.login,
    loginSuccess: state.login.loginSuccess,
    workflow: state.workflow,
    username: state.login.username,
    password: state.login.password,
    error: state.login.errorMessage,
    previousUsers: state.previousUsers.userList,
    usernameList: state.previousUsers.usernameOnlyList,
    filteredUsernameList: state.previousUsers.usernameOnlyList,
    hasUsers: pv,
    showModal: state.workflow.showModal,
    recoveryLoginEnabledError: state.passwordRecovery.recoveryLoginEnabledError
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    launchUserLoginWithTouchId: data =>
      dispatch(action.userLoginWithTouchId(data)),
    userLogin: data => dispatch(action.userLogin(data)),
    gotoCreatePage: () =>
      dispatch(action.startWorkflow(Constants.WORKFLOW_CREATE)),
    gotoPinLoginPage: () =>
      dispatch(action.startWorkflow(Constants.WORKFLOW_PIN)),
    updateUsername: data =>
      dispatch(
        action.dispatchActionWithData(Constants.AUTH_UPDATE_USERNAME, data)
      ),
    updatePassword: data =>
      dispatch(
        action.dispatchActionWithData(
          Constants.AUTH_UPDATE_LOGIN_PASSWORD,
          data
        )
      ),
    deleteUserFromDevice: data => dispatch(action.deleteUserFromDevice(data)),
    launchDeleteModal: () =>
      dispatch(action.dispatchAction(Constants.WORKFLOW_LAUNCH_MODAL)),
    recoverPasswordLogin: () => dispatch(action.recoverPasswordLogin()),
    dismissRecoveryError: () =>
      dispatch(action.dispatchAction(Constants.DISMISS_REOVERY_ERROR))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
