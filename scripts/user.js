"use strict";

window.onload = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((fetchdata) => {
      for (let i = 0; i < fetchdata.length; i++) {
        let row = tableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = fetchdata[i].id;
        cell2.innerHTML = fetchdata[i].name;
        cell3.innerHTML = fetchdata[i].username;
        cell4.innerHTML = fetchdata[i].email;
        cell5.innerHTML = fetchdata[i].phone;
        cell6.innerHTML = fetchdata[i].website;
      }
    });
};
