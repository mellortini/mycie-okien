# Kryształ – mycie okien

Statyczna strona (jeden plik `index.html` + `assets/`), bez zależności i bez budowania.

## Lokalnie

```
node serve.mjs        # http://localhost:5175
```

## Cloudflare

- **Workers** (konfiguracja w `wrangler.jsonc`): Build command – puste, Deploy command – `npx wrangler deploy`.
  Pliki pomijane przy publikacji: `.assetsignore`.
- **Pages** (alternatywnie): Framework preset **None**, Build command puste, Build output directory `/`.
