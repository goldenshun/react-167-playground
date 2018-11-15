/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { unstable_createResource } from 'react-cache'; // eslint-disable-line camelcase
import { create, fetch } from '../lib/DeploymentSessionData';

export const DeploymentSessionContext = React.createContext(null);

const SessionDataResource = unstable_createResource(fetch);

const DeploymentSessionProvider = (props) => {
  const { children } = props;
  const [session, setSession] = useState(SessionDataResource.read());

  const createSession = () => {
    create().then((result) => {
      setSession(result);
    });
  };

  return (
    <DeploymentSessionContext.Provider value={{ session, createSession }}>
      {children}
    </DeploymentSessionContext.Provider>
  );
};

export default DeploymentSessionProvider;
