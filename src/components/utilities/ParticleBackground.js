import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

const ParticleBackground = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    
    const particlesLoaded = useCallback( async container => {
        await console.log(container);
    }, [] );

    return (
        <>
            <Particles
                className="background"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: '#091626'
                    },
                    fullScreen: {
                        zindex: -1
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true
                        },
                    },
                    particles: {
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        color: {
                            value: "#72e5f2"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 200,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 1,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 3
                            },
                            value: 1
                        },
                    },
                }}
            />
        </>
    );
};

export default ParticleBackground;