function divideArray(array: any[], length: number) {
  if (length === 0) return []
  const newArray = [...array]
  const divideRes = Math.floor(newArray.length / length)
  let results = []

  for (let i = 0; i < length; i++) {
    results.push(newArray.splice(0, divideRes))
  }

  for (let i = 0; i < newArray.length; i++) {
    results[i].push(newArray[i])
  }

  results = results.filter((itm) => itm.length)

  return results
}

export { divideArray }
