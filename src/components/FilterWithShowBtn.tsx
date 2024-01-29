import { useCallback, useState } from 'react'

import ShowFilterBtn from '@components/ShowFilterBtn'
import Filter from '@components/Filter'
import { FilterParams } from '@helpers/filterTypes'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalParams?: { [key: string]: any }
  filterData: (requestParams: FilterParams) => Promise<void>
}

function FilterWithShowBtn({ additionalParams, filterData }: Props) {
  const [isShow, setIsShow] = useState(false)

  const showFilter = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <>
      <ShowFilterBtn onClick={showFilter} />
      <Filter
        isShow={isShow}
        setIsShow={setIsShow}
        additionalParams={additionalParams}
        filterData={filterData}
      />
    </>
  )
}

export default FilterWithShowBtn
