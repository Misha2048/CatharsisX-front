export function getFileName(file: File) {
  return `${file.name} ${convertFileSize(file.size)}`
}

export function convertFileSize(fileSize: number) {
  if (fileSize < 1_000_000) {
    return `${Math.round(+fileSize / 1024).toFixed(2)}kb`
  }

  return `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)}MB`
}
