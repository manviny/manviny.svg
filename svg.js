


app.service('mnySVG', function (DreamFactory, $http, $q, $rootScope, $filter) { 


  
  // GLOBALES

  var imageContentbase64;



  // SERVICIOS


  /** 
  *   mnySVG.fill("factuscan-svg", "frente", "green")
  */
  var fill = function(objeto, id, color){
        var svg = document.getElementById(objeto); 
    var svgDoc = svg.contentDocument;
    var item = svgDoc.getElementById(id);
    item.setAttributeNS(null, "fill", color);
  }

  /** 
  *   mnySVG.display("factuscan-svg", "cameraClosed", "none")
    * mnySVG.display("factuscan-svg", "cameraOpen", "inline")
  */
  var display = function(objeto, id, property){
        var svg = document.getElementById(objeto); 
    var svgDoc = svg.contentDocument;
    var item = svgDoc.getElementById(id);
    item.setAttributeNS(null, "display", property);
  }

  /** 
    * mnySVG.addEventListener("factuscan-svg", "cameraClosed", "mouseover",  function(){ $scope.takePicture() })
  */
  var addEventListener = function(objeto, id, event, funcion){
        var svg = document.getElementById(objeto); 
    var svgDoc = svg.contentDocument;
    var item = svgDoc.getElementById(id);
    item.addEventListener(event, funcion, false); 

  }

  /** 
    * mnySVG.rotate("factuscan-svg", "cameraClosed", from, to, duration)
    * mnySVG.rotate("factuscan-svg", "cameraClosed", "0 124 133", "360 124 133", "24s")
  *   http://stackoverflow.com/questions/16488884/add-svg-element-to-existing-svg-using-dom
  */
  var rotate = function(objeto, id, from, to, duration){

        var svg = document.getElementById(objeto); 
    var svgDoc = svg.contentDocument;
    var item = svgDoc.getElementById(id);

// var rect = svg.getBoundingClientRect(); // get the bounding rectangle
// var item2 = item.getBoundingClientRect(); // get the bounding rectangle
// alert(rect.width)
// alert(rect.height)
// alert(item2.width)
// alert(item2.height)
// alert(item2.left)
// alert(item2.top)

    // var svg = document.getElementsByTagName('svg')[0]; //Get svg element
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'animateTransform'); //Create a path in SVG's namespace

    newElement.setAttribute("attributeName","transform"); //Set path's data
    newElement.setAttribute("attributeType","XML"); //Set path's data
    newElement.setAttribute("type","rotate"); //Set path's data
    newElement.setAttribute("from",from); //Set path's data
    newElement.setAttribute("to",to); //Set path's data
    newElement.setAttribute("dur",duration); //Set path's data
    newElement.setAttribute("repeatCount","indefinite"); //Set path's data

    item.appendChild(newElement);

  }


    return {

      // GENERALES
    fill: fill,
    display: display,
    addEventListener: addEventListener,
    rotate: rotate

  }

})