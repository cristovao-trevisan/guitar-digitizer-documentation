const d1Mac = require('./d1-Mac')
const d1YIN = require('./d1-YIN')
const EYIN = require('./E-YIN')
const EMac = require('./E-Mac')
const AmYIN = require('./Am-YIN')
const AmMac = require('./Am-Mac')
const pluckMac = require('./pluck-Mac')
const pluckYIN = require('./pluck-YIN')
const d2Mac = require('./d2-Mac')
const d2YIN = require('./d2-YIN')

const calculateMean = arr => arr.reduce((a, b) => a + b) / arr.length
const calculateStandardDeviation = arr => {
  const mean = calculateMean(arr)
  return Math.sqrt(arr.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / arr.length)
}
const calculateAccuracy = arr => {
  const mean = calculateMean(arr)
  return arr.reduce((acc, x) => {
    if (Math.abs(x - mean) < 5) return acc + 1
    return acc
  }, 0) / arr.length
}
const accumulateCloseNeighbors = arr => arr.reduce((acc, { id, note }) => {
  const lastItem = acc[acc.length - 1]
  if (acc.length === 0 ||
    lastItem.id !== id ||
    Math.round(note) !== lastItem.note) {
    return acc.concat({ id, note: Math.round(note) })
  }
  return acc
}, [])
const calculateNeighborhoodError = arr => arr.reduce((acc, { note, id }, i) => {
  if (i > 0 && Math.abs(Math.round(note) - Math.round(arr[i - 1].note)) > 1) {
    return acc + 1
  }
  return acc
}, 0) / arr.length

const d1MacMap = d1Mac.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const d1MacArray = Object.keys(d1MacMap).sort().map(key => d1MacMap[key])
const d1MacMean = d1MacArray.map(calculateMean)
const d1MacDev = d1MacArray.map(calculateStandardDeviation)
const d1MacAccuracy = d1MacArray.map(calculateAccuracy)

const d1YINMap = d1YIN.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const d1YINArray = Object.keys(d1YINMap).sort().map(key => d1YINMap[key])
const d1YINMean = d1YINArray.map(calculateMean)
const d1YINDev = d1YINArray.map(calculateStandardDeviation)
const d1YINAccuracy = d1YINArray.map(calculateAccuracy)

console.log('d1YINMean', d1YINMean)
console.log('d1YINAccuracy', d1YINAccuracy)
console.log('d1YINDev', d1YINDev)
console.log('d1MacMean', d1MacMean)
console.log('d1MacAccuracy', d1MacAccuracy)
console.log('d1MacDev', d1MacDev)

const chordEYINMap = EYIN.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const chordEYINArray = Object.keys(chordEYINMap).sort().map(key => chordEYINMap[key])
const chordEYINMean = chordEYINArray.map(calculateMean)
const chordEYINDev = chordEYINArray.map(calculateStandardDeviation)

const chordEYINExpected = [45, 52, 62, 64, 69].map(x => x + 7).reverse()
const chordEYINAccuracy = chordEYINMean.map((x, i) => Math.abs(x - chordEYINExpected[i]))

console.log('chordEYINMean', chordEYINMean)
console.log('chordEYINDev', chordEYINDev)
console.log('chordEYINAccuracy', chordEYINAccuracy)

const chordEMacMap = EMac.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const chordEMacArray = Object.keys(chordEMacMap).sort().map(key => chordEMacMap[key])
const chordEMacMean = chordEMacArray.map(calculateMean)
const chordEMacDev = chordEMacArray.map(calculateStandardDeviation)

const chordEMacExpected = [45, 52, 62, 64, 69].map(x => x + 7).reverse()
const chordEMacAccuracy = chordEMacMean.map((x, i) => Math.abs(x - chordEMacExpected[i]))

console.log('chordEMacMean', chordEMacMean)
console.log('chordEMacDev', chordEMacDev)
console.log('chordEMacAccuracy', chordEMacAccuracy)

const chordAmYINMap = AmYIN.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const chordAmYINArray = Object.keys(chordAmYINMap).sort().map(key => chordAmYINMap[key])
const chordAmYINMean = chordAmYINArray.map(calculateMean).concat(0)
const chordAmYINDev = chordAmYINArray.map(calculateStandardDeviation).concat(0)

const chordAmYINExpected = [45, 52, 61, 64, 69].reverse()
const chordAmYINAccuracy = chordAmYINMean.map((x, i) => Math.abs(x - chordAmYINExpected[i]))

console.log('chordAmYINMean', chordAmYINMean)
console.log('chordAmYINDev', chordAmYINDev)
console.log('chordAmYINAccuracy', chordAmYINAccuracy)

const chordAmMacMap = AmMac.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat(note)
}), {})

const chordAmMacArray = Object.keys(chordAmMacMap).sort().map(key => chordAmMacMap[key])
const chordAmMacMean = chordAmMacArray.map(calculateMean)
const chordAmMacDev = chordAmMacArray.map(calculateStandardDeviation)

const chordAmMacExpected = [45, 52, 61, 64, 69].map(x => x + 7).reverse()
const chordAmMacAccuracy = chordAmMacMean.map((x, i) => Math.abs(x - chordAmMacExpected[i]))

console.log('chordAmMacMean', chordAmMacMean)
console.log('chordAmMacDev', chordAmMacDev)
console.log('chordAmMacAccuracy', chordAmMacAccuracy)

const d2MacMap = d2Mac.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat({ id, note })
}), {})
const d2MacArray = Object.keys(d2MacMap).sort().map(key => d2MacMap[key])
const d2MacParsed = d2MacArray.map(accumulateCloseNeighbors)
const d2MacError = d2MacParsed
  .map(calculateNeighborhoodError)
console.log('d2MacError', d2MacError)

const d2YINMap = d2YIN.reduce((acc, { id, note }) => ({
  ...acc,
  [id]: (acc[id] || []).concat({ id, note })
}), {})
const d2YINArray = Object.keys(d2YINMap).sort().map(key => d2YINMap[key])
const d2YINParsed = d2YINArray.map(accumulateCloseNeighbors)
const d2YINError = d2YINParsed
  .map(calculateNeighborhoodError)
console.log('d2YINError', d2YINError)

console.log('pluckMacHits', pluckMac.length)
console.log('pluckYINHits', pluckYIN.length)