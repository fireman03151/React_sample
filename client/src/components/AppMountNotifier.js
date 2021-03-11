import { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { appMount } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ appMount }, dispatch);

class AppMountNotifier extends Component {
  componentDidMount() {
    return this.props.appMount();
  }
  render() {
    return this.props.render();
  }
}

AppMountNotifier.displayName = 'AppMountNotifier';
AppMountNotifier.propTypes = {
  appMount: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMountNotifier);
