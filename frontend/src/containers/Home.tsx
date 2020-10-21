import React, { useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { useRouter } from '../utils/utils';
import Carousel from '../components/Carousel';

const Home = () => {
 
  return (
    <>
    <h1>Home</h1>
    <Carousel />
    </>
  );
}

export default Home;

