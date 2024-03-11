import {rangeRotate} from "./range.js";
import {radioRotate} from "./radio.js";
import {checkboxRotate} from "./checkbox.js";

function main() {
  const SceneEle = document.getElementById("scene");
  const CubeEle = document.getElementById("cube");
  const RangeItems = document.querySelectorAll("input[type=\"range\"]");
  const RadioItems = document.querySelectorAll("input[type=\"radio\"]");
  const CheckboxBtnItems = document.querySelectorAll("input[type=\"checkbox\"]");
  const cubeFacets = document.querySelectorAll("div[class=\"facet\"]");
  const SLIDER_LENGTH = 6;

  let cubeData = new Array(SLIDER_LENGTH);
  for (let j = 0; j < SLIDER_LENGTH; ++j) {
    if (j < 3)
      cubeData[j] = 0;
    if (j === 3) {
      const Regex = /px/;
      let initialPerspective = window.getComputedStyle(SceneEle).perspective;
      const PX_INDEX = initialPerspective.search(Regex);
      initialPerspective = initialPerspective.slice(0, PX_INDEX);
      cubeData[j] = initialPerspective;
    }
    if(j > 3)
      cubeData[j] = 50;
  }

  RangeItems.forEach(element => {
    element.addEventListener("input", event => {
      cubeData = rangeRotate(event, SceneEle, CubeEle, cubeData, RadioItems, SLIDER_LENGTH);
    });
  });
  
  RadioItems.forEach(element => {
    element.addEventListener("change", event => {
      cubeData = radioRotate(event, CubeEle, cubeData);
    });
  });
  
  CheckboxBtnItems.forEach(element => {
    element.addEventListener("change", event => {
      checkboxRotate(event, CubeEle, cubeFacets, RangeItems);
    });
  });

}

main();
