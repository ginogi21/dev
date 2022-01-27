const addDate = document.querySelector('#date');

const createDate = {
  weekday :"long",
  month :"short",
  day: "numeric",
  year:"numeric"
};

const today = new Date();
addDate.innerHTML = today.toLocaleDateString('en-Us',createDate);

