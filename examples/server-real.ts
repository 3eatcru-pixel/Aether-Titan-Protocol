import { WebSocketServer, WebSocket } from 'ws';
import { SCS76Codec } from '../core/SCS76_Codec';
import { InputCodec } from '../core/InputCodec'; // Importante!

interface Player {
    id: number;
    ws: WebSocket;
    x: number; y: number;
    vx: number; vy: number;
    lastInputSeq: number;
}

class RealGameServer {
    private players = new Map<number, Player>();
    private nextPlayerId = 1;
    private simulationHz = 60;

    constructor(port = 8080) {
        const wss = new WebSocketServer({ port });
        console.log(`🚀 Aether-Titan Server rodando em ws://localhost:${port}`);

        wss.on('connection', (ws) => {
            const id = this.nextPlayerId++;
            // Spawn no centro
            this.players.set(id, { id, ws, x: 400, y: 300, vx: 0, vy: 0, lastInputSeq: 0 });
            
            ws.on('message', (data: Buffer) => this.handleInput(id, data));
            ws.on('close', () => this.players.delete(id));
        });

        // Loop de Snapshot (20Hz)
        setInterval(() => this.broadcastSnapshots(), 1000 / 20);
    }

    private handleInput(playerId: number, raw: Buffer) {
        const player = this.players.get(playerId);
        if (!player) return;

        // DECODE BINÁRIO v9.1.0
        const input = InputCodec.decode(new Uint8Array(raw));
        if (!input) return;

        const { inputSeq, dx, dy } = input;

        // Simulação simples com trava de velocidade
        player.vx = dx * 10; 
        player.vy = dy * 10;
        player.x += player.vx / this.simulationHz;
        player.y += player.vy / this.simulationHz;
        player.lastInputSeq = inputSeq;
    }

    private broadcastSnapshots() {
        const ts = Date.now();
        for (const player of this.players.values()) {
            const snapId = ts & 0xFFFF;
            const packet = SCS76Codec.encode(
                player.x, player.y,
                player.x - (player.vx/60), player.y - (player.vy/60),
                player.vx, player.vy,
                snapId, player.lastInputSeq, ts
            );
            player.ws.send(packet);
        }
    }
}

new RealGameServer(8080);
