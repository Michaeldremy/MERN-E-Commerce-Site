import React, {useContext} from "react";

import UserContext from '../../context/UserContext';
import useHidePageInformation from '../../hooks/useHidePageInformation';

export default function Home() {

  const { userData } = useContext(UserContext);

  useHidePageInformation(); // Custom hook

  return (
    <div className="page">
      <h1>Welcome</h1>
    </div>
  );
}
