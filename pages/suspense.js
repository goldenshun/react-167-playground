import { Suspense } from 'react';
import { unstable_createResource } from 'react-cache'; // eslint-disable-line camelcase
import withClientOnlyNext from '../lib/withClientOnlyNext';
import { fetch } from '../lib/DeploymentSessionData';

const SessionDataResource = unstable_createResource(fetch);

const ShowSessionData = () => {
  const session = SessionDataResource.read();
  return (
    <div>{`Session: ${session.id}`}</div>
  );
};

const SuspenseExample = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ShowSessionData />
  </Suspense>
);

export default withClientOnlyNext(SuspenseExample);
