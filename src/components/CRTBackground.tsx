import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`;

const FRAG = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
#define R resolution
#define T time
#define FC gl_FragCoord.xy

float rnd(vec2 p){p=fract(p*vec2(127.1,311.7));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+vec2(1,1)),u.x),u.y);}

void main(){
  vec2 uv = FC / R;
  vec2 cuv = uv;
  vec2 c = cuv - 0.5;
  float d = dot(c, c);
  cuv = cuv + c * d * 0.04;
  float vign = pow(clamp(1.0 - dot(c, c) * 1.6, 0.0, 1.0), 0.5);
  float scanline = pow(sin(cuv.y * R.y * 1.5) * 0.5 + 0.5, 1.5) * 0.08 + 0.92;
  float rollY = mod(T * 0.04, 1.0);
  float roll = smoothstep(0.002, 0.0, abs(cuv.y - rollY)) * 0.12;
  float n = noise(cuv * vec2(R.x / R.y * 3.0, 3.0) + vec2(0.0, T * 0.05)) * 0.06;
  float glitchT = floor(T * 0.7);
  float glitchSeed = rnd(vec2(glitchT, 1.0));
  float glitchY = rnd(vec2(glitchT, 2.0));
  float glitchH = 0.004 + rnd(vec2(glitchT, 3.0)) * 0.015;
  float inGlitch = step(abs(cuv.y - glitchY), glitchH) * step(0.93, glitchSeed);
  cuv.x += (rnd(vec2(glitchT, 4.0)) - 0.5) * 0.018 * inGlitch;
  float edgeGlow = 1.0 - vign;
  vec3 purple = vec3(0.49, 0.23, 0.93);
  vec3 col = purple * edgeGlow * 0.18;
  float gridX = smoothstep(0.97, 1.0, fract(cuv.x * 24.0));
  float gridY = smoothstep(0.97, 1.0, fract(cuv.y * 14.0));
  col += vec3(gridX + gridY) * purple * 0.07;
  float bloom = exp(-abs(cuv.x - 0.5) * 12.0) * 0.04;
  col += purple * bloom * (0.5 + n);
  col += n * purple * 0.3;
  col += roll * purple;
  col *= scanline;
  col *= vign;
  col *= min(T * 0.3, 1.0);
  O = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

export default function CRTBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes  = gl.getUniformLocation(prog, 'resolution');
    const uTime = gl.getUniformLocation(prog, 'time');

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const start = performance.now();
    const loop = () => {
      const t = (performance.now() - start) / 1000;
      gl.useProgram(prog);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
