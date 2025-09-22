
@echo off
setlocal

set CERT_FILE=certs\local.crt

if not exist %CERT_FILE% (
    echo ❌ No se encontró el archivo %CERT_FILE%
    pause
    exit /b 1
)

echo 📥 Importando certificado en el almacen Raíz de confianza...
certutil -addstore -f Root %CERT_FILE%

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Hubo un error al instalar el certificado.
) else (
    echo ✅ Certificado instalado como confiable.
    echo 👉 Reinicia tu navegador y abre https://nodeapp.local
)

pause
endlocal
