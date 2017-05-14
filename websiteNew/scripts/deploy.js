const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs-extra'))
const path = require('path')
const SSH = require('ssh-promise')
const exec = require('child-process-promise').exec

/*********************************************************
This script will deploy the stemn website. It should be
run from the root website folder using `npm run deploy`.

What it does:
1. Copies the dist to the 'stemn-website-live' folder.
   This repo must be located at '../../stemn-website-live'
2. Pushes this repo
3. SSHs into the server, pulls the repo

*********************************************************/

const joinCommands = commands => commands.join(' && ')

const config = {
  repo: {
    name: 'stemn-website-live',
  },
  ssh: {
    host: '35.167.249.144',
    username: 'ubuntu',
    key: fs.readFileSync(path.join('../../stemn-api/aws/keys', 'stemn.prv')),
  },
  commitMessage: 'automated deployment',
}

const ssh = new SSH({
  host: config.ssh.host,
  username: config.ssh.username,
  privateKey: config.ssh.key,
})

const pullDist = () => ssh.exec(`
  cd ~/repositories/${config.repo.name};
  git pull;
`)

const pushDist = () => {
  const commands1 = [
    `cd ../../${config.repo.name}`,
    'git pull',
    'git add -u',
    'git add .',
    `git commit -m "${config.commitMessage}"`,
  ]
  // Commit will throw an error if we commit no files.
  // The push is therfore broken into another series of commands
  // where it can be run on 'then' or 'catch'.
  const commands2 = [
    `cd ../../${config.repo.name}`,
    'git push',
  ]
  return exec(joinCommands(commands1))
    .then(() => exec(joinCommands(commands2)))
    .catch(() => exec(joinCommands(commands2)))
}

const copyDist = () => fs.copyAsync('./build/client', `../../${config.repo.name}`)

const log = (result) => {
  console.log('stdout: ', result.stdout)
  console.log('stderr: ', result.stderr)
  return result
}

// Go time
copyDist()
.then(pushDist)
.then(pullDist)
.catch(console.error)