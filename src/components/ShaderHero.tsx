import { useEffect, useRef } from "react";
import * as THREE from "three";

/** The hero's WebGL shader-line background: additive noise bands flowing across the accent hue. */
export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cr = 0x26 / 255;
    const cg = 0xff / 255;
    const cb = 0x52 / 255;

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      uSpeed: { value: 0.5 },
      uBandWidth: { value: 0.001 },
      uFlowDir: { value: 1.0 },
      uColor: { value: new THREE.Vector3(cr, cg, cb) },
    };
    const vertexShader = "void main(){ gl_Position = vec4(position,1.0); }";
    const fragmentShader = [
      "precision highp float;",
      "uniform vec2 resolution; uniform float time; uniform float uSpeed; uniform float uBandWidth; uniform float uFlowDir; uniform vec3 uColor;",
      "float random(in float x){ return fract(sin(x)*1e4); }",
      "void main(void){",
      "  vec2 uv = (gl_FragCoord.xy*2.0 - resolution.xy)/min(resolution.x,resolution.y);",
      "  float t = time*uSpeed*0.06*uFlowDir + random(uv.x)*0.4;",
      "  vec3 color = vec3(0.0);",
      "  float brightness = 0.0;",
      "  for(int i=0;i<5;i++){ brightness += uBandWidth*float(i*i)/abs(fract(t+float(i)*0.01)*1.0 - length(uv)); }",
      "  color = uColor*brightness;",
      "  gl_FragColor = vec4(color,1.0);",
      "}",
    ].join("\n");

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const onResize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };
    onResize();
    window.addEventListener("resize", onResize);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: 900,
        height: 500,
        maxWidth: "100%",
        pointerEvents: "none",
        zIndex: 20,
        opacity: 0.4,
        WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 30%, rgba(0,0,0,0) 72%)",
        maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 30%, rgba(0,0,0,0) 72%)",
      }}
    />
  );
}
