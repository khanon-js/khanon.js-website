import React from 'react'
import { ExternalLink } from 'react-feather'

import { ElementStyle } from '../../classes/element-style'
import { Pages } from '../../models/pages'
import styles from './header.module.scss'
import { HeaderProps } from './header.props'

export class Header extends React.Component<HeaderProps> {
  handleHome() {
    this.props.cbSetPage(Pages.MAIN)
  }

  handleGetStarted() {
    this.props.cbSetPage(Pages.GET_STARTED)
  }

  handleTutorials() {
    this.props.cbSetPage(Pages.TUTORIALS)
  }

  handleAPIDoc() {
    console.log('aki API DOC')
  }

  render() {
    return (
      <div className={styles['header-container']}>
        <div
          className={styles['header-home']}
          onClick={this.handleHome.bind(this)}
        >
          <div className={ElementStyle.getClass(styles, ['header-home-k', 'font-luckiestguy-regular'])}>
            K
          </div>
        </div>
        <div className={styles['header-buttons-bar']}>
          <div
            className={styles['header-button']}
            onClick={this.handleGetStarted.bind(this)}
          >
            <div className={ElementStyle.getClass(styles, ['header-button-text', 'font-roadgeek-regular'])}>
              Docs
            </div>
          </div>
          <div
            className={styles['header-button']}
            onClick={this.handleTutorials.bind(this)}
          >
            <div className={ElementStyle.getClass(styles, ['header-button-text', 'font-roadgeek-regular'])}>
              Tutorials
            </div>
          </div>
          <div
            className={styles['header-button']}
            onClick={this.handleAPIDoc.bind(this)}
          >
            <div
              className={ElementStyle.getClass(styles, ['header-button-text', 'font-roadgeek-regular'])}
            >
              API Reference
            </div>
            <div className={styles['header-button-icon-containar']}>
              <ExternalLink
                className={styles['header-button-icon']}
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
