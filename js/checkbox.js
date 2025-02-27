function rotateCubeFunc(CubeEle, checkedStatus, RangeItems) {
  if (checkedStatus) {
    CubeEle.style.animation = "rotate 8s linear infinite";
    RangeItems[0].disabled = "disabled";
    RangeItems[2].disabled = "disabled";
    RangeItems[5].disabled = "disabled";
  }
  else {
    CubeEle.style.animation = "rotate 0s linear infinite";
    RangeItems[0].removeAttribute("disabled");
    RangeItems[2].removeAttribute("disabled");
    RangeItems[5].removeAttribute("disabled");
  }
}

function changeOpacity(facets, checkedStatus) {
  if (checkedStatus) {
    facets[0].style.backgroundColor = "rgba(137, 207, 240, 1)";
    facets[1].style.backgroundColor = "rgba(52, 233, 16, 1)";
    facets[2].style.backgroundColor = "rgba(255, 0, 0, 1)";
    facets[3].style.backgroundColor = "rgba(255, 217, 0, 1)";
    facets[4].style.backgroundColor = "rgba(225, 0, 255, 1)";
    facets[5].style.backgroundColor = "rgba(10, 47, 148, 1)";
  }
  else {
    facets[0].style.backgroundColor = "rgba(137, 207, 240, .5)";
    facets[1].style.backgroundColor = "rgba(52, 233, 16, .3)";
    facets[2].style.backgroundColor = "rgba(255, 0, 0, .3)";
    facets[3].style.backgroundColor = "rgba(255, 217, 0, .3)";
    facets[4].style.backgroundColor = "rgba(225, 0, 255, .3)";
    facets[5].style.backgroundColor = "rgba(10, 47, 148, .3)";
  }
}

export function checkboxRotate(event, CubeEle, cubeFacets, RangeItems) {
  switch (event.target.id) {
    case "rotateCube":
      rotateCubeFunc(CubeEle, event.target.checked, RangeItems);
      break;
    case "opacity":
      changeOpacity(cubeFacets, event.target.checked);
      break;
    default:
      console.log("Invalid checkbox ID passed.");
  }
}
