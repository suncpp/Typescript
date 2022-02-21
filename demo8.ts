// 接口

interface Girl {
  name: String,
  age: number
}

const getGirl = (girl: Girl):string => {
  return `${girl.name} - ${girl.age}`
}

getGirl({name:'re', age: 0});

// 类型别名可以直接给类型，比如string，而接口必须代表对象。