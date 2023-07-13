const Router = ({ children }) => {
  let { pathname } = window.location;
  console.log({ pathname });
  return <>{children}</>;
};

export default Router;
