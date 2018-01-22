import React from 'react'
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'

const BackgroundImage = ({
  style,
  src,
  content,
  enableTouch = true,
  callback = null
}) => {
  const onPress = () => {
    if (callback) {
      return () => {
        callback()
        Keyboard.dismiss()
      }
    }
    return Keyboard.dismiss()
  }
  if (enableTouch) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <ImageBackground source={src} style={style}>
          {content}
        </ImageBackground>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <ImageBackground source={src} style={style}>
      {content}
    </ImageBackground>
  )
}

export { BackgroundImage }
