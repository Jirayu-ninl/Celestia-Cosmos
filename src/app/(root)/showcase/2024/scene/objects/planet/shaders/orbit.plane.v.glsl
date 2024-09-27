// shaders/orbit.v.glsl

varying vec3 v_position;
varying vec2 vUv;

void main() {
    vUv = uv;
    v_position = position;
    csm_Position = position;
}