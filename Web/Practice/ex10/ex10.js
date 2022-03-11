function getMembers(){
  return ['egoing','k8805','sorialgi','leezche','python']
}
let members = getMembers();
// document.open();
// document.write("<p>" + members[0]+"</p>");
// document.write("<p>" + members[1]+"</p>");
// document.write("<p>" + members[2]+"</p>");

for( i = 0; i < members.length; i++){
  document.open();
  document.write(members[i].toUpperCase());
  console.log(members[i]);
  document.close();
}
members = members.concat('portmoody','vancouver')
console.log(members[i]);

