import { useContext, Suspense } from 'react';
import withClientOnlyNext from '../lib/withClientOnlyNext';
import DeploymentSessionProvider, { DeploymentSessionContext } from '../components/DeploymentSessionProvider';

/*
  Example of a component consuming the session.
*/
const SessionInfo = () => {
  const { session } = useContext(DeploymentSessionContext);
  return (
    <div>{`Session: ${session.id}`}</div>
  );
};

/*
  Example of a component creating a new session.
*/
const CreateSessionButton = () => {
  const { createSession } = useContext(DeploymentSessionContext);
  return <button type="button" onClick={() => createSession()}>Create Session</button>;
};

/*
  Example of a provider wrapped in a Suspense component so it can suspend rendering.
*/
const SuspenseExample = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DeploymentSessionProvider>
      <SessionInfo />
      <CreateSessionButton />
    </DeploymentSessionProvider>
  </Suspense>
);

/*
  Suspend doesn't work on the server yet so...forcing client only for now.
*/
export default withClientOnlyNext(SuspenseExample);
