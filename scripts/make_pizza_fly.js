function box_fly() {
  const node = document.createElement("li");
  const DOM_img = document.createElement("img");
  DOM_img.src = "../static/img/box.png";
  DOM_img.classList.add("box");
  node.appendChild(DOM_img);
  container = document.getElementById("box-list")
  container.insertBefore(node, container.firstElement);

  intervalId = setInterval(() => {
    DOM_img.style.left = DOM_img.offsetLeft + 6 + "px";
  }, 4);

  setTimeout(() => {
    clearInterval(intervalId);
    node.remove();
  }, "400");
};