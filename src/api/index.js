var Mock = require('mock.js')
var data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
console.log(JSON.stringify(data, null, 4))
