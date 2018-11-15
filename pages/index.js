import useDeploymentSession from '../hooks/DeploymentSession';

const Index = () => {
  const { deploymentSession, setDeploymentSession } = useDeploymentSession();
  if (!deploymentSession) return null;

  return (
    <div>
      <div>{`Session ${deploymentSession.id}`}</div>
      <div>
        <button type="button" onClick={() => setDeploymentSession({ id: 'changed_id' })}>Set Deployment Session</button>
      </div>
    </div>
  );
};

export default Index;
