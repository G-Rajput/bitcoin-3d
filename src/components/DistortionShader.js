import * as THREE from 'three';

const DistortionShader = {
  uniforms: {
    time: { value: 1.0 },
    amplitude: { value: 0.1 }
  },
  vertexShader: `
    uniform float time;
    uniform float amplitude;
    varying vec3 vNormal;

    void main() {
      vNormal = normal;
      vec3 newPosition = position + amplitude * normal * sin(time + position.y * 10.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;

    void main() {
      gl_FragColor = vec4(abs(vNormal), 1.0);
    }
  `
};

export default DistortionShader;
