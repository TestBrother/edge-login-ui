function isASCII (str) {
  return /^[\x00-\x7F]*$/.test(str)
}

export { isASCII }
