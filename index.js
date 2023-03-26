import random from 'random'
import simpleGit from 'simple-git'
import jsonfile from 'jsonfile'
import moment from 'moment'

const filePath = './data.json'

const makeCommit = (contador) => {
  if(contador === 0) return simpleGit().push()
  const weeks = random.int(0, 45)
  const days = random.int(0, 50)
  const date = moment().subtract(1, 'y').add(1, 'd').add(weeks, 'w').add(days, 'd').format()
  const data = { date }

  console.log(`contador: ${contador}`)
  
  jsonfile.writeFile(filePath, data, () => {
    simpleGit().add(filePath).commit(date, { '--date': date }, makeCommit.bind(this, --contador))
  })
}

export {
  makeCommit
}