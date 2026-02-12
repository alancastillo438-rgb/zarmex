const equiposPorCategoria = {
    "ZAR-CQP": [
        "ZAR-CQP-001","ZAR-CQP-002","ZAR-CQP-003","ZAR-CQP-003-2",
        "ZAR-CQP-004","ZAR-CQP-005","ZAR-CQP-006","ZAR-CQP-007",
        "ZAR-CQP-007-2","ZAR-CQP-007-3","ZAR-CQP-008","ZAR-CQP-008-1",
        "ZAR-CQP-008-2","ZAR-CQP-009","ZAR-CQP-010","ZAR-CQP-011",
        "ZAR-CQP-012","ZAR-CQP-012-2","ZAR-CQP-013","ZAR-CQP-014",
        "ZAR-CQP-015","ZAR-CQP-016","ZAR-CQP-017","ZAR-CQP-018",
        "ZAR-CQP-019","ZAR-CQP-019-2","ZAR-CQP-020","ZAR-CQP-021"
    ],
    "ZAR-FTA": ["ZAR-FTA-027","ZAR-FTA-028","ZAR-FTA-029"],
    "ZAR-GNA": ["ZAR-GNA-034","ZAR-GNA-035"],
    "ZAR-OTN": ["ZAR-OTN-022","ZAR-OTN-023","ZAR-OTN-024","ZAR-OTN-025","ZAR-OTN-026"],
    "ZAR-PDA": ["ZAR-PDA-030","ZAR-PDA-031","ZAR-PDA-032","ZAR-PDA-033"]
};

document.getElementById("tipo_maquina").addEventListener("change", function () {
    const categoria = this.value;
    const selectEquipo = document.getElementById("codigo_equipo");

    selectEquipo.innerHTML = '<option value="">Seleccione un equipo</option>';

    if (!equiposPorCategoria[categoria]) return;

    equiposPorCategoria[categoria].forEach(codigo => {
        const option = document.createElement("option");
        option.value = codigo;
        option.textContent = codigo;
        selectEquipo.appendChild(option);
    });
});
