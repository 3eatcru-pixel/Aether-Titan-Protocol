# Aether-Titan Protocol v9.1.0 – Pro Netcode

**Company:** 3eaCru  
**Author:** Marcelo A. Ferreira Jr  
**Location:** Londrina – PR, Brazil – ZIP 86082-540  
**Email:** 3eatcru@gmail.com  
**Website:** [www.3eatcru.com](https://www.3eatcru.com)

---

## 🚀 What is it?
A full multiplayer netcode stack with prediction, reconciliation, rollback, jitter buffer, binary input (4 bytes), adaptive delta codec SCS-76 v0.77, authoritative server + reconnection, and a playable WebSocket demo.

---

## 📦 Install
```bash
npm install @aether-titan/core
```

### Run demo
```bash
# 1) Build TS to JS for browser importmap
npx tsc core/*.ts transport/*.ts --target esnext --module esnext --moduleResolution node16

# 2) Start server (binário)
npx ts-node examples/server-real.ts

# 3) Serve static files
npx http-server -p 3000

# 4) Open dashboard
http://localhost:3000/dashboard.html
```

### Auto-Stress Test (10s + report)
- A demo dispara um teste automático após 1.5s, move diagonal, inverte direção aos 5s e gera um `.txt` com posição/seq a cada ~100ms.
- Use latência/jitter/perda no dashboard para validar predição, reconciliação e interpolação.

---

## ✅ Package contents
- `core/`: codec, prediction, reconciliation, rollback, buffers, interpolator, interest, deterministic RNG, smoother.
- `transport/`: WebSocket + connection manager + stub WebRTC.
- `platforms/`: web-worker bridge, Unity bridge stub.
- `native/`: CMake + minimal SCS76 encoder shim.
- `examples/`: `server-real.ts` (binário), `client-demo.html` (auto-stress + report).
- `dashboard.html`: painel para URL, simulação de rede, abrir demo e ler README.

---

## 🇧🇷 Resumo em Português
- Instalação: `npm install @aether-titan/core`
- Demo: `npx tsc core/*.ts transport/*.ts --target esnext --module esnext --moduleResolution node16 && npx ts-node examples/server-real.ts && npx http-server -p 3000` e abra `http://localhost:3000/dashboard.html`.
- Teste automático: começa sozinho em 1.5s, inverte direção aos 5s, termina aos 10s e baixa relatório `.txt` com posições e seqs.
- Binário: servidor e cliente usam `InputCodec` (4 bytes) para inputs.

© 2025 3eaCru – All rights reserved.
