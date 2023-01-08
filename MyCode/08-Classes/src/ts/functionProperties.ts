interface IWithMethod {
  myMethod(): void;
  myProperty: () => void;
}
class WithMethod implements IWithMethod {
  myMethod() {}
  // 尽管我们在接口中定义是属性函数，但我们的实现依然可以用method function的形式
  myProperty() {}
  // Use property function
  //myProperty = ()=>{}
}

export default WithMethod;
