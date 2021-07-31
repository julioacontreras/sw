const error = (error: any) => {
  console.error('%cERROR', 'padding: 3px 10px 3px 10px; background-color:red; color:white; border-radius: 10px;', error)
}

const info = (info: any) => {
  console.info('%cINFO', 'padding: 3px 10px 3px 10px; background-color:#1987EE; color:white; border-radius: 10px;', info)
}

export default {
  error,
  info
}
