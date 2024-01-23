import { useCallback, useState } from 'react'

import ShowFilterBtn from '@components/ShowFilterBtn'
import Filter from '@components/Filter'
import { RequestParams } from '@helpers/filterTypes'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalParams?: { [key: string]: any }
  fetchData: (requestParams: RequestParams) => Promise<void>
}

function FilterWithShowBtn({ additionalParams, fetchData }: Props) {
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
        fetchData={fetchData}
      />
    </>
  )
}

export default FilterWithShowBtn
