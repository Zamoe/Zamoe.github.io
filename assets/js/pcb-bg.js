function interpolatePoints(points, t) {
    let total = 0, segLengths = [];
    for (let i = 0; i < points.length - 1; i++) {
        let dx = points[i+1][0] - points[i][0];
        let dy = points[i+1][1] - points[i][1];
        let len = Math.sqrt(dx*dx + dy*dy);
        segLengths.push(len);
        total += len;
    }
    let dist = t * total;
    let acc = 0;
    for (let i = 0; i < segLengths.length; i++) {
        if (acc + segLengths[i] >= dist) {
            let segT = (dist - acc) / segLengths[i];
            let x = points[i][0] + (points[i+1][0] - points[i][0]) * segT;
            let y = points[i][1] + (points[i+1][1] - points[i][1]) * segT;
            return {x, y};
        }
        acc += segLengths[i];
    }
    return {x: points[points.length-1][0], y: points[points.length-1][1]};
}

function animateDot(dotId, points, duration) {
    function step(ts) {
        let t = ((ts % duration) / duration);
        let pos = interpolatePoints(points, t);
        let dot = document.getElementById(dotId);
        if (dot) {
            dot.setAttribute('cx', pos.x);
            dot.setAttribute('cy', pos.y);
            dot.setAttribute('filter', 'url(#glow-dot)');
        }
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function() {
    animateDot('dot1', [[0,150],[300,150],[300,650],[1200,650]], 4000);
    animateDot('dot2', [[0,400],[500,400],[500,100],[1200,100]], 5000);
    animateDot('dot3', [[0,700],[700,700],[700,300],[1200,300]], 3500);
});