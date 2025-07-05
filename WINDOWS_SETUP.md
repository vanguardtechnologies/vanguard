# Windows Setup Guide for Vanguard Web

## Quick Start

### Option 1: Using Command Prompt (Recommended)
1. Open **Command Prompt** (not PowerShell)
2. Navigate to project: `cd C:\Users\riz\Desktop\Vanguard\vanguard-web`
3. Double-click `start-dev-cmd.bat` or run `npm run dev`
4. Open browser to `http://localhost:3000`

### Option 2: Fix PowerShell (One-time setup)
1. Right-click `fix-powershell.ps1` → Run with PowerShell
2. If blocked, open PowerShell as Administrator and run:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Now you can use PowerShell normally

## Troubleshooting

### Can't access localhost from WSL2
If running from WSL2 and localhost doesn't work:

1. **Try these URLs:**
   - `http://localhost:3000`
   - `http://127.0.0.1:3000`
   - WSL2 IP: Run `hostname -I` in WSL to get IP, then use `http://[WSL-IP]:3000`

2. **Fix WSL2 Networking (Windows 11 22H2+):**
   - We've created `.wslconfig` in your user directory
   - Restart WSL: Open PowerShell and run `wsl --shutdown`
   - Start WSL again

3. **Check Windows Firewall:**
   - Windows Defender Firewall might block the connection
   - Add an exception for Node.js

### PowerShell Script Execution Disabled
If you see "running scripts is disabled on this system":

1. **Use Command Prompt instead** (easiest solution)
2. **Or fix PowerShell:**
   - Run PowerShell as Administrator
   - Execute: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - Type `Y` to confirm

### Port 3000 Already in Use
Next.js will automatically use the next available port (3001, 3002, etc.)
Check the console output for the actual URL.

## Development Commands

### From Command Prompt or Fixed PowerShell:
```cmd
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint
```

### Using Batch Files (Double-click to run):
- `start-dev.bat` - Original dev server starter
- `start-dev-cmd.bat` - Enhanced version with better error handling

## Alternative Terminals

1. **Git Bash** - If you have Git installed
2. **Windows Terminal** - Modern terminal from Microsoft Store
3. **VS Code Terminal** - Set default shell to cmd or Git Bash
4. **cmder** - Popular third-party terminal

## WSL2 vs Windows Native

### Running from Windows (Recommended for beginners):
- Faster file access
- No networking issues
- Direct localhost access
- Use Command Prompt or fixed PowerShell

### Running from WSL2:
- Linux-like environment
- Better for Linux deployment targets
- May have localhost access issues (fixed by .wslconfig)
- Slower file access on Windows drives

## Common Issues & Solutions

### Issue: "npm" is not recognized
**Solution:** Node.js not installed or not in PATH
- Download Node.js from https://nodejs.org/
- Restart terminal after installation

### Issue: EACCES or permission errors
**Solution:** 
- On Windows: Run terminal as Administrator
- In WSL2: Use `sudo` for global installs

### Issue: Slow performance in WSL2
**Solution:** 
- Move project to WSL2 filesystem: `/home/username/projects/`
- Not Windows path: `/mnt/c/...`

### Issue: Hot reload not working
**Solution:**
- Check if antivirus is blocking file watchers
- Add project folder to antivirus exceptions

## Contact Support

If you encounter issues not covered here:
1. Check the console for specific error messages
2. Report issues at: https://github.com/anthropics/claude-code/issues
3. Include your Windows version and whether using WSL2 or native