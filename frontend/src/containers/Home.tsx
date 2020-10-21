import React, { useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { useRouter } from '../utils/utils';

// Usage
const Home = () => {
  // Get the router object
//   const router = useRouter();
//   console.log(router.pathname)

  // Navigate with with router.push()
  return (
    // <button onClick={(e) => router.push('/menus')}>About</button>
    <h1>Home</h1>
  );
}

export default Home;

