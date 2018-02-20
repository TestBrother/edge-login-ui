import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon'
// import t from 'lib/web/LocaleStrings'
import styles from './ReviewDetails.webStyle.scss'

export default ({
  view,
  details,
  toggleInfo,
  handleOpenAccountCreatedModal
}) => {
  const renderInfo = () => {
    if (view) {
      return (
        <p className={styles.shown}>
          <span className={styles.bold}>Username:</span> {details.username}{' '}
          <br />
          <span className={styles.bold}>Password:</span> {details.password}{' '}
          <br />
          <span className={styles.bold}>PIN:</span> {details.pin}
        </p>
      )
    }
    if (!view) {
      return <p className={styles.hidden}>Show my account info</p>
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Write down your account info</p>
      <p className={styles.p1}>
        Your username and password are known only to you and cannot be recovered
        if forgotten.
      </p>
      <p className={styles.p2}>
        You WILL lose access to funds if your password is lost.
      </p>
      <p className={styles.caution}>Write down and store securely!</p>
      <div className={styles.infoBox} onClick={toggleInfo}>
        {view ? <FontIcon className={styles.close} value="clear" /> : null}
        <div className={styles.infoText}>{renderInfo()}</div>
      </div>
      <button
        className={styles.primary}
        onClick={handleOpenAccountCreatedModal}
      >
        Finish
      </button>
    </div>
  )
}
