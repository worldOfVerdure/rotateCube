export function rangeRotate(event, SceneEle, CubeEle, cubeData, RadioItems) {
  const RADIO_NUM = 6;
  for (let i = 0; i < RADIO_NUM; ++i)
    RadioItems[i].checked = false;
  
  const truncatedValue = Math.round(100 * event.target.value) / 100;
  switch (event.target.id) {
    case "xAxis":
      cubeData[0] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + '°';
      break;
    case "yAxis":
      cubeData[1] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + '°';
      break;
    case "zAxis":
      cubeData[2] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + '°';
      break;
    case "persSlider":
      cubeData[3] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + 'px';
      break;
    case "persOriSliderX":
      cubeData[4] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + '%';
      break;
    case "persOriSliderY":
      cubeData[5] = truncatedValue;
      event.target.parentNode.lastElementChild.firstElementChild.innerText = truncatedValue + '%';
      break;
    default:
      console.log("Correct output element's id was not retrieved.");
  }
  CubeEle.style.transition = "transform 0s";
  CubeEle.style.transform = `rotate3d(1, 0, 0, ${cubeData[0]}deg) rotate3d(0, 1, 0, ${cubeData[1]}deg) rotate3d(0, 0, 1, ${cubeData[2]}deg)`;
  SceneEle.style.perspective = `${cubeData[3]}px`;
  SceneEle.style.perspectiveOrigin = `${cubeData[4]}% ${cubeData[5]}%`;
  return cubeData;
}
