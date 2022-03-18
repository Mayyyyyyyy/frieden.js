# What is frieden.js
  frieden gives u freedom
# How to use frieden.js
## 1,installation
  ```javascript
   npm i frieden.js
  ```
## 2,example
  ```javascript
   const {checkType}  = require('frieden.js')
   let result = checkType([1,2,3],'Array')
   console.log(result) // true
  ```
## 3,API
| name | effect   | usage     |          example           |output        |
| ----          | ----     | ----      |            ----            |----          | 
| checkType  | check input type |  checkType(data,type) |checkType([1,2,3],'Array') | Boolean|