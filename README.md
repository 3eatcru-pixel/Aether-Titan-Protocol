# Aether-Titan Protocol v9.1.0 – Pro Netcode

**Company:** 3eaCru  
**Author:** Marcelo A. Ferreira Jr  
**Location:** Londrina – PR, Brazil – ZIP 86082-540  
**Email:** 3eatcru@gmail.com  
**Website:** [www.3eatcru.com](https://www.3eatcru.com)

---

## 🚀 What is it?

**Aether-Titan Protocol** is a full multiplayer netcode stack featuring:

- **SCS-76 Codec v0.77** – adaptive delta compression with movement prediction and `ackInputSeq` in the header
- **Client Prediction** – near-zero perceived latency
- **Smooth Reconciliation** – error correction without hard teleports
- **Rollback + replay** – deterministic correction
- **Jitter buffer + interpolation** – fluid remote motion
- **Binary input** – 4 bytes per input packet
- **Authoritative server** with basic anti-cheat
- **Robust reconnection** (exponential backoff)
- **Playable demo** (HTML5 + canvas + WASD)

---

## 📦 Installation

```bash
npm install @aether-titan/core
```

### Demo
```bash
npm run demo
# open http://localhost:3000/examples/client-demo.html
```

📞 Business contact: 3eatcru@gmail.com | www.3eatcru.com  
© 2025 3eaCru – All rights reserved.

---

## ✅ How to create the `.zip`

1. Create a folder named `aether-titan-v9.1.0`
2. Recreate the directory structure listed in this repo
3. Copy each content into the corresponding file
4. Zip the folder

You now have the complete package to compare with previous versions.

---

## 🇧🇷 Versão em Português (resumo)

O **Aether-Titan Protocol** é uma solução completa de netcode para jogos multiplayer, com codec SCS-76 v0.77, predição de cliente, reconciliação suave, rollback, jitter buffer, inputs binários (4 bytes), servidor autoritativo com anti-cheat básico, reconexão com backoff e demo jogável em HTML5.  
Instalação: `npm install @aether-titan/core`  
Demo: `npm run demo` e acesse `http://localhost:3000/examples/client-demo.html`.  
Contato: 3eatcru@gmail.com | www.3eatcru.com  
© 2025 3eaCru – Todos os direitos reservados.
