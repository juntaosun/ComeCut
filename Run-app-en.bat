@echo off
setlocal enabledelayedexpansion

:: Initialize variables
set count=0
set use_conda=0

:: First try to find Python environments using where python
for /f "tokens=*" %%a in ('where python 2^>nul') do (
    set /a count+=1
    set "python!count!=%%a"
    set "python_path_!count!=%%a"
)

:: If where python found nothing, try conda env list
if !count! equ 0 (
    echo Searching for conda environments...
    for /f "tokens=1* delims= " %%a in ('conda env list ^| findstr /r /v "^#"') do (
        if not "%%a"=="" if not "%%a"=="base" (
            set /a count+=1
            set "python!count!=%%a"
            set "python_path_!count!=%%b"
            set use_conda=1
        )
    )
)

:: If no Python environment was found
if !count! equ 0 (
    echo No available Python environment found
    echo Please install Python or Anaconda/Miniconda first
    pause
    exit /b 1
)

:: If only one Python environment is found, use it directly
if !count! equ 1 (
    if !use_conda! equ 1 (
        echo Found one conda environment: !python1!
        call conda activate "!python1!"
    ) else (
        echo Found one Python environment: !python1!
        set selected_python=!python1!
    )
    goto :start_server
)

:: If multiple environments are found, let user choose
echo Multiple environments found, please select one:
echo.
for /l %%i in (1,1,!count!) do (
    echo [%%i] !python%%i!
)
echo.

:select
set /p choice="Please enter a number to select Python runtime environment (1-!count!): "
if !choice! lss 1 (
    echo Invalid selection
    goto :select
)
if !choice! gtr !count! (
    echo Invalid selection
    goto :select
)

:: Process user selection
for /l %%i in (1,1,!count!) do (
    if !choice! equ %%i (
        if !use_conda! equ 1 (
            echo Activating conda environment: !python%%i!
            call conda activate "!python%%i!"
        ) else (
            set selected_python=!python%%i!
        )
    )
)

:start_server
:: Modify here if you want to open a different file
set "default_page=index.html"
set "server_url=http://127.0.0.1:8000/%default_page%"

echo.
echo ========================================
echo Local HTTP server started!
echo Access URL: %server_url%
echo 
echo Press Ctrl+C to stop the server
echo ========================================
echo.

:: Open browser first (it will automatically load after server starts)
start "" "%server_url%"

:: Start server in current window
if !use_conda! equ 1 (
    python -m http.server 8000 --bind 127.0.0.1
) else (
    "!selected_python!" -m http.server 8000 --bind 127.0.0.1
)

pause