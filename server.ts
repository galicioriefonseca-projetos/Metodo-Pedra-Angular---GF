import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint para monitoramento de hospedagem (Cloud Run, Render, Kubernetes, etc.)
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'pedra-angular-landing',
  });
});

// Configuração para servir os arquivos estáticos compilados do Vite
const distPath = path.resolve(__dirname, 'dist');

app.use(express.static(distPath, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    // Cache imutável para assets com hash
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  },
}));

// Fallback SPA: qualquer rota não tratada entrega o index.html da pasta dist
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`[Pedra Angular] Servidor de hospedagem em execução na porta ${port}`);
});
