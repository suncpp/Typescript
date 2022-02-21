# 学习练习
### 环境准备
```
demo.ts
const testName: string = '李四';
console.log(testName)
```
### 下载依赖
```
npm install -g typescript
sudo apt install node-typescript[看你的环境而定，我的是wsl]
npm install -g @types/node
```
### 运行
```
1、tsc demo.ts   生成   demo.js   运行 node demo.js
2、tsc demo.ts
```
=============================================================
### 类型别
```
// type 类型别名
type Test = {name: String; description: String, age: Number,job: String};
const arr: Test[] = [
  {name:"sss", description:'sss', age:12, job:"ss"}
];

console.log(arr)
```
### 接口
```
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
```
=============================================================