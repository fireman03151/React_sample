import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import ns from './ns.json';
import { isJSEnabledSelector } from './redux';

const mainId = 'fcc-main-frame';

const mapStateToProps = state => ({
  isJSEnabled: isJSEnabledSelector(state)
});
const mapDispatchToProps = null;
const propTypes = {
  isJSEnabled: PropTypes.bool
};

export class Preview extends PureComponent {
  render() {
    const {
      isJSEnabled
    } = this.props;
    return (
      <div className={ `${ns}-preview` }>
        {
          !isJSEnabled && (
            <span className={ `${ns}-preview-js-warning` }>
              JavaScript is disabled. Execute code to enable
            </span>
          )
        }
        <iframe
          className={ `${ns}-preview-frame` }
          id={ mainId }
        />
      </div>
    );
  }
}

Preview.propTypes = propTypes;
Preview.displayName = 'Preview';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
