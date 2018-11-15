import { useContext, Suspense } from 'react';
import withClientOnlyNext from '../lib/withClientOnlyNext';
import DeploymentSessionProvider, { DeploymentSessionContext } from '../components/DeploymentSessionProvider';

const ShowSessionData = () => {
  const { session } = useContext(DeploymentSessionContext);
  return (
    <div>{`Session: ${session.id}`}</div>
  );
};

const SuspenseExample = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DeploymentSessionProvider>
      <ShowSessionData />
    </DeploymentSessionProvider>
  </Suspense>
);

export default withClientOnlyNext(SuspenseExample);
