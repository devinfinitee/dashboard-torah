@echo off
echo ========================================
echo  Starting Torah Bot Dashboard
echo ========================================
echo.
echo Checking dependencies...
echo.

REM Auto-install if needed
node scripts/ensure-install.cjs
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Dependency check failed!
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo.
echo The app will be available at:
echo   http://localhost:5000
echo.
echo Signup page: http://localhost:5000/signup
echo Login page: http://localhost:5000/login
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

npm run dev
