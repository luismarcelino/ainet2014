function showPanels(panelId) {

    if (isNaN(panelId)) {
        panelId = 1;
    }

    var panels = ["corpoClinicoPanel", "acordosPanel", "artigosNoticiasPanel"];
    document.getElementById(selectedPanel).className = " ";
    document.getElementById(panelId).className = "active";

    for (var i = 0; i < panels.length; i++) {
        document.getElementById(panels[i] + selectedPanel).style.display = "none";
        document.getElementById(panels[i] + panelId).style.display = "block";
    }

    selectedPanel = panelId;
}

var selectedPanel = 1;