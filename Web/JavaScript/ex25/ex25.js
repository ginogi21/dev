const person = {
  name:'Lee',
  foo(callback){
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function(){
  console.log(`Hi! My name is ${this.name}`);
});
