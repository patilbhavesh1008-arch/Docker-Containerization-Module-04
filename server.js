const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Docker Module 04';

const DATA_DIR = '/app/data';
const DATA_FILE = path.join(DATA_DIR, 'data.txt');

fs.mkdirSync(DATA_DIR, { recursive: true });

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'application/json');

    if (url.pathname === '/health') {
        return res.end(JSON.stringify({ status: 'healthy' }));
    }

    if (url.pathname === '/save') {
        const text = url.searchParams.get('text') || 'Docker data';

        fs.appendFileSync(DATA_FILE, text + '\n');

        return res.end(JSON.stringify({
            message: 'Data saved successfully',
            saved: text
        }));
    }

    if (url.pathname === '/data') {
        const data = fs.existsSync(DATA_FILE)
            ? fs.readFileSync(DATA_FILE, 'utf8')
            : '';

        return res.end(JSON.stringify({ data }));
    }

    res.end(JSON.stringify({
        message: MESSAGE,
        application: 'Docker Containerization Project',
        endpoints: ['/health', '/save?text=hello', '/data']
    }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Application running on port ${PORT}`);
});
