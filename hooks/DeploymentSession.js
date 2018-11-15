import { useEffect, useState } from 'react';
import fetchDeploymentSession from '../lib/fetchDeploymentSession';

const DeploymentSession = () => {
  const [deploymentSession, setDeploymentSession] = useState(null);

  useEffect(() => {
    fetchDeploymentSession()
      .then((result) => {
        setDeploymentSession(result);
      });
  }, []);

  return { deploymentSession, setDeploymentSession };
};

export default DeploymentSession;
