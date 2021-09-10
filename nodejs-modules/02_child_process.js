const childProcess = require('child_process');

function execute(command) {
  const promise = new Promise((resolve, reject) => {
    childProcess.exec(command, (error, result)=>{
      if (error === null) {
        resolve(result)
      }
      else{
        reject(error)
      }
    })
  })
  return promise
}

async function getGitUserData() {
  // DESAFÍO PARA LA CLASE: Escribir función execute que utilice childProcess.exec
  const gitConfigData = await execute('git config --list')

  return gitConfigData
}

// function getGitUserData() {
//   childProcess.exec('git config --list', (error, result) => {
//     console.log('results of execution of command\n\n')
//     console.log(result)
//   })
// }
//getGitUserData()

module.exports = {
  getGitUserData
}
