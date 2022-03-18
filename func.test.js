const dicName = './utils/'
const checkType = require(dicName+'checkType')

test('test checkType',()=>{
  expect(checkType([1,2,3],'Array')).toBe(true)
})