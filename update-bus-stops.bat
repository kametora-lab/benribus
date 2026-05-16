@echo off
cd /d "%~dp0"

echo =========================================
echo Updating bus stops data...
echo =========================================
echo.

node update-stops.mjs

echo.
echo =========================================
echo Update completed successfully.
echo Press any key to exit.
echo =========================================
pause >nul
