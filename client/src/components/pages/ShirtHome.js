import React from 'react'

import useHidePageInformation from '../../hooks/useHidePageInformation';
import ProductDisplay from '../products/ProductDisplay';

export default function ShirtHome() {

  useHidePageInformation();

  return (
    <div>
      <ProductDisplay />
    </div>
  )
}
