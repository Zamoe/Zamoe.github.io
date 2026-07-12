const projectsData = [
    {
        id: "brake-by-wire",
        title: "Brake By Wire",
        thumbnail: "projects/BrakeByWire/bbw.png",
        images: [
            { src: "projects/BrakeByWire/bbw.png", caption: "System CAD render (Fusion 360)" },
            { src: "projects/BrakeByWire/bbw3.png", caption: "Actual Prototype" },
            { src: "projects/BrakeByWire/repeat.png", caption: "Repeatability test results" }
        ],
        description: `
            <p><strong>Brake By Wire is my completly electrical brake system prototype developed as a for my Final Year Thesis Project.</strong></p>
            <p>This thesis outlines the procedure in the development, simulation and validation of an electromechanical braking (EMB) calliper actuation sub-system. The EMB demonstrates the fundamental mechanical and electronic principles of the larger, innovative Brake-by-Wire (BBW) technology are feasible. The expanding necessity for electronically controlled braking apparent with motor vehicle trends moving towards autonomous driving and greater integration of vehicle safety systems. This makes EMB a logical step forward due to its potential for faster response times and simpler vehicle integration compared to current electro-hydraulic braking (EHB) systems. The project focuses on a simple lead screw and geared motor EMB design, inherently making the EMB more controllable as well as reliable. A mathematical system model was derived to relate required vehicle braking force to motor torque and speed, leading to the selection of a motor and the removal of the gearbox to improve system efficiency. The physical prototype was scaled down to operate in a range of 3-5 KN but was ultimately limited to 700N during testing due to structural constraints of the temporary housing. The system utilizes an ESP32 micro controller to interface a compression load cell (for force feedback) and a Brush less Direct Current (BLDC) motor driver (for position control) with a Matlab Simulink PI controller. Open-loop testing revealed the system’s stiffness and damping parameters were non-linear with respect to motor rotation, particularly at low-force values before full brake pad contact. Closed-loop testing tuned for the 300-700 N range which showed strong performance. The 300N value represents the optimum performance point within the targeted tuning range. At 300N, the system responded in 170ms with no overshoot, settled in 800ms, achieved an average tracking accuracy of 96.56%, had a closed-loop bandwidth of about 4.4rad/s (0.71Hz) consistent with PI control, and showed reliable, repeatable behaviour. The project provides insight into the dynamics and feasibility of developing such a system, demonstrating that a PI-controlled EMB prototype can achieve response times competitive with or better than existing EHB systems. However it highlights the need for more robust mechanical design and advanced control strategies to achieve full scale deployment of Brake-by-Wire (BBW) technology.</p>
        `,
        features: [
            "3 Newton BLDC Motor",
            "ESP32 & Texas Instruments DRV8301",
            "CAN Bus Communication",
            "PI Controller",
            "Matlab & Simulink",
            "Custom 3D printed Gearbox and 3D printed & wooden Housing"
        ],
        sketchfab: null
    },
    {
        id: "penguin-protector",
        title: "Penguin Protector",
        thumbnail: "projects/penguin-protector/penguin.jpg",
        images: [
            { src: "projects/penguin-protector/penguin.jpg", caption: "Penguin Protector main image" },
            { src: "projects/penguin-protector/sysdiag.png", caption: "System Diagram" },
            { src: "projects/penguin-protector/casing front.jpg", caption: "3D Printed Enclosure" },
            { src: "projects/penguin-protector/ml.jpeg", caption: "Machine Learning Inference" }
        ],
        description: `
            <p><strong>A project focused on protecting penguins using technology.</strong></p>
            <p>As part of the UCT EEE4113F course, the De Hoop Nature Reserve requested that the students in the course design a system to protect the enclosure of the African Penguins from animals breaking into the enclosure fence. As the detection subsystem, I designed an edge-computing system that uses a Raspberry Pi Zero 2W, with two passive infrared motion sensors and a Raspberry Pi IR camera to physically detect predators at the fence. The motion sensors pick up movement as an animal approaches the fence and trigger the camera to record what is happening. The Raspberry Pi then uses a custom pipeline of machine learning code that uses a YOLOv5 and TensorFlow model to locally identify and classify the animal, and if a predator is detected, will send a UART message to the deterrent subsystem, as well as log the image and metadata to an online user-interface dashboard.</p>
        `,
        features: [
            "Custom machine learning models using TensorFlow and YOLOv5",
            "Machine learning deployment for low-spec hardware using TensorFlow Lite",
            "Edge computing and optimisation for Raspberry Pi Zero",
            "Python backend",
            "Motion sensors and UART connectivity"
        ],
        sketchfab: "https://sketchfab.com/3d-models/penguin-pi-v10-f62a0a36e78f4bcaab536681b0e7edad/embed"
    },
    {
        id: "inkhome",
        title: "InkHome",
        thumbnail: "projects/inkhome/inkhome.jpeg",
        images: [
            { src: "projects/inkhome/inkhome.jpeg", caption: "InkHome main image" }
        ],
        description: `
            <p><strong>InkHome is my smart home e-ink controller.</strong></p>
            <p>The problem with making everything voice and phone controlled is that they are always voice and phone controlled. My solution to this was to do what an engineer does and go full circle and reinvent the light switch. But this is no ordinary light switch; based off a build I saw on YouTube, I wanted to create a device that controls anything that is on my HomeAssistant. With an ESP32, E-ink display, buttons, rotary encoder, and an addressable LED strip, InkHome lets the user control any device or automation in HomeAssistant using the buttons or dial, using MQTT as the backend communication. The E-Ink display adds a sense of class, requiring ambient light to see it, giving the device a more realistic feel. It updates its icons as you use it with live device updates, current Spotify songs, and progress of automations. The LEDs animate around the button that you press and give real-time feedback for volume or song progress. It is then housed in a custom 3D printed snap-close enclosure with satisfying clicky buttons and a white insert in the front plate to diffuse the LEDs, and has a brass outer plate for a premium touch. I genuinely lost hair on this project, having to learn many skills for each and every part, and I am always improving on it, but I am happy with my glorified light switch.</p>
        `,
        features: [
            "ESP32, E-ink Display, Buttons, Rotary Encoder, Addressable LED Strip",
            "MQTT & HomeAssistant",
            "Custom 3D printed enclosure"
        ],
        sketchfab: "https://sketchfab.com/models/da096bae30c148fdaa09534d8ece8a41/embed"
    },
    {
        id: "micromouse-maze-solver",
        title: "Micromouse Maze Solver",
        thumbnail: "projects/micromouse/micromouse.jpg",
        images: [
            { src: "projects/micromouse/micromouse.jpg", caption: "Micromouse robot in a maze." }
        ],
        description: "<p>A classic robotics challenge: build an autonomous robot that can solve a maze from start to finish.</p>",
        features: ["Pathfinding algorithms (e.g., Flood-fill)", "Motor control", "Sensor integration"],
        sketchfab: null
    },
    {
        id: "mmWave",
        title: "mmWave Presence Detection",
        thumbnail: "projects/mmWave/mmWave.png",
        images: [
            { src: "projects/mmWave/mmWave.png", caption: "mmWave CAD render" },
            { src: "projects/mmWave/mmWave_real.jpeg", caption: "mmWave Actual Device" },
        ],
        description: `
            <p><strong>A human presence detector uisng mmWave Radar for still and moving target detection</strong></p>
            <p>This project uses a LD2410c mmWave radar detector coupled to an ESP32-C3 mini to create a standalone Wi-Fi presence detection sensor. Built on the ESPHome platform, it allows uses a radar module to detect the presence of up to 3 humans within 5m of proxminity. This use of radar over conventional motion sensors allows me to run automations that don't require a person to move to lets say keep a light on. Because it also detects distance, the sensor runs different automations in HomeAssiatnt based on where a person is in the room, such as starting my PC when I sit down at my desk. </p>
        `,
        features: [
            "LD2410C mmWave Radar",
            "ESP32-C3 Mini",
            "Custom 3D printed enclosure",
            "ESPHome & HomeAssistant",

        ],
        sketchfab: null// "https://sketchfab.com/models/da096bae30c148fdaa09534d8ece8a41/embed"
    },
    
];