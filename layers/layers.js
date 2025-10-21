var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_directory_1 = new ol.format.GeoJSON();
var features_directory_1 = format_directory_1.readFeatures(json_directory_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_directory_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_directory_1.addFeatures(features_directory_1);
var lyr_directory_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_directory_1, 
                style: style_directory_1,
                popuplayertitle: 'directory',
                interactive: true,
                title: '<img src="styles/legend/directory_1.png" /> directory'
            });
var format_coffee_2 = new ol.format.GeoJSON();
var features_coffee_2 = format_coffee_2.readFeatures(json_coffee_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coffee_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coffee_2.addFeatures(features_coffee_2);
var lyr_coffee_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coffee_2, 
                style: style_coffee_2,
                popuplayertitle: 'coffee',
                interactive: true,
                title: '<img src="styles/legend/coffee_2.png" /> coffee'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_directory_1.setVisible(true);lyr_coffee_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_directory_1,lyr_coffee_2];
lyr_directory_1.set('fieldAliases', {'Brand': 'Brand', 'Store Number': 'Store Number', 'Store Name': 'Store Name', 'Ownership Type': 'Ownership Type', 'Street Address': 'Street Address', 'City': 'City', 'State/Province': 'State/Province', 'Country': 'Country', 'Postcode': 'Postcode', 'Phone Number': 'Phone Number', 'Timezone': 'Timezone', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_coffee_2.set('fieldAliases', {'Brand': 'Brand', 'Store Number': 'Store Number', 'Store Name': 'Store Name', 'Ownership Type': 'Ownership Type', 'Street Address': 'Street Address', 'City': 'City', 'State/Province': 'State/Province', 'Country': 'Country', 'Postcode': 'Postcode', 'Phone Number': 'Phone Number', 'Timezone': 'Timezone', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_directory_1.set('fieldImages', {'Brand': '', 'Store Number': '', 'Store Name': '', 'Ownership Type': '', 'Street Address': '', 'City': '', 'State/Province': '', 'Country': '', 'Postcode': '', 'Phone Number': '', 'Timezone': '', 'Longitude': '', 'Latitude': '', });
lyr_coffee_2.set('fieldImages', {'Brand': '', 'Store Number': '', 'Store Name': '', 'Ownership Type': '', 'Street Address': '', 'City': '', 'State/Province': '', 'Country': '', 'Postcode': '', 'Phone Number': '', 'Timezone': '', 'Longitude': '', 'Latitude': '', });
lyr_directory_1.set('fieldLabels', {'Brand': 'no label', 'Store Number': 'no label', 'Store Name': 'no label', 'Ownership Type': 'no label', 'Street Address': 'no label', 'City': 'no label', 'State/Province': 'no label', 'Country': 'no label', 'Postcode': 'no label', 'Phone Number': 'no label', 'Timezone': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_coffee_2.set('fieldLabels', {'Brand': 'no label', 'Store Number': 'no label', 'Store Name': 'no label', 'Ownership Type': 'no label', 'Street Address': 'no label', 'City': 'no label', 'State/Province': 'no label', 'Country': 'no label', 'Postcode': 'no label', 'Phone Number': 'no label', 'Timezone': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_coffee_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});