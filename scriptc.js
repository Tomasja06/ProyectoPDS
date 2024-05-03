document.getElementById("calculateButton").addEventListener("click", function() {
    const totalNotas = parseInt(prompt("Introduce el número total de notas del semestre:"));

    const notas = [];
    const porcentajes = [];

    for (let i = 0; i < totalNotas; i++) {
        const nota = parseFloat(prompt(`Introduce la calificación de la nota ${i + 1}:`));
        const porcentaje = parseFloat(prompt(`Introduce el porcentaje de la nota ${i + 1}:`));

        notas.push(nota);
        porcentajes.push(porcentaje);
    }

    let sumaNotas = 0;
    let sumaPorcentajes = 0;

    for (let i = 0; i < totalNotas; i++) {
        sumaNotas += notas[i] * (porcentajes[i] / 100);
        sumaPorcentajes += porcentajes[i];
    }

    const promedio = sumaNotas;

    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Notas';
    const headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Porcentaje';
    tableHeader.appendChild(headerCell1);
    tableHeader.appendChild(headerCell2);
    table.appendChild(tableHeader);

    for (let i = 0; i < totalNotas; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = `Nota ` + `${i+1}: ` + `${notas[i]}`;
        const cell2 = document.createElement('td');
        cell2.textContent = `${porcentajes[i]}%`;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    const promedioTable = document.createElement('table');
    const promedioRow = document.createElement('tr');
    const promedioCell = document.createElement('td');
    promedioCell.textContent = `Promedio: ${promedio}`;
    promedioRow.appendChild(promedioCell);
    promedioTable.appendChild(promedioRow);

    document.body.appendChild(table);
    document.body.appendChild(promedioTable);
});