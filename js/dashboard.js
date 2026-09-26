// js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.rol !== 'estudiante') {
        window.location.href = 'index.html';
        return;
    }

    // Mostrar nombre del usuario
    document.getElementById('user-name-display').textContent = `${user.nombre} ${user.apellido}`;

    // Iconos SVG para cada unidad
    const icons = {
        unidad1: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
        unidad2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>`,
        unidad3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
    };

    // --- Cargar y mostrar unidades ---
    const unidadesContainer = document.getElementById('unidades-container');
    
    const unidades = [
        { id: 'unidad1', titulo: 'Unidad I: Amplificadores Operacionales', descripcion: 'Análisis de circuitos con amplificadores operacionales: configuraciones básicas, aplicaciones y características.' },
        { id: 'unidad2', titulo: 'Unidad II: Filtros Activos', descripcion: 'Filtros activos de primer y segundo orden: función de transferencia, diagramas de Bode y diseño.' },
        { id: 'unidad3', titulo: 'Unidad III: Tiristores', descripcion: 'Tiristores y conmutadores de control: SCR, TRIAC, DIAC y aplicaciones de control de potencia.' }
    ];

    if (unidadesContainer) {
        unidades.forEach(unidad => {
            const card = document.createElement('div');
            card.className = 'unidad-card';
            card.innerHTML = `
                <div class="unidad-card-icon">${icons[unidad.id] || ''}</div>
                <h3>${unidad.titulo}</h3>
                <p>${unidad.descripcion}</p>
                <div class="unidad-card-footer">
                    <span>Explorar Unidad</span>
                    <span>→</span>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.href = `unidad.html?unidad=${unidad.id}`;
            });
            unidadesContainer.appendChild(card);
        });
    }

    // --- Cierre de sesión ---
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
});