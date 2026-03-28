/*
 * Rilievo Porte - Google Apps Script v2
 * Gestisce sia GET che POST per massima compatibilità
 */

function doPost(e) {
  try {
    var data;
    if (e.parameter && e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return risposta({ status: "errore", messaggio: "Nessun dato ricevuto" });
    }
    return salvaRilievo(data);
  } catch (err) {
    return risposta({ status: "errore", messaggio: err.toString() });
  }
}

function doGet(e) {
  try {
    if (e.parameter && e.parameter.data) {
      var data = JSON.parse(e.parameter.data);
      return salvaRilievo(data);
    }
    return risposta({ status: "ok", messaggio: "Rilievo Porte attivo" });
  } catch (err) {
    return risposta({ status: "errore", messaggio: err.toString() });
  }
}

function salvaRilievo(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Se il foglio è vuoto, crea l'intestazione
  if (sheet.getLastRow() === 0) {
    creaIntestazione(sheet);
  }

  // Scrivi una riga per ogni porta
  var timestamp = new Date().toLocaleString("it-IT");
  var porte = data.porte || [];

  for (var i = 0; i < porte.length; i++) {
    var p = porte[i];
    sheet.appendRow([
      timestamp,
      data.posatore || "",
      data.cliente || "",
      data.dataOrdine || "",
      data.riferimento || "",
      data.consegna || "",
      i + 1,
      p.qty || 1,
      p.mano || "",
      p.alt || "",
      p.lar || "",
      p.spessore || "",
      p.desc || ""
    ]);
  }

  sheet.autoResizeColumns(1, 13);
  return risposta({ status: "ok", righe: porte.length });
}

function risposta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function creaIntestazione(sheet) {
  sheet.appendRow([
    "Data Invio", "Posatore", "Cliente", "Data Ordine",
    "Riferimento", "Consegna", "Pos", "Q.tà", "Mano",
    "Altezza cm", "Larghezza cm", "Spessore Muro cm", "Descrizione"
  ]);
  var headerRange = sheet.getRange(1, 1, 1, 13);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#8B2500");
  headerRange.setFontColor("#FFFFFF");
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 13);
}

// Funzione di test: eseguila per creare le intestazioni
function testSetup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  creaIntestazione(sheet);
}
