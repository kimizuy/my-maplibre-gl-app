import { useEffect, useRef, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type Props = {
  showMarker: boolean;
};

export const MapComponent = ({ showMarker }: Props) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(function initializeMap() {
    if (!mapContainer.current) return;

    const mapInstance = new maplibregl.Map({
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

    mapInstance.addControl(new maplibregl.NavigationControl(), "bottom-right");
    mapInstance.addControl(new maplibregl.ScaleControl());

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(
    function updateMap() {
      if (!map) return;
      const marker = new maplibregl.Marker().setLngLat([139.767144, 35.680621]);

      if (showMarker) {
        marker.addTo(map);
      }

      return () => {
        marker.remove();
      };
    },
    [map, showMarker]
  );

  return (
    <div
      ref={mapContainer}
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
};
