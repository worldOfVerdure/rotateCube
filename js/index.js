import {checkboxRotate} from "./checkbox.js";
import {radioRotate} from "./radio.js";
import {rangeRotate} from "./range.js";

function main() {
  const SceneEle = document.getElementById("scene");
  const CubeEle = document.getElementById("cube");
  const RangeItems = document.querySelectorAll("input[type=\"range\"]");
  const RadioItems = document.querySelectorAll("input[type=\"radio\"]");
  const checkboxBtnItems = document.querySelectorAll("input[type=\"checkbox\"]");
  const cubeFacets = document.querySelectorAll("div[class=\"facet\"]");
  const NUM_OF_RANGE = 6;
  //Ascertain initial values for sliders
  let cubeData = new Array(NUM_OF_RANGE);
  for (let i = 0; i < NUM_OF_RANGE; ++i) {
    if (i < 3)
      cubeData[i] = 0;
    if (i === 3) {
      const REGEX = /px/;
      let initialPerspective = window.getComputedStyle(SceneEle).perspective;
      const PX_INDEX = initialPerspective.search(REGEX);
      initialPerspective = initialPerspective.slice(0, PX_INDEX);
      cubeData[i] = initialPerspective;
    }
    if(i > 3)
      cubeData[i] = 50; //Perspective values start at 50%.
  }

  RangeItems.forEach(element => {
    element.addEventListener("input", event => {
      cubeData = rangeRotate(event, SceneEle, CubeEle, cubeData);
    });
  });
  
  RadioItems.forEach(element => {
    element.addEventListener("change", event => {
      cubeData = radioRotate(event, CubeEle, cubeData);
    });
  });
  
  checkboxBtnItems.forEach(element => {
    element.addEventListener("change", event => {
      checkboxRotate(event, CubeEle, cubeFacets, RangeItems);
    });
  });

}

main();
