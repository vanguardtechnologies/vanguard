# PowerShell Execution Policy Fix Script
# Run this script as Administrator to fix npm command issues

Write-Host "PowerShell Execution Policy Fix for Vanguard Web" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""

# Check current execution policy
$currentPolicy = Get-ExecutionPolicy -Scope CurrentUser
Write-Host "Current execution policy for CurrentUser: $currentPolicy" -ForegroundColor Yellow

if ($currentPolicy -eq "Undefined" -or $currentPolicy -eq "Restricted") {
    Write-Host ""
    Write-Host "Fixing execution policy..." -ForegroundColor Cyan
    
    try {
        Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
        Write-Host "✓ Execution policy set to RemoteSigned for CurrentUser" -ForegroundColor Green
        Write-Host ""
        Write-Host "You can now run npm commands in PowerShell!" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Failed to set execution policy" -ForegroundColor Red
        Write-Host "Please run PowerShell as Administrator and try again" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "✓ Execution policy is already configured correctly!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Press any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")