const { getGitUserData } = require('./02_child_process')

describe('spwan command execution',  () => {

  it('get data from git config command', async () => {
    const result = await getGitUserData()
    // console.log(result)
    expect(result).toMatch('DaniloCatalan')
    //expect(result).toMatch('user.email')
  })
  
})