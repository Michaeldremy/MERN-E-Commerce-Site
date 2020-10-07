import React, {useContext} from "react";
import {Link} from 'react-router-dom';

import UserContext from '../../context/UserContext';
import useHidePageInformation from '../../hooks/useHidePageInformation';

export default function Home() {

  const { userData } = useContext(UserContext);

  useHidePageInformation(); // Custom hook

  return (
    <div className="page">
      <h1>Welcome</h1>
      <Link to="/test"><h1>Go to Test Route</h1></Link>
    </div>
  );
}
