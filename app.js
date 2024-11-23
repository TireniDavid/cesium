// Initialize CesiumJS viewer
var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProviderViewModel: Cesium.createDefaultImageryProviderViewModel(),
    terrainProviderViewModel: Cesium.createDefaultTerrainProviderViewModel(),
    shouldAnimate: true
});

// Add the first cube (large)
var cube1 = viewer.entities.add({
    name : 'Cube 1',
    position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 100000),
    box : {
        dimensions : new Cesium.Cartesian3(100000.0, 100000.0, 100000.0),
        material : Cesium.Color.RED.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.RED
    }
});

// Add the second cube (medium, inside first)
var cube2 = viewer.entities.add({
    name : 'Cube 2',
    position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 100000),
    box : {
        dimensions : new Cesium.Cartesian3(70000.0, 70000.0, 70000.0),
        material : Cesium.Color.GREEN.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.GREEN
    }
});

// Add the third cube (small, inside second)
var cube3 = viewer.entities.add({
    name : 'Cube 3',
    position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 100000),
    box : {
        dimensions : new Cesium.Cartesian3(30000.0, 30000.0, 30000.0),
        material : Cesium.Color.BLUE.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.BLUE
    }
});

// Set the camera view to focus on the cubes
viewer.zoomTo(cube1);
