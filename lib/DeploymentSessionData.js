export const fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 'abcd' });
  }, 500);
});

export const create = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 'efgh' });
  }, 500);
});
