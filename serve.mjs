// Podgląd: node mycie-okien/serve.mjs -> http://localhost:5175
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp' };
createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[\/])+/, '');
  if (p.endsWith('\\') || p.endsWith('/')) p = join(p, 'index.html');
  try { const d = await readFile(join(import.meta.dirname, p)); res.writeHead(200, { 'Content-Type': types[extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404).end('Not found'); }
}).listen(process.env.PORT || 5175, () => console.log('http://localhost:' + (process.env.PORT || 5175)));
