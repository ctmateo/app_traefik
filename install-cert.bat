@echo off
setlocal
set CERT_FILE=local.crt

if not exist %CERT_FILE% (
    echo ❌ No se encontró %CERT_FILE%
    pause
    exit /b 1
)

echo 📥 Importando certificado...
certutil -addstore -f "Root" %CERT_FILE%

if %errorlevel% neq 0 (
    echo ❌ Error al importar el certificado.
    exit /b 1
) else (
    echo ✅ Certificado importado exitosamente.
)

echo ✅ Certificado instalado como confiable.
echo 👉 Reinicia tu navegador y abre https://nodeapp.local
pause
endlocal
