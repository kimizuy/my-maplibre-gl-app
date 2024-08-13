import { useState } from "react";
import { MapComponent } from "./map-component";

function App() {
  const [showMarker, setShowMarker] = useState(false);

  return (
    <div
      style={{
        padding: "80px",
        display: "flex",
        gap: "20px",
      }}
    >
      <div>
        <button onClick={() => setShowMarker((prev) => !prev)}>
          {showMarker ? "Hide" : "Show"} Marker
        </button>
      </div>
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <MapComponent showMarker={showMarker} />
      </div>
    </div>
  );
}

export default App;
