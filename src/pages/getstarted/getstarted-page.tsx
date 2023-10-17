import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Logger } from '../../classes/logger/logger'
import styles from './getstarted-page.module.scss'

export class GetStartedPage extends React.Component {
  private docGetStarted: string

  componentDidMount() {
    if (this.docGetStarted === undefined) {
      const mdUrl = './docs/getstarted.md'
      fetch(mdUrl)
        .then((res) => {
          res.text()
            .then((text) => {
              this.docGetStarted = text
              this.forceUpdate()
            })
            .catch(error => Logger.info(`GetStarted page error, couldn't load '${mdUrl}':`, Logger.strFromData(error))
            )
        })
        .catch(error => Logger.info(`GetStarted page error, couldn't load '${mdUrl}':`, Logger.strFromData(error))
        )
    }
  }

  render() {
    return (
      <div className={styles['getstarted-page']}>
        <div className={styles['content']}>
          <ReactMarkdown>
            {this.docGetStarted}
          </ReactMarkdown>
        </div>
      </div>
    )
  }
}
