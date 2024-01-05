import React, { useCallback, useState } from 'react'

import ShowFilterBtn from '@components/ShowFilterBtn'
import Filter from '@components/Filter'

function FilterWithShowBtn() {
  const [isShow, setIsShow] = useState(false)

  const showFilter = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <>
      <ShowFilterBtn onClick={showFilter} />
      <Filter isShow={isShow} setIsShow={setIsShow} />
    </>
  )
}

export default FilterWithShowBtn
