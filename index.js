document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    
    let imc = peso / (altura * altura);
    let imcRedondeado = imc.toFixed(2);

    
    let clasificacion = "";
    let recomendacion = "";

    if (imc < 18.5) {
        clasificacion = "Peso bajo";
        recomendacion = "Es recomendable que consultes con un nutricionista para aumentar tu masa corporal.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Peso normal";
        recomendacion = "¡Felicidades! Mantén una dieta equilibrada y ejercicio regular.";
    } else {
        clasificacion = "Sobrepeso";
        recomendacion = "Considera ajustar tu dieta y aumentar tu actividad física.";
    }

    
    document.getElementById("resultado").innerHTML = `
        <h2>Resultado del IMC</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>IMC:</strong> ${imcRedondeado}</p>
        <p><strong>Clasificación:</strong> ${clasificacion}</p>
        <p><strong>Recomendación:</strong> ${recomendacion}</p>
    `;
});