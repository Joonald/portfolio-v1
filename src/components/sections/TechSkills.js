import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';

const TechSkills = () => {

    function Word({ children, ...props }) {
        const color = new THREE.Color('#72E5F2');
        const fontProps =  { castShadow: true, font: '../fonts/Montserrat-Regular.ttf', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
        const ref = useRef();
        const [hovered, setHovered] = useState(false);
        const over = (e) => (e.stopPropagation(), setHovered(true));
        const out = () => setHovered(false);
        // Change the mouse cursor on hover
        useEffect(() => {
          if (hovered) document.body.style.cursor = 'pointer'
          return () => (document.body.style.cursor = 'auto')
        }, [hovered])
        // Tie component to the render-loop
        useFrame(({ camera }) => {
          // Make text face the camera
          ref.current.quaternion.copy(camera.quaternion)
          // Animate font color
          ref.current.material.color.lerp(color.set(hovered ? '#72E5F2' : '#A9BBBC'), 0.1)
        })
        return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
      };
      
      let skillList = [
        'GitHub',
        'ReactJS',
        'PHP',
        'MySQL',
        'CSS',
        'JavaScript',
        'Sass',
        'Git',
        'jQuery',
        'HTML',
        'Bootstrap',
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Canva',
        'REST API',
        'WordPress',
        'Figma'
      ];

      function skillFromMyList(i, j) {
        return skillList[i + 3 * j]
      };

      function Cloud({ count = 4, radius = 20 }) {
        // Create a count x count random words with spherical distribution
        const words = useMemo(() => {
          const temp = []
          const spherical = new THREE.Spherical()
          const phiSpan = Math.PI / (count + 1)
          const thetaSpan = (Math.PI * 2) / count
          for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++)
              temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skillFromMyList(i, j)])
          return temp
        }, [count, radius])
        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
      };

      return (
        <div id="tech-skills">
          <h3 className="neon-text">The technologies that I've been using:</h3>
          <Canvas className ="sphere" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>

            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={5} radius={22} />
            <TrackballControls noZoom='false'/>

          </Canvas>
        </div>
      )
};

export default TechSkills;