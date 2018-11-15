/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { unstable_createResource } from 'react-cache'; // eslint-disable-line camelcase
import { fetch } from '../lib/DeploymentSessionData';

export const DeploymentSessionContext = React.createContext(null);

const SessionDataResource = unstable_createResource(fetch);

class DeploymentSessionProvider extends React.Component {
  render() {
    const { children } = this.props;
    const session = SessionDataResource.read();
    return (
      <DeploymentSessionContext.Provider value={{ session }}>
        {children}
      </DeploymentSessionContext.Provider>
    );
  }
}

export default DeploymentSessionProvider;
