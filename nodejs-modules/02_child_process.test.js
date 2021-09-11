const { getGitUserData } = require('./02_child_process')

describe('spwan command execution',  () => {

  it('get data from git config command', async () => {
    const result = await getGitUserData()
    
    expect(result).toMatch('DaniloCatalan')
    expect(result).toMatch('danilo.e.catalan@gmail.com')
  })
  
})