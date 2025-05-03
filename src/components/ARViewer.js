import React, { useEffect } from "react";
import "aframe";
//import "mind-ar/dist/aframe/mindar-image-aframe.prod.js"; // opcional si quieres usar markerless later
import "aframe-extras";

const ARViewer = ({ modelPath }) => {
  useEffect(() => {
    // Habilitar WebXR
    const scene = document.querySelector("a-scene");
    if (scene && scene.renderer) {
      scene.renderer.xr.enabled = true;
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "499px" }}>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        renderer="colorManagement: true;"
        xrweb="allowedDevices: any;"
        xr="requiredFeatures: hit-test;"
        webxr="requiredFeatures: hit-test"
        arjs="sourceType: webcam; debugUIEnabled: false;"
        device-orientation-permission-ui="enabled: true"
      >
        <a-assets>
          <a-asset-item id="dishModel" src={modelPath}></a-asset-item>
        </a-assets>

        {/* Ground detector */}
        <a-entity
          id="reticle"
          geometry="primitive: ring; radiusInner: 0.05; radiusOuter: 0.06"
          material="color: green; shader: flat"
          visible="false"
          position="0 0 -1"
          xr-hit-test="target: #dishEntity"
        ></a-entity>

        {/* The 3D dish model */}
        <a-entity
          id="dishEntity"
          gltf-model="#dishModel"
          scale="0.5 0.5 0.5"
          visible="false"
        ></a-entity>

        <a-camera
          position="0 0 0"
          look-controls-enabled="false"
          camera="active: true"
          wasd-controls-enabled="false"
        ></a-camera>
      </a-scene>
    </div>
  );
};

export default ARViewer;
