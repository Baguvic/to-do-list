const navBot = document.querySelector(".add-list-bot");
document.querySelector(".add-list").onclick = () => {
  navBot.classList.toggle("active");
};

const boxInput = document.getElementById("box-input");
const listContainer = document.getElementById("list-container");
function addList() {
  if (boxInput.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    listContainer.appendChild(li);
    let action1 = document.createElement("div");
    action1.className = "text";
    let h5 = document.createElement("h5");
    action1.appendChild(h5);
    h5.innerHTML = boxInput.value;
    li.appendChild(action1);
    let action2 = document.createElement("div");
    action2.className = "action";
    li.appendChild(action2);
    let img = document.createElement("img");
    img.src = "img/transh.png";
    img.className = "delete";
    action2.appendChild(img);
    let img2 = document.createElement("img");
    img2.src = "img/edit.png";
    img2.className = "edit";
    action2.appendChild(img2);
    let editI = document.createElement("input");
    editI.type = "text";
    editI.className = "edit-input";
    editI.style.display = "none";
    li.appendChild(editI);
  }
  boxInput.value = "";

  let hapus = document.querySelectorAll(".delete");
  hapus.forEach(function (hapusS) {
    hapusS.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  });

  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
      }
    },
    false
  );
  let edit = document.querySelectorAll(".edit");
  for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      const giat = this.parentNode.parentNode.querySelector("h5");
      const newText = prompt("Are your to change", giat.textContent);
      if (newText !== null) {
        giat.textContent = newText;
      }
    };
  }
}

search;
function search() {
  let filter = document.getElementById("search").value.toUpperCase();
  let last = document.getElementById("list-container");
  let item = last.getElementsByTagName("li");
  let h5 = document.getElementsByTagName("h5");

  for (let i = 0; i < item.length; i++) {
    let h3Text = h5[i].innerHTML || h5[i].textContent;
    let value = h3Text;

    if (value.toUpperCase().indexOf(filter) !== -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
