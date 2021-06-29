function set_LocalStorage(){

let username = document.getElementById('Name').value
let fatherName = document.getElementById('Father_Name').value;
let userGamil = document.getElementById('Gmail').value;
let userNumber = document.getElementById('Number').value;

let setNamelocalStorage = localStorage.setItem('Name', username);
let setFnamelocalStorage = localStorage.setItem('FatherName', fatherName);
let setGmaillocalStorage = localStorage.setItem('gmail', userGamil);
let setNumberlocalStorage = localStorage.setItem('Number',userNumber);

}

function get_localStorage(){

    // let userNameLocalStorage = localStorage.getItem(Name);
    // let userFnameLocalStorage = localStorage.getItem("FatherName");
    // let usergmailLocalStorage = localStorage.getItem("gmail");
    // let userNumberLocalStorage = localStorage.getItem("Number");
  console.log("its working")
}