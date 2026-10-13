@echo off
echo ========================================================
echo  PRESENTATION & COMMUNICATION ACADEMY
echo  Speak with Confidence. Present with Impact.
echo ========================================================
echo Opening application in default web browser...
start "" "%~dp0index.html"
echo.
echo Application opened! If you prefer running a local HTTP server,
echo execute serve.ps1 via PowerShell:
echo   powershell -ExecutionPolicy Bypass -File serve.ps1
echo ========================================================
pause
