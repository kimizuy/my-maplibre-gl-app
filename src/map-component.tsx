import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      hash: true,
      style:
        "https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json",
      center: [139.767144, 35.680621],
      zoom: 15,
      maxZoom: 17.99,
      minZoom: 4,
      localIdeographFontFamily: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "bottom-right");
    map.addControl(new maplibregl.ScaleControl());

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ position: "fixed", top: 0, bottom: 0, width: "100%" }}
    />
  );
};
