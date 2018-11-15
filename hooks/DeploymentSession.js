import { useEffect, useState } from 'react';
import { create, fetch } from '../lib/DeploymentSessionData';

const DeploymentSession = () => {
  const [deploymentSession, setDeploymentSession] = useState(null);

  const createDeploymentSession = () => {
    create().then((result) => {
      setDeploymentSession(result);
    });
  };

  useEffect(() => {
    fetch()
      .then((result) => {
        setDeploymentSession(result);
      });
  }, []);

  return { deploymentSession, createDeploymentSession };
};

export default DeploymentSession;
