import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import { LOGO_DOT } from '../../../native/assets/'
import { Button } from '../common'

/* type Props = {
  style: any,
  cancelFunc(): void
} */

class ChangePasswordModalComponent extends Component {
  render () {
    const Style = this.props.style
    return (
      <View style={Style.container}>
        <View style={Style.backgroundContainer}>
          <View style={Style.backgroundBox} />
        </View>
        <View style={Style.foreground}>
          <View style={Style.logoContainer}>
            <Image source={LOGO_DOT} />
          </View>
          <View style={Style.headlineContainer}>
            <Text style={Style.headlineText}>Password Changed</Text>
          </View>
          <View style={Style.textContainer}>
            <Text style={Style.copyText}>
              Password Successfully Changed. DO NOT FORGET YOUR PASSWORD OR
              RECOVERY ANSWERS! THEY CANNOT BE RECOVERED!
            </Text>
          </View>
          <View style={Style.buttonsContainer}>
            <Button
              onPress={this.onSkipPress.bind(this)}
              downStyle={Style.skipButton.downStyle}
              downTextStyle={Style.skipButton.downTextStyle}
              upStyle={Style.skipButton.upStyle}
              upTextStyle={Style.skipButton.upTextStyle}
              label={'OK'}
            />
          </View>
        </View>
      </View>
    )
  }
  onSkipPress () {
    this.props.cancelFunc()
  }
}

export { ChangePasswordModalComponent }
