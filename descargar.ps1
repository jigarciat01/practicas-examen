# Limpiar la pantalla
Clear-Host

Write-Host "--- DESCARGANDO CAMBIOS DE GITHUB ---" -ForegroundColor Cyan

# Intentar hacer pull
    
    $resultado = git pull origin main
    
    if ($resultado -match "Already up to date") {
        Write-Host ">> Tu repositorio ya esta actualizado." -ForegroundColor Green
    } else {
        Write-Host ">> Se han descargado nuevos cambios." -ForegroundColor Green
    }

Write-Host "--- PROCESO FINALIZADO ---" -ForegroundColor Cyan