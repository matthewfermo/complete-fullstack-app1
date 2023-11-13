// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// const addTask = document.getElementsByClassName("fa-plus-square");
const edit = document.getElementsByClassName("fa fa-pencil");
const save = document.getElementsByClassName("fas fa-save");
var trash = document.getElementsByClassName("fa-trash");

// Array.from(thumbUp).forEach(function (element) {
//   element.addEventListener("click", function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText;
//     const msg = this.parentNode.parentNode.childNodes[3].innerText;
//     const thumbUp = parseFloat(
//       this.parentNode.parentNode.childNodes[5].innerText
//     );
//     fetch("messages", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         msg: msg,
//         thumbUp: thumbUp,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         window.location.reload(true);
//       });
//   });
// });

// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener("click", function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText;
//     const msg = this.parentNode.parentNode.childNodes[3].innerText;
//     const thumbUp = parseFloat(
//       this.parentNode.parentNode.childNodes[5].innerText
//     );
//     fetch("messages/thumbDown", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         msg: msg,
//         thumbUp: thumbUp,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         window.location.reload(true);
//       });
//   });
// });

// Array.from(addTask).forEach(function (element) {
//   element.addEventListener("click", function () {
//     const task = this.parentNode.parentNode.childNodes[1].innerText;
//     console.log(task);
//     // fetch("messages", {
//     //   method: "post",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     task: task,
//     //   }),
//     // }).then(function (response) {
//     //   window.location.reload();
//     // });
//   });
// });

Array.from(edit).forEach(function (element) {
  element.addEventListener("click", function () {
    const taskNode = this.parentNode.parentNode.childNodes[1];
    const inputNode = this.parentNode.parentNode.childNodes[3];
    const saveNode = this.parentNode.parentNode.childNodes[5];
    const editNode = this.parentNode.parentNode.childNodes[7];
    console.log(saveNode, editNode);
    taskNode.classList.add("hide");
    inputNode.classList.toggle("hide");
    saveNode.classList.toggle("hide");
    editNode.classList.add("hide");
  });
});

Array.from(save).forEach(function (element) {
  element.addEventListener("click", function () {
    const taskNode = this.parentNode.parentNode.childNodes[1];
    const inputNode = this.parentNode.parentNode.childNodes[3];
    const saveNode = this.parentNode.parentNode.childNodes[5];
    const editNode = this.parentNode.parentNode.childNodes[7];
    const id = element.dataset.id;
    console.log(element);
    fetch("messages", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        task: inputNode.value,
      }),
    }).then(function (response) {
      // taskNode.classList.add("hide");
      // inputNode.classList.toggle("hide");
      // saveNode.classList.toggle("hide");
      // editNode.classList.add("hide");
      window.location.reload();
    });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
    fetch("messages", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: element.dataset.id,
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});
