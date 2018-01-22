import React, { Component } from 'react'
import { BackAndroid, Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { fadeWhiteOverlay } from '../Landing.action'
import style from '../Style'

class Home extends Component {
  componentDidMount = () => {
    const self = this
    BackAndroid.addEventListener('hardwareBackPress', function () {
      return self.handleBack()
    })
  }
  handleBack = () => {
    if (this.props.loader.loading === true) {
      return true
    }
    const self = this
    self.props.dispatch(fadeWhiteOverlay())
    Actions.landing()
    return true
  }

  render () {
    return (
      <View style={style.container} >
        <View style={style.form}>
          <Text style={{fontSize: 40}}>Home Page</Text>
          <Button style={{flex: 1}} onPress={this.handleBack} title='Log Out'>Log Out</Button>
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  user: state.user,
  loader: state.loader
}))(Home)
