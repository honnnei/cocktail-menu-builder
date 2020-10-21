import React, { useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

export function useRouter() {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
  
    // Return our custom router object
    // Memoize so that a new object is only returned if something changes
    return useMemo(() => {
      return {
        push: history.push,
        replace: history.replace,
        pathname: location.pathname,
        match,
        location,
        history
      };
    }, [params, match, location, history]);
  }