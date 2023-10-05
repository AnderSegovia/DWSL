function mostrarseleccion() {
    const departamentoSelect = document.getElementById("departamento");
    const generoSelect = document.getElementById("genero");
    const educacionSelect = document.getElementById("educacion");

    const seleccionDepartamento = Array.from(departamentoSelect.selectedOptions).map(option => option.value);
    const seleccionGenero = Array.from(generoSelect.selectedOptions).map(option => option.value);
    const seleccionEducacion = Array.from(educacionSelect.selectedOptions).map(option => option.value);

    alert(`Departamento Seleccionado: ${seleccionDepartamento.join(", ")}`);
    alert(`Género Seleccionado: ${seleccionGenero.join(", ")}`);
    alert(`Educación Seleccionada: ${seleccionEducacion.join(", ")}`);
}