let box = document.querySelector(".box");
let container = document.querySelector(".container");
let colors = [];
let count = 0;
let changeBG = () => {
    let b1 = document.querySelector("#b1");
    let r = Math.floor(Math.random()*255).toString(16);
    let g= Math.floor(Math.random()*255).toString(16);
    let b = Math.floor(Math.random()*255).toString(16);
    box.style.backgroundColor = `#${r}${g}${b}`;
    // console.log(box.style.backgroundColor );
    // box.remove();
} 

const addColors = () => {
  let color = box.style.backgroundColor;
  color = (color != "" ? color : "#5267ed");
  let existedColor = colors.includes(color);
  if(!existedColor && colors.length <= 5){
  colors.push(color);
  count++;
  container.innerHTML += `<div id="i${count}" class="cell" style = "background-color: ${color}"> <i id="copied${count}" onclick="copyColor(${count})" onchange="rgbToHex(${count})" class="fa-solid fa-copy"></i>
  <i id="removed" onclick="deleteCell(${count})" class="fa-solid fa-trash"></i></div>`;
}
}

const changeMode = () => {
    let modes = document.querySelector("#modes");
    modes.classList.toggle("fa-sun");
    modes.classList.toggle("fa-moon");
    let body = document.querySelector("body");
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}

const deleteCell = (id) => {
 let cell = document.querySelector(`#i${id}`);
  cell.remove();
  let bg = cell.style.backgroundColor;
  let index = colors.findIndex((v) => v === bg);
  colors.splice(index, 1);
}

const copyColor = (id) => {
  let color =  document.querySelector(`#i${id}`).style.backgroundColor;
  let copied = document.querySelector(`#copied${id}`);
  copied.classList.remove("fa-copy");
  copied.classList.add("fa-check");
  navigator.clipboard.writeText(color);
  setTimeout(() => {
    copied.classList.remove("fa-check");
    copied.classList.add("fa-copy");
  }, 2000);
}

// let rgbToHex = (id) => {
//   let color =  document.querySelector(`#i${id}`);
//   let r = componentToHex(Math.floor(Math.random()*255));
//   let g= componentToHex(Math.floor(Math.random()*255));
//   let b = componentToHex(Math.floor(Math.random()*255));
//   box.style.backgroundColor = `componentToHex(${r}, ${g}, ${b})`;
// }
