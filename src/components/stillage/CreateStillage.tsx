import { useCallback, useState } from 'react'

import CreateStillageModal from '@components/stillage/CreateStillageModal'
import AddBtn from '@components/AddBtn'

function CreateStillage() {
  const [isShow, setIsShow] = useState(false)

  const showCreateStillageModal = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <>
      <AddBtn alignCenter onClick={showCreateStillageModal}>
        New Stillage
      </AddBtn>
      <CreateStillageModal isShow={isShow} setIsShow={setIsShow} />
    </>
  )
}

export default CreateStillage
