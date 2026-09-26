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

    // --- Cargar y mostrar unidades ---
    const unidadesContainer = document.getElementById('unidades-container');
    
    // Definimos las unidades aquí (esto podría venir de data.js también)
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
                <div>
                    <h3>${unidad.titulo}</h3>
                    <p>${unidad.descripcion}</p>
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