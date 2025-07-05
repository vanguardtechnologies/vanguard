# Running Vanguard Web on Windows

## Quick Start

### Option 1: Using Command Prompt (Recommended)
1. Open Command Prompt (not PowerShell)
2. Navigate to project:
   ```cmd
   cd C:\Users\riz\Desktop\Vanguard\vanguard-web
   ```
3. Install dependencies (first time only):
   ```cmd
   npm install
   ```
4. Start the development server:
   ```cmd
   npm run dev
   ```
5. Open browser to: http://localhost:3000

### Option 2: Using the Batch File
1. Double-click `start-dev.bat` in Windows Explorer
2. Wait for the server to start
3. Open browser to: http://localhost:3000

### Option 3: Fix PowerShell (One-time setup)
1. Open PowerShell as Administrator
2. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Now you can use PowerShell normally

## Troubleshooting

### "next is not recognized" Error
Run `npm install` in the project directory first.

### Port 3000 Already in Use
1. Close any other applications using port 3000
2. Or change the port: `npm run dev -- -p 3001`

### Can't Connect to Server
- Make sure Windows Firewall isn't blocking Node.js
- Try http://127.0.0.1:3000 instead of localhost