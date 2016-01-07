# What is that

- Looks for user position ( mobile or desktop )  
- presents leaflet map  
- adds array of markers  


# Install svg 

1. bower install manviny/manviny.svg --save  
2. check that all js and css libraries are loaded  
3. inject 'manviny.svg' into your app module  
4. add  mnymapa to your controller  
5. start using it  


svg example
===================

```javascript
angular
  .module('myApp', [
...
    'ngRoute',
    'manviny.svg',
    ... ])
```


```javascript
angular.module('myApp')
  .controller('LocalizaCtrl', function ($scope, mnymapa) {

  	// initialize map
	mnymapa.setDefaultMap();


  	var array = [];
	// array.push({lat: 39.50300178969824, lng: -3.878173828125, focus: true, draggable: false});	
	// array.push({lat: 38.50300178969824, lng: -2.878173828125, focus: true, draggable: false});	

	mnymapa.pushMarkers(array); 
	mnymapa.myPosition();
	// mnymapa.fitMarkers(array); // not reloading map

  });
```


```html
<div class="center" ng-controller="LocalizaCtrl">
    <leaflet center="centerHere" markers="myMarkers"  layers="layers" defaults="defaults"  ></leaflet>
</div>
````
