@echo off
title Vanguard Web Development Server

echo ============================================
echo    Vanguard Technology Development Server
echo ============================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    echo.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies!
        echo Please check your internet connection and try again.
        echo.
        pause
        exit /b 1
    )
    echo.
)

echo Starting Next.js development server...
echo.
echo Your website will be available at:
echo   - http://localhost:3000
echo   - http://127.0.0.1:3000
echo.
echo If port 3000 is in use, Next.js will automatically use the next available port.
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

REM Start the development server
call npm run dev

REM If the server stops, pause so the user can see any error messages
if errorlevel 1 (
    echo.
    echo ERROR: The development server stopped with an error.
    echo Please check the error message above.
    echo.
    pause
)