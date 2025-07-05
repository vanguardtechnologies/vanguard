@echo off
echo Starting Vanguard Technology Development Server...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting Next.js development server...
echo.
echo Your website will be available at:
echo   - http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
call npm run dev