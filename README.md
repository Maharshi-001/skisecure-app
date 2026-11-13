# SkieSecure — Production Deployment Guide

A high-performance Next.js 16 + React 19 + Tailwind CSS application for **SkieSecure**.

---

## 🌐 Deploying on Hostinger

### Method 1: Hostinger Web Hosting / Cloud Hosting (hPanel Node.js)
1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** > Click **Manage** next to your domain.
3. In the sidebar search for **Node.js** (under Advanced/Website).
4. Configure the Node.js application:
   - **Node.js version**: Select `v20.x` or `v22.x`.
   - **Application Root**: `/home/username/domains/yourdomain.com/public_html` (or your chosen path).
   - **Application Startup File**: `server.js` (or use `npm start`).
5. **Upload the files**:
   - Upload this project into the application root directory using Hostinger File Manager or Git/SSH.
6. **Install dependencies & build**:
   - Open Hostinger SSH/Terminal or the hPanel Node.js terminal:
     ```bash
     npm install
     npm run build
     ```
7. Click **Restart** or **Start** in the Node.js dashboard.

---

### Method 2: Hostinger VPS (Ubuntu/Debian with PM2 & Nginx)
1. Connect to your VPS via SSH:
   ```bash
   ssh root@YOUR_SERVER_IP
   ```
2. Ensure Node.js 20+ and PM2 are installed:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```
3. Upload/extract the project to `/var/www/skisecure`:
   ```bash
   cd /var/www/skisecure
   npm install
   npm run build
   ```
4. Start with PM2:
   ```bash
   pm2 start npm --name "skisecure" -- start
   pm2 save
   pm2 startup
   ```
5. Configure Nginx to reverse proxy port `3000` to your domain.

---

## 🛠 Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)
