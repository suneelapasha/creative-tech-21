uniform float uTime;
uniform float uSpeed;
uniform float uColorShift;

varying vec2 vUv;

void main() {
  vec2 uv = vUv - 0.5;

  float dist = length(uv);
  float wave = sin(dist * 20.0 - uTime * uSpeed * 2.0);
  float mask = smoothstep(0.5, 0.0, dist);

  vec3 colorA = vec3(0.9, 0.2, 0.5);
  vec3 colorB = vec3(0.2, 0.5, 0.9);
  vec3 color = mix(colorA, colorB, wave * 0.5 + 0.5 + uColorShift);

  gl_FragColor = vec4(color * mask, 1.0);
}