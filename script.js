require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Home",
        "esri/PopupTemplate",
        "dojo/domReady!"
      ], function (Map, MapView, FeatureLayer, Home, PopupTemplate) {
        var map = new Map({
          basemap: "topo-vector"
        });
  var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 10,
          center: [-73.97, 40.77]
        });
  var featureLayer2 = new FeatureLayer({
    portalItem:{
      id: "117d85fe06424b1489d74a92ee9587dd"
    }
  });
  map.add(featureLayer2);
  var featureLayer1 = new FeatureLayer({
           portalItem: {
            id: "fd8cdb831bf6475ea59587e8fb545900"    
          },
    PopupTemplate: {
    title: "Station Name",
    content: "STOP_NAME"
  }
 });
 map.add(featureLayer1);
  var homie = new Home({
        view: view
      });
    view.ui.add(homie, "top-left");
});
