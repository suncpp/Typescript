// 复杂数据类型
const person: {
  name: string,
  age: number
} = {
  name: 'John',
  age: 36
};

console.log(person)

const arr: Array<String> = ['李四','张三'];
const arr2: Number[] = [1,2,3,4];

console.log(arr,arr2)


const fn = (a: number, b: number): String => {
  return '2222';
}
console.log(fn(1,2))

class Person {};
const test: Person = new Person();
console.log(test)