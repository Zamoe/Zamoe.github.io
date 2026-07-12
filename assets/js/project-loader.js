document.addEventListener('DOMContentLoaded', () => {
    // --- MODAL LOGIC ---
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    const modalCaption = document.getElementById('img-modal-caption');
    const closeModal = document.getElementById('img-modal-close');

    window.openImageModal = (src, alt) => {
        modal.style.display = 'flex';
        modalImg.src = src;
        modalImg.alt = alt;
        modalCaption.textContent = alt;
    };

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    modal.onclick = (e) => {
        if (e.target.id === 'img-modal') {
            modal.style.display = 'none';
        }
    };

    // --- DYNAMIC CONTENT LOADER ---
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    if (!projectId) {
        document.body.innerHTML = '<h1>Project not found.</h1><a href="../index.html">Go back</a>';
        return;
    }

    const projectData = projectsData.find(p => p.id === projectId);

    if (!projectData) {
        document.body.innerHTML = '<h1>Project not found.</h1><a href="../index.html">Go back</a>';
        return;
    }

    // Set page title
    document.title = projectData.title;

    // Populate content
    document.getElementById('project-title').textContent = projectData.title;
    document.getElementById('project-description').innerHTML = projectData.description;

    // Populate images
    const imagesContainer = document.getElementById('project-images');
    projectData.images.forEach(image => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = `../${image.src}`; // Adjust path relative to project.html
        img.alt = image.caption;
        img.onclick = () => openImageModal(img.src, img.alt);

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = image.caption;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        imagesContainer.appendChild(figure);
    });

    // Populate features
    if (projectData.features && projectData.features.length > 0) {
        const featuresContainer = document.getElementById('project-features');
        const featuresList = document.getElementById('features-list');
        projectData.features.forEach(featureText => {
            const li = document.createElement('li');
            li.textContent = featureText;
            featuresList.appendChild(li);
        });
        featuresContainer.style.display = 'block';
    }

    // Populate Sketchfab
    if (projectData.sketchfab) {
        const sketchfabContainer = document.getElementById('sketchfab-viewer');
        sketchfabContainer.innerHTML = `<iframe title="${projectData.title} 3D Model" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" width="100%" height="400" src="${projectData.sketchfab}"></iframe>`;
        sketchfabContainer.style.display = 'block';
    }
});