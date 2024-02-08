export function getFileNameAndSize(file: File) {
  return `${file.name} ${convertFileSize(file.size)}`
}

export function convertFileSize(fileSize: number) {
  if (fileSize < 1_000_000) {
    return `${Math.round(+fileSize / 1024).toFixed(2)}kb`
  }

  return `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)}MB`
}

export function getFileExtensionUppercase(fileName: string) {
  return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toUpperCase()
}

export function getFileExtensionLowercase(fileName: string) {
  return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase()
}

export function getImageUrl(fileName: string) {
  const imageExtension = getFileExtensionLowercase(fileName)
  return new URL(`./src/assets/${imageExtension}-icon.png`, import.meta.env.VITE_MY_BASE_URL).href
}
