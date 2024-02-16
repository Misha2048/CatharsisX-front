import { useCallback, useState } from 'react'

import AddBtn from '@components/AddBtn'
import CreateShelfModal from '@components/stillage/CreateShelfModal'

function CreateShelf() {
  const [isShow, setIsShow] = useState(false)

  const showCreateStillageModal = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <>
      <AddBtn alignCenter onClick={showCreateStillageModal}>
        New Shelf
      </AddBtn>
      <CreateShelfModal isShow={isShow} setIsShow={setIsShow} />
    </>
  )
}

export default CreateShelf
