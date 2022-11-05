import greet from '../src/index'

describe('greet', () => {
  it('should say hi', () => {
    expect(greet('Bob')).toEqual('Hi there, Bob!')
  })
})
