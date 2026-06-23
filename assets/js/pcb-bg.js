document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pcb-bg');
    if (!canvas) {
        console.error('Canvas element with id "pcb-bg" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    const traceColor = '#03723b'; // Using your primary green color
    const particleColor = '#33ff99';

    let nodes = [];
    let traces = [];
    let particles = [];

    const config = {
        nodeSize: 2,
        gridGap: 50,
        traceWidth: 1,
        particleSize: 1.5,
        particleSpeed: 0.5,
        particleCount: 100,
        maxTraceLength: 4, // Max number of segments for a trace
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    }

    function createGrid() {
        nodes = [];
        for (let y = config.gridGap; y < canvas.height - config.gridGap; y += config.gridGap) {
            for (let x = config.gridGap; x < canvas.width - config.gridGap; x += config.gridGap) {
                nodes.push({ x, y });
            }
        }
    }

    function createTraces() {
        traces = [];
        let availableNodes = [...nodes];

        for (let i = 0; i < availableNodes.length / 2; i++) {
            const startNodeIndex = Math.floor(Math.random() * availableNodes.length);
            const startNode = availableNodes.splice(startNodeIndex, 1)[0];

            if (!startNode) continue;

            let currentNode = startNode;
            const tracePath = [currentNode];
            const traceLength = 2 + Math.floor(Math.random() * (config.maxTraceLength - 1));

            for (let j = 0; j < traceLength; j++) {
                const neighbors = availableNodes.filter(n =>
                    (Math.abs(n.x - currentNode.x) <= config.gridGap && n.y === currentNode.y) ||
                    (Math.abs(n.y - currentNode.y) <= config.gridGap && n.x === currentNode.x)
                );

                if (neighbors.length === 0) break;

                const nextNodeIndex = Math.floor(Math.random() * neighbors.length);
                const nextNode = neighbors[nextNodeIndex];
                
                const nodeToRemoveIndex = availableNodes.findIndex(n => n.x === nextNode.x && n.y === nextNode.y);
                if (nodeToRemoveIndex > -1) {
                    availableNodes.splice(nodeToRemoveIndex, 1);
                }

                tracePath.push(nextNode);
                currentNode = nextNode;
            }

            if (tracePath.length > 1) {
                traces.push({ path: tracePath });
            }
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            if (traces.length === 0) return;
            const trace = traces[Math.floor(Math.random() * traces.length)];
            particles.push({
                trace: trace,
                segment: 0,
                progress: Math.random(),
            });
        }
    }

    function init() {
        createGrid();
        createTraces();
        createParticles();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw traces
        ctx.strokeStyle = traceColor;
        ctx.lineWidth = config.traceWidth;
        traces.forEach(trace => {
            ctx.beginPath();
            ctx.moveTo(trace.path[0].x, trace.path[0].y);
            for (let i = 1; i < trace.path.length; i++) {
                ctx.lineTo(trace.path[i].x, trace.path[i].y);
            }
            ctx.stroke();
        });

        // Draw nodes
        ctx.fillStyle = traceColor;
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, config.nodeSize, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw and update particles
        particles.forEach(p => {
            const path = p.trace.path;
            const start = path[p.segment];
            const end = path[p.segment + 1];

            if (!start || !end) { // Reset particle at the end of a trace
                p.segment = 0;
                p.progress = 0;
                return;
            }

            const dx = end.x - start.x;
            const dy = end.y - start.y;
            const x = start.x + dx * p.progress;
            const y = start.y + dy * p.progress;

            ctx.beginPath();
            ctx.arc(x, y, config.particleSize, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.shadowColor = particleColor;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            p.progress += config.particleSpeed / Math.sqrt(dx * dx + dy * dy);

            if (p.progress >= 1) {
                p.progress = 0;
                p.segment++;
                if (p.segment >= path.length - 1) {
                    // Particle reached the end, reset it on a new random trace
                    const newTrace = traces[Math.floor(Math.random() * traces.length)];
                    p.trace = newTrace;
                    p.segment = 0;
                }
            }
        });
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
});