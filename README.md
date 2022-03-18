# What is Sakura.js
 Aim to build a util package bringing u a warm feeling like sakura
# How to use Sakura.js
## 1,installation
  ```javascript
   npm i sakura
  ```
## 2,example
  ```javascript
   const {checkType}  = require('sakura.js')
   let result = checkType([1,2,3],'Array')
   console.log(result) // true
  ```
## 3,API
| function name | effect   | usage     |          example           |output        |
| ----          | ----     | ----      |            ----            |----          | 
| checkType  | check input type |  checkType(data,type) |checkType([1,2,3],'Array') | Boolean|