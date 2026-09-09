@echo off
cd /d "%~dp0"
echo Installation des dependances...
call npm install
if errorlevel 1 pause & exit /b 1
echo Demarrage de Movie Explorer...
call npm run dev
pause
