# Limpiar la pantalla
Clear-Host

Write-Host "--- INICIANDO SUBIDA A GITHUB ---" -ForegroundColor Cyan

# 1. Anadir archivos al stage
Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add .

# 2. Solicitar mensaje del commit
$mensaje = Read-Host ">> Escribe el mensaje del commit"


# 3. Hacer commit y push
Write-Host "Guardando cambios" -ForegroundColor Yellow
git commit -m "$mensaje"

Write-Host "Subiendo a la nube" -ForegroundColor Yellow
git push origin main

# Sin acentos para evitar errores de codificacion
Write-Host "--- ACTUALIZACION COMPLETADA CON EXITO ---" -ForegroundColor Green