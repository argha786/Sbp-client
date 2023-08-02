import React from "react";
import "../../css/Welcome.css"

import Particles from "react-tsparticles";
import BitcoinWelcome from "../../Assets/BitcoinWelcome.png"

export default function Welcome() {
    const particlesInit = (main) => {
        // console.log(main)

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container)
    };
    return (
        <div className="welcome" >
            <div id="tsparticles">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#081D34"
                            }
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 4,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 10
                                },
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#F806CC"
                            },
                            links: {
                                color: "#fff",
                                distance: 200,
                                enable: true,
                                opacity: 1,
                                width: 2
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1500
                                },
                                value: 100
                            },
                            opacity: {
                                value: 1
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        },
                        detectRetina: true
                    }}
                />
            </div>
            <div style={{"textAlign":"center"}} >

                <img src={BitcoinWelcome} alt="Bitcoin" style={{ "width": "100%", }} />
            </div>
            <div className="welcomeMain" >

                <h1>SWIFT BUSINESS PAY PRO - WORLD'S BEST CRYPTO TRANSFER SERVER</h1>
                <h3>Most Trusted International Wallet & Cryptocurrency Transfer Server</h3>
                <div style={{ "textAlign": "center" }} >
                    
                </div>
            </div>
        </div>
    );
}