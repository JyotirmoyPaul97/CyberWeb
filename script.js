function showSection(sectionId){

let sections = document.querySelectorAll("section");

sections.forEach(section=>{
section.classList.remove("active");
});

document.getElementById(sectionId).classList.add("active");

if(sectionId==="complaints"){
displayComplaints();
}

}


let form = document.getElementById("crimeForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let crimeType = document.getElementById("crimeType").value;
let description = document.getElementById("description").value;

let complaint = {
name,
email,
crimeType,
description
};

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

complaints.push(complaint);

localStorage.setItem("complaints",JSON.stringify(complaints));

document.getElementById("successMessage").innerText="Complaint Submitted Successfully";

form.reset();

});


function displayComplaints(){

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

let table = document.getElementById("complaintTable");

table.innerHTML="";

complaints.forEach(c=>{

let row = `<tr>
<td>${c.name}</td>
<td>${c.email}</td>
<td>${c.crimeType}</td>
<td>${c.description}</td>
</tr>`;

table.innerHTML += row;

});

}