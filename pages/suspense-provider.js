import { useContext, Suspense } from 'react';
import withClientOnlyNext from '../lib/withClientOnlyNext';
import DeploymentSessionProvider, { DeploymentSessionContext } from '../components/DeploymentSessionProvider';

const SessionInfo = () => {
  const { session } = useContext(DeploymentSessionContext);
  return (
    <div>{`Session: ${session.id}`}</div>
  );
};

const CreateSessionButton = () => {
  const { createSession } = useContext(DeploymentSessionContext);
  return <button type="button" onClick={() => createSession()}>Create Session</button>;
};

const SuspenseExample = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DeploymentSessionProvider>
      <SessionInfo />
      <CreateSessionButton />
    </DeploymentSessionProvider>
  </Suspense>
);

export default withClientOnlyNext(SuspenseExample);
