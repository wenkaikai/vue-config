import Mock from 'mockjs'

/**
 * 如下生成的数据 页面上post get 都可以用
 * 直接在应用也面引入此页面导出的数据即可 此时是默认的对象
 * 
 */
const data = Mock.mock('https://www.test.com',{
      "userInfo|4":[{    //生成|num个如下格式名字的数据

          "id|+1":1,  //数字从当前数开始后续依次加一

          "name":"@cname",    //名字为随机中文名字

          "ago|18-28":25,    //年龄为18-28之间的随机数字

          "sex|1":["男","女"],    //性别是数组中的一个，随机的

          "job|1":["web","UI","python","php"]    //工作是数组中的一个

      }]

    })
    const data1 = Mock.mock('https://www.test1.com',{
      "userInfo|4":[{    //生成|num个如下格式名字的数据

          "id|+1":1,  //数字从当前数开始后续依次加一

          "name":"@cname",    //名字为随机中文名字

          "ago|18-28":25,    //年龄为18-28之间的随机数字

          "sex|1":["1","2"],    //性别是数组中的一个，随机的

          "job|1":["web","UI","python","php"]    //工作是数组中的一个

      }]

    })


    export default {
        data:data,
        data1:data1
    };