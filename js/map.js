window.onload = function () {
    var map = new YMaps.Map(document.getElementById("MyMap"));
    var point = new YMaps.GeoPoint(30.32305450,59.93863106);
    var s = new YMaps.Style();

    map.addControl(new YMaps.TypeControl());
    map.addControl(new YMaps.Zoom());
    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(point, 16);

    // стиль значка метки
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "img/icon-map-pin.svg";
    s.iconStyle.size = new YMaps.Point(66, 100);
    s.iconStyle.offset = new YMaps.Point(-33, -100);

    var placemark = new YMaps.Placemark(point, {style: s});
    map.addOverlay(placemark);
};
