//--------------------------- Guardian ---------------------------
// Guardar token y redireccionar al home al cargar la página

const logoutBtn = document.querySelector("#logout-btn") as HTMLInputElement;

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('token')) {
        // Redirect to login page
        window.location.href = '/'
    }
})
logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('token')
    // Redirect to login page
    window.location.href = '/'
})






























