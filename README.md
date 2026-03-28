# 🚪 Rilievo Porte Interne

**App mobile per il rilievo misure porte interne** — dal cantiere al foglio Google in un tocco.

Pensata per posatori e serramentisti, permette di compilare le misure dal telefono e inviarle via WhatsApp, email o direttamente in un foglio Google Sheets centralizzato.

[**→ Prova la Demo**](https://serena-infissi.github.io/rilievo-porte/demo/)

---

## Caratteristiche

🔧 **Un solo file HTML** — nessun framework, nessun server, nessuna build. Trascina su Netlify e sei online.

📐 **Interfaccia cantiere** — pulsanti grandi, numeri leggibili, ottimizzata per schermi piccoli e dita da lavoro.

📊 **Google Sheets integrato** — i rilievi arrivano in tempo reale nel tuo foglio Google. Zero trascrizioni.

💬 **Invio multiplo** — WhatsApp, email, copia-incolla, CSV. Il posatore sceglie il metodo che preferisce.

📱 **Installabile come app** — aggiungila alla Home del telefono. Si apre a schermo intero come un'app nativa.

🔄 **Duplica e vai** — porte uguali? Duplica e modifica solo quello che cambia. Pulsante "porta successiva" integrato.

🆓 **Gratuita e open source** — nessun abbonamento, nessun limite, nessuna raccolta dati.

---

## Installazione rapida (5 minuti)

### 1. Pubblica l'app

Scarica [`demo/index.html`](demo/index.html), mettilo in una cartella e trascinala su [Netlify](https://app.netlify.com):

```
rilievo-porte/
  └── index.html
```

In 10 secondi hai un URL tipo `https://rilievo-porte.netlify.app`.

### 2. (Opzionale) Collega Google Sheets

Per ricevere i rilievi in un foglio centralizzato:

1. Crea un foglio Google
2. Vai in **Estensioni → Apps Script**
3. Incolla il contenuto di [`google-apps-script.js`](google-apps-script.js)
4. **Esegui deployment → Nuovo deployment → App web → Chiunque**
5. Copia l'URL e inseriscilo nelle ⚙️ Impostazioni dell'app

### 3. Distribuisci ai posatori

Manda il link via WhatsApp:

```
Apri il link e aggiungilo alla Home:
• Android: menu ⋮ → "Aggiungi a schermata Home"
• iPhone: pulsante ⬆ → "Aggiungi a Home"
```

---

## Struttura del rilievo

Ogni rilievo contiene:

| Campo | Descrizione |
|-------|-------------|
| Cliente | Nome e cognome |
| Data ordine | Data dell'ordine |
| Consegna | Data richiesta |
| Riferimento | Codice o riferimento interno |
| Posatore | Chi esegue il rilievo |

Per ogni porta:

| Campo | Descrizione |
|-------|-------------|
| Altezza | In centimetri |
| Larghezza | In centimetri |
| Spessore muro | In centimetri |
| Mano | DX o SX |
| Quantità | Numero di porte uguali |
| Note | Descrizione libera |

---

## Personalizzazione

**Colore principale** — cerca `#8B2500` nell'`index.html` e sostituiscilo con il colore della tua azienda.

**Logo** — modifica il testo "SERENA INFISSI" nell'header.

**WhatsApp fisso** — cambia `https://wa.me/?text=` in `https://wa.me/39XXXXXXXXXX?text=` per inviare sempre allo stesso numero.

**Campi aggiuntivi** — aggiungi proprietà in `EMPTY_DOOR()` e i relativi input nel form.

---

## Stack tecnico

- **Frontend**: React 18 (da CDN), inline styles, zero dipendenze
- **Backend**: Google Apps Script (opzionale, gratuito)
- **Hosting**: qualsiasi hosting statico (Netlify, GitHub Pages, Vercel)
- **PWA**: manifest + meta tags per installazione su Home

---

## Licenza

MIT — usa, modifica e distribuisci liberamente.

---

> Realizzato per **Serena Infissi** — progetto open source per la comunità dei serramentisti.
