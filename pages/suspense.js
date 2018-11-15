import withClientOnlyNext from '../lib/withClientOnlyNext';

const Suspense = () => {
  console.log('Suspense');

  return (
    <div>
      Oh Yeah!
    </div>
  );
};

export default withClientOnlyNext(Suspense);
