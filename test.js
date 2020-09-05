const path = require('path')
const fs = require('fs')
const diff = require('git-diff')
const prettyHrtime = require('pretty-hrtime')

function printError(msg) {
  console.error(msg)
  process.exit(1)
}

function checkPath(targetPath) {
  if (!fs.existsSync(targetPath))
    throw `Path "${targetPath}" tidak ditemukan.\nMohon periksa kembali path yang anda masukkan.`
  else if (!fs.statSync(targetPath).isFile())
    throw `Path "${targetPath}" adalah sebuah folder. Bukan file.`
}

function readTextFile(targetPath) {
  return fs.readFileSync(targetPath, 'utf8')
}

async function main() {
  if (!process.argv[2] || !process.argv[3] || !process.argv[4])
    throw 'Argumen tidak lengkap.\nMohon periksa kembali perintah yang anda jalankan.\nPastikan anda menggunakan format `node test.js <js-file> <input-file> <output-file>`.'

  const fileName = path.resolve(process.argv[2])
  const inputFileName = path.resolve(process.argv[3])
  const outputFileName = path.resolve(process.argv[4])

  checkPath(fileName)
  checkPath(inputFileName)
  checkPath(outputFileName)

  const startTime = process.hrtime()
  let output = require(fileName)(readTextFile(inputFileName))
  output = await (output instanceof Promise ? output : Promise.resolve(output))
  const endTime = process.hrtime(startTime)

  if (typeof output !== 'string') output = output.toString()

  const expected = readTextFile(outputFileName)

  console.log('Output:')
  console.log(output)
  console.log('\nDifference:')
  console.log(
    diff(expected, output.toString(), {
      flags: '--ignore-space-at-eol',
      color: true,
      noHeaders: true,
    }) || 'Tidak ada perbedaan. Hasilnya sesuai.'
  )
  console.log('\nSummary:')
  console.log('Execution time:', prettyHrtime(endTime), '(ms)')
  console.log('Output length:', output.length)
  console.log('Expected length:', expected.length)
}

main()
  .then(() => console.log('\n\nProgram selesai.'))
  .catch(printError)
