 set_LocalStorage = () => {

  let username = document.getElementById('Name').value
  let fatherName = document.getElementById('Father_Name').value;
  let userGamil = document.getElementById('Gmail').value;
  let userNumber = document.getElementById('Number').value;

  user_list = {

    name: username,
    fatherName:fatherName,
    gmail:userGamil,
    phone:userNumber,
  }

  localStorage.setItem('user_data',JSON.stringify(user_list));

  
}

get_LocalStorage =  ()=> {

  let getUserList = localStorage.getItem('user_data');
  let heading = document.getElementById('paragraph')
  let j = getUserList
  let resut = JSON.parse(j)
  heading.innerHTML = resut;
  console.log (resut)
  
}
