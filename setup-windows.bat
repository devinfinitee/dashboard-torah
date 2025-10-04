@echo off
echo ========================================
echo Torah Bot - Windows Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [INFO] Node.js and npm are installed
node --version
npm --version
echo.

REM Check for node_modules
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Running npm install...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] npm install failed!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [SUCCESS] Dependencies installed successfully!
) else (
    echo [INFO] node_modules found. Skipping npm install.
    echo [TIP] Run 'npm install' manually if you need to update dependencies.
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Or double-click: start-dev.bat
echo.
echo The server will open at http://localhost:5000
echo.
pause
