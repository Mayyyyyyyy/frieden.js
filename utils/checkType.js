/*
  @param input 
  @param type : The first letter must be capitalized
*/ 
const checkType = (input,type)=>{
   let inputConstructor = input.constructor.toString()
  //  let isString = inputConstructor.indexOf('String') > -1
  //  let isNumber = inputConstructor.indexOf('Number') > -1
  //  let isBoolean = inputConstructor.indexOf('Boolean') > -1
  //  let isArray = inputConstructor.indexOf('Array') > -1
  //  let isObject = inputConstructor.indexOf('Object') > -1
  //  let isDate = inputConstructor.indexOf('Date') > -1
  //  let isFunction = inputConstructor.indexOf('Function') > -1
   let isType = inputConstructor.indexOf(`${type}`) > -1
   return isType
}

module.exports = checkType