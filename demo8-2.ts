// 接口

interface Girl {
  name: String,
  age: number,
  [propsName: string]: any // 属性的名字是字符串类型，属性的值可以是任何类型。
}

const getGirl = (girl: Girl):string => {
  return `${girl.name} - ${girl.age}`
}

getGirl({name:'re', age: 0});

// 类型别名可以直接给类型，比如string，而接口必须代表对象。