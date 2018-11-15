const fetchDeploymentSession = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 'abcd' });
  }, 500);
});

export default fetchDeploymentSession;
