import React, { Component, PropTypes } from 'react'

import { Container, Col, Row } from 'stemn-shared/misc/Layout'
import Button from 'stemn-shared/misc/Buttons/Button/Button'
import InfoPanel from 'stemn-shared/misc/Panels/InfoPanel'
import UserCloudProviderSettings from 'stemn-shared/misc/UserSettings/UserCloudProviderSettings'
import PanelDescription from 'modules/PanelDescription'

import classes from './OnboardingSync.scss'
import classNames from 'classnames'

export default class OnboardingAbout extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    authenticate: PropTypes.func.isRequired,
    unlink: PropTypes.func.isRequired,
  }
  render() {
    const { user, authenticate, unlink } = this.props
    return (
      <PanelDescription
        title="Connect Sync"
        description="Connect your Dropbox or Google Drive. This allows your STEMN projects to Sync directly to your computer."
      >
        <InfoPanel>
          <UserCloudProviderSettings
            user={ user }
            authenticate={ authenticate }
            unlink={ unlink }
          />
        </InfoPanel>
        <br />
        <div className="layout-row layout-align-end">
          <Button className="lg primary" name="onboardingDownloadRoute">Next: Download</Button>
        </div>
      </PanelDescription>
    )
  }
}
