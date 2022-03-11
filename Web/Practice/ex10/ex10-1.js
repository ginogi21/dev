let vscope = 'global'; // 전역변수
function fscope(){
  let vscope = 'local'; // 지역변수
};
function fscope2(){
  let vscope = 'qqq'
};
fscope();
fscope2();