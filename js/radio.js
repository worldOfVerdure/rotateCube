export function radioRotate (event, CubeEle, cubeData) {
    const Outputs = document.querySelectorAll("output");
    const RangeValues = document.querySelectorAll("input[type=\"range\"]");
    CubeEle.style.transition = "transform 4s";
    console.log(event.target.value);
    switch(event.target.value) {
    case "front":
      CubeEle.style.transform = `rotate3d(0, 0, 0, 0deg)`;
      Outputs[0].innerText = "0°";
      Outputs[1].innerText = "0°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = 0;
      RangeValues[1].value = 0;
      RangeValues[2].value = 0;
      cubeData[0] = 0;
      cubeData[1] = 0;
      cubeData[2] = 0;
      break;
    case "right":
      CubeEle.style.transform = `rotate3d(0, 1, 0, 90deg)`;
      Outputs[0].innerText = "0°";
      Outputs[1].innerText = "90°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = 0;
      RangeValues[1].value = 90;
      RangeValues[2].value = 0;
      cubeData[0] = 0;
      cubeData[1] = 90;
      cubeData[2] = 0;
      break;
    case "back":
      CubeEle.style.transform = `rotate3d(0, 1, 0, 180deg)`;
      Outputs[0].innerText = "0°";
      Outputs[1].innerText = "180°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = 0;
      RangeValues[1].value = 180;
      RangeValues[2].value = 0;
      cubeData[0] = 0;
      cubeData[1] = 180;
      cubeData[2] = 0;
      break;
    case "left":
      CubeEle.style.transform = `rotate3d(0, 1, 0, -90deg)`;
      Outputs[0].innerText = "0°";
      Outputs[1].innerText = "-90°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = 0;
      RangeValues[1].value = -90;
      RangeValues[2].value = 0;
      cubeData[0] = 0;
      cubeData[1] = -90;
      cubeData[2] = 0;
      break;
    case "top":
      CubeEle.style.transform = `rotate3d(1, 0, 0, -90deg)`;
      Outputs[0].innerText = "-90°";
      Outputs[1].innerText = "0°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = -90;
      RangeValues[1].value = 0;
      RangeValues[2].value = 0;
      cubeData[0] = -90;
      cubeData[1] = 0;
      cubeData[2] = 0;
      break;
    case "bottom":
      CubeEle.style.transform = `rotate3d(1, 0, 0, 90deg)`;
      Outputs[0].innerText = "90°";
      Outputs[1].innerText = "0°";
      Outputs[2].innerText = "0°";
      RangeValues[0].value = 90;
      RangeValues[1].value = 0;
      RangeValues[2].value = 0;
      cubeData[0] = 90;
      cubeData[1] = 0;
      cubeData[2] = 0;
      break;
    default :
      console.log("Incorrect value for input radio was submitted.");
  }
  return cubeData;
}
