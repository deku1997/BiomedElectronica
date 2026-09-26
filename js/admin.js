// js/admin.js
document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión de administrador
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.rol !== 'admin') {
        window.location.href = 'index.html';
        return;
    }

    const usersTableBody = document.getElementById('users-table-body');

    // --- Función para cargar usuarios ---
    const loadUsers = () => {
        const users = JSON.parse(localStorage.getItem('biomedUsers')) || [];
        usersTableBody.innerHTML = '';

        if (users.length === 0) {
            usersTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay usuarios registrados.</td></tr>';
            return;
        }

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.seccion}</td>
                <td>${user.cedula}</td>
                <td>
                    <button class="btn-danger" data-index="${index}">Eliminar</button>
                </td>
            `;
            usersTableBody.appendChild(row);
        });

        // Añadir event listeners a los botones de eliminar
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                deleteUser(index);
            });
        });
    };

    // --- Función para eliminar un usuario ---
    const deleteUser = (index) => {
        const users = JSON.parse(localStorage.getItem('biomedUsers')) || [];
        const userToDelete = users[index];
        
        if (confirm(`¿Estás seguro de que quieres eliminar al usuario ${userToDelete.nombre} ${userToDelete.apellido}?`)) {
            users.splice(index, 1);
            localStorage.setItem('biomedUsers', JSON.stringify(users));
            loadUsers(); // Recargar la tabla
        }
    };

    // --- Cierre de sesión ---
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });

    // Cargar usuarios al iniciar
    loadUsers();
});