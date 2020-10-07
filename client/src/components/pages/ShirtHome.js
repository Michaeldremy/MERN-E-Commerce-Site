import React from 'react'

import useHidePageInformation from '../../hooks/useHidePageInformation';

export default function ShirtHome() {

  useHidePageInformation();

  return (
    <div>
      <h1>Welcome to the shirt screen</h1>
    </div>
  )
}
