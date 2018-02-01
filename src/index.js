'use strict'

import React, { PureComponent } from 'react'
import t from 'prop-types'

class LazyImg extends PureComponent {
  state = { loaded: false }
  img = {}

  this.handleLoad = () => {
    this.setState({ loaded: true })
    this.props.onImageLoad()
  }

  componentDidMount () {
    if (this.img.complete && !this.state.loaded) {
      this.handleLoad()
    }
  }

  render () {
    return (
      <img src={this.props.src}
        alt={this.props.alt}
        onLoad={this.handleLoad}
        className={
          `[ lazy-image ] ${this.state.loaded ? '-loaded' : ''}
          ${this.props.className}`
        }
        ref={(img) => {this.img = img}}
      />
    )
  }
}

LazyImg.defaultProps = {
  onImageLoad: () => null,
  className: '',
  alt: ''
};

LazyImg.propTypes = {
  src: t.string.isRequired,
  className: t.string,
  onImageLoad: t.func,
  alt: t.string
};

export default LazyImg
