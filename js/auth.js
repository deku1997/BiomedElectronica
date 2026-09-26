// js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos del DOM ---
    const tabs = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    // --- Gestión de Pestañas ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${target}-form`) {
                    form.classList.add('active');
                }
            });
            
            // Limpiar mensajes al cambiar de pestaña
            loginMessage.textContent = '';
            registerMessage.textContent = '';
        });
    });

    // --- Función para obtener todos los usuarios ---
    const getUsers = () => {
        const users = localStorage.getItem('biomedUsers');
        return users ? JSON.parse(users) : [];
    };

    // --- Función para guardar usuarios ---
    const saveUsers = (users) => {
        localStorage.setItem('biomedUsers', JSON.stringify(users));
    };

    // --- Lógica de Registro ---
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('reg-nombre').value.trim();
        const apellido = document.getElementById('reg-apellido').value.trim();
        const seccion = document.getElementById('reg-seccion').value.trim();
        const cedula = document.getElementById('reg-cedula').value.trim();
        const password = document.getElementById('reg-password').value;

        // Validaciones básicas
        if (!nombre || !apellido || !seccion || !cedula || !password) {
            registerMessage.textContent = 'Todos los campos son obligatorios.';
            registerMessage.className = 'message error';
            return;
        }

        if (password.length < 4) {
            registerMessage.textContent = 'La contraseña debe tener al menos 4 caracteres.';
            registerMessage.className = 'message error';
            return;
        }

        const users = getUsers();

        // Verificar si la cédula ya está registrada
        if (users.some(user => user.cedula === cedula)) {
            registerMessage.textContent = 'Esta cédula ya está registrada.';
            registerMessage.className = 'message error';
            return;
        }

        // Crear nuevo usuario
        const newUser = { nombre, apellido, seccion, cedula, password };
        
        // Si la cédula es "admin", asignar rol de administrador
        if (cedula.toLowerCase() === 'admin') {
            newUser.rol = 'admin';
        } else {
            newUser.rol = 'estudiante';
        }

        users.push(newUser);
        saveUsers(users);

        registerMessage.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        registerMessage.className = 'message success';
        
        // Limpiar formulario y cambiar a pestaña de login después de un breve retraso
        setTimeout(() => {
            registerForm.reset();
            document.querySelector('[data-tab="login"]').click();
            document.getElementById('login-cedula').value = cedula; // Rellenar cédula en login
        }, 1500);
    });

    // --- Lógica de Inicio de Sesión ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cedula = document.getElementById('login-cedula').value.trim();
        const password = document.getElementById('login-password').value;

        if (!cedula || !password) {
            loginMessage.textContent = 'Ingresa tu cédula y contraseña.';
            loginMessage.className = 'message error';
            return;
        }

        const users = getUsers();
        const user = users.find(u => u.cedula === cedula && u.password === password);

        if (!user) {
            loginMessage.textContent = 'Cédula o contraseña incorrectas.';
            loginMessage.className = 'message error';
            return;
        }

        // Guardar sesión
        localStorage.setItem('currentUser', JSON.stringify(user));
        loginMessage.textContent = '¡Bienvenido! Redirigiendo...';
        loginMessage.className = 'message success';

        // Redirigir según el rol
        setTimeout(() => {
            if (user.rol === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'dashboard.html';
            }
        }, 800);
    });

    // --- Verificación de sesión al cargar la página ---
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        if (user.rol === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    }
});