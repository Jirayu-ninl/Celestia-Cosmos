// shaders/orbit.f.glsl
precision mediump float;

uniform float u_thickness;
uniform float u_time;
varying vec3 v_position;

varying vec2 vUv;

void main() {
    vec2 uv = vUv - vec2(0.5);
    float dist = length(uv);
    float edge1 = smoothstep(0.5, 0.5, dist);
    float edge2 = smoothstep(0.5 - u_thickness, 0.5, dist);
    float alpha = edge2 * (1.0 - edge1);
    csm_FragColor = vec4(vec3(1.), alpha);
}