import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTrash } from '@fortawesome/free-solid-svg-icons'

import MasterView from './components/MasterView';
import DetailsView from './components/DetailsView';

// add awesome icons
library.add(faTh);
library.add(faTrash);

const SwitchView = ({viewType}) => {
  switch(viewType) {
    case 'details':
      return <DetailsView />;
    case 'master':
      return <MasterView />;
    default:
  }
}

class App extends PureComponent {
  render() {
    const {viewType, images} = this.props;
    return (
      <SwitchView viewType={viewType} images={images} />
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    viewType: state.viewType,
  }
};

const mapDispatchToProps = {  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);