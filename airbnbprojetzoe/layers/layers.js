var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_couchefinale_1 = new ol.format.GeoJSON();
var features_couchefinale_1 = format_couchefinale_1.readFeatures(json_couchefinale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couchefinale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couchefinale_1.addFeatures(features_couchefinale_1);
var lyr_couchefinale_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_couchefinale_1, 
                style: style_couchefinale_1,
                popuplayertitle: 'couchefinale',
                interactive: true,
    title: 'couchefinale<br />\
    <img src="styles/legend/couchefinale_1_0.png" /> 10<br />\
    <img src="styles/legend/couchefinale_1_1.png" /> 13<br />\
    <img src="styles/legend/couchefinale_1_2.png" /> 16<br />\
    <img src="styles/legend/couchefinale_1_3.png" /> 26<br />\
    <img src="styles/legend/couchefinale_1_4.png" /> 30<br />\
    <img src="styles/legend/couchefinale_1_5.png" /> 35<br />\
    <img src="styles/legend/couchefinale_1_6.png" /> 45<br />\
    <img src="styles/legend/couchefinale_1_7.png" /> 61<br />\
    <img src="styles/legend/couchefinale_1_8.png" /> 68<br />\
    <img src="styles/legend/couchefinale_1_9.png" /> 86<br />\
    <img src="styles/legend/couchefinale_1_10.png" /> 110<br />\
    <img src="styles/legend/couchefinale_1_11.png" /> 151<br />\
    <img src="styles/legend/couchefinale_1_12.png" /> 259<br />\
    <img src="styles/legend/couchefinale_1_13.png" /> 405<br />\
    <img src="styles/legend/couchefinale_1_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_couchefinale_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_couchefinale_1];
lyr_couchefinale_1.set('fieldAliases', {'AREA': 'AREA', 'DISPX': 'DISPX', 'DISPY': 'DISPY', 'KEYWORD': 'KEYWORD', 'USERNUM': 'USERNUM', 'FCODE': 'FCODE', 'SOURCEID': 'SOURCEID', 'KEY': 'KEY', 'ENG_NAME': 'ENG_NAME', 'FRE_NAME': 'FRE_NAME', 'DATE': 'DATE', 'densite': 'densite', 'NUMPOINTS': 'NUMPOINTS', 'densairbnb': 'densairbnb', });
lyr_couchefinale_1.set('fieldImages', {'AREA': 'TextEdit', 'DISPX': 'TextEdit', 'DISPY': 'TextEdit', 'KEYWORD': 'TextEdit', 'USERNUM': 'TextEdit', 'FCODE': 'TextEdit', 'SOURCEID': 'TextEdit', 'KEY': 'TextEdit', 'ENG_NAME': 'TextEdit', 'FRE_NAME': 'TextEdit', 'DATE': 'TextEdit', 'densite': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'densairbnb': 'Range', });
lyr_couchefinale_1.set('fieldLabels', {'AREA': 'hidden field', 'DISPX': 'hidden field', 'DISPY': 'hidden field', 'KEYWORD': 'hidden field', 'USERNUM': 'hidden field', 'FCODE': 'hidden field', 'SOURCEID': 'hidden field', 'KEY': 'hidden field', 'ENG_NAME': 'hidden field', 'FRE_NAME': 'inline label - always visible', 'DATE': 'hidden field', 'densite': 'hidden field', 'NUMPOINTS': 'inline label - always visible', 'densairbnb': 'inline label - always visible', });
lyr_couchefinale_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});