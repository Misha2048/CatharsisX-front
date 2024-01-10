import { styled } from '@linaria/react'
import { useCallback, useMemo, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

import addFileIcon from '@assets/add-file-icon.svg'
import UploadFileText from './UploadFileText'
import DropzoneBtn from './DropzoneBtn'
import { useDispatch } from 'react-redux'
import { setHint } from '@redux/slices/hintSlice'
import { getFileName } from '@helpers/fileHelper'

interface Props {
  setFile: (file: File) => void
}

const DropzoneContainer = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E0E0E0FF' stroke-width='4' stroke-dasharray='11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-color: #333;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    gap: 32px;
  }
`

const AddFileIcon = styled.img`
  width: 50px;
  height: 50px;
`

const acceptStyle = {
  backgroundColor: '#4f4f4f',
}

const rejectStyle = {
  backgroundColor: '#eb5757',
}

function UploadFileDropzone({ setFile }: Props) {
  const [message, setMessage] = useState('You can drag and drop a file to upload')
  const dispatch = useDispatch()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      return // because we accept only 1 file at a time. Dragging 2 or more files will cause the acceptedFiles array to be empty
    }
    setFile(acceptedFiles[0])
    setMessage(getFileName(acceptedFiles[0]))
  }, [])

  const handleDropRejection = useCallback((fileRejections: Array<FileRejection>) => {
    if (fileRejections.length > 1) {
      dispatch(setHint({ message: 'Only one file at a time can be uploaded' }))
    }
  }, [])

  const { getRootProps, getInputProps, open, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    onDropRejected: handleDropRejection,
  })

  const style = useMemo(
    () => ({
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject],
  )

  return (
    <DropzoneContainer {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <AddFileIcon src={addFileIcon} alt='' />
      <UploadFileText>{message}</UploadFileText>
      <DropzoneBtn type='button' onClick={open}>
        Browse File
      </DropzoneBtn>
    </DropzoneContainer>
  )
}

export default UploadFileDropzone
