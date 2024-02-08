import { styled } from '@linaria/react'
import { useMemo } from 'react'

import downloadIcon from '@assets/download-file-icon.svg'
import { convertFileSize, getImageUrl } from '@helpers/fileHelper'

interface Props {
  fileName: string
  fileSize: number
}

const StyledFileBody = styled.div`
  background-color: #fff;
  background-color: #e5e5e5;
  width: 164px;
  min-height: 284px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const FileIcon = styled.div`
  background-color: #e5e5e5;
  background-color: #fff;
  width: 164px;
  height: 142px;
  padding: 20px 31px;
  img {
    width: 100%;
    height: 100%;
  }
`

const FileDescription = styled.div`
  flex: 1 1 auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FileName = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  flex: 1 1 auto;
  overflow-wrap: break-word;
`

const FileSize = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding-right: 32px;
`

const DownloadBtn = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  img {
    width: 100%;
    height: 100%;
  }
`

function ShelfFile({ fileName, fileSize }: Props) {
  const imagePath = useMemo(() => {
    return getImageUrl(fileName)
  }, [fileName])

  const convertedFileSize = useMemo(() => {
    return convertFileSize(fileSize)
  }, [fileSize])

  return (
    <StyledFileBody>
      <FileIcon>
        <img src={imagePath} alt='' />
      </FileIcon>
      <FileDescription>
        <FileName>{fileName}</FileName>
        <FileSize>{convertedFileSize}</FileSize>
        <DownloadBtn>
          <img src={downloadIcon} alt='download file' />
        </DownloadBtn>
      </FileDescription>
    </StyledFileBody>
  )
}

export default ShelfFile
