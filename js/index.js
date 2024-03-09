function rotateCube(cubEle) {
  const radioBtn = document.querySelector(":checked");
  let radioBtnValue = radioBtn.value;

  switch (radioBtnValue) {
    case "front":
      cubeEle.style.removeProperty("transform");
      break;
    case "right":
      cubeEle.style.transform = ""
      break;
    case "back":
      break;
    case "left":
      break;
    case "top":
      break;
    case "bottom":
      break;
  }
}

const cubeEle = document.getElementById("#cube");

radioBtn.addEventListener("change", () => {
  rotateCube(cubeEle);
});
