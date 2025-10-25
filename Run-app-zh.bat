@echo off
setlocal enabledelayedexpansion

:: ��ʼ������
set count=0
set use_conda=0

:: ���ȳ���ʹ�� where python ���� Python ����
for /f "tokens=*" %%a in ('where python 2^>nul') do (
    set /a count+=1
    set "python!count!=%%a"
    set "python_path_!count!=%%a"
)

:: ��� where python û���ҵ������� conda env list
if !count! equ 0 (
    echo ���ڲ��� conda ����...
    for /f "tokens=1* delims= " %%a in ('conda env list ^| findstr /r /v "^#"') do (
        if not "%%a"=="" if not "%%a"=="base" (
            set /a count+=1
            set "python!count!=%%a"
            set "python_path_!count!=%%b"
            set use_conda=1
        )
    )
)

:: ���û���ҵ��κ� Python ����
if !count! equ 0 (
    echo û�п��õ� Python ����
    echo ���Ȱ�װ Python �� Anaconda/Miniconda
    pause
    exit /b 1
)

:: ���ֻ��һ�� Python ������ֱ��ʹ��
if !count! equ 1 (
    if !use_conda! equ 1 (
        echo �ҵ�һ�� conda ����: !python1!
        call conda activate "!python1!"
    ) else (
        echo �ҵ�һ�� Python ����: !python1!
        set selected_python=!python1!
    )
    goto :start_server
)

:: ����ж�����������û�ѡ��
echo �ҵ������������ѡ��һ��:
echo.
for /l %%i in (1,1,!count!) do (
    echo [%%i] !python%%i!
)
echo.

:select
set /p choice="����������ѡ�� python ���л��� (1-!count!): "
if !choice! lss 1 (
    echo ѡ����Ч
    goto :select
)
if !choice! gtr !count! (
    echo ѡ����Ч
    goto :select
)

:: �����û�ѡ��
for /l %%i in (1,1,!count!) do (
    if !choice! equ %%i (
        if !use_conda! equ 1 (
            echo ���ڼ��� conda ����: !python%%i!
            call conda activate "!python%%i!"
        ) else (
            set selected_python=!python%%i!
        )
    )
)

:start_server
:: ���Ҫ�������ļ��������޸�����
set "default_page=index.html"
set "server_url=http://127.0.0.1:8000/%default_page%"


echo.
echo ========================================
echo ���� HTTP ������������
echo ���ʵ�ַ: %server_url%
echo 
echo �� Ctrl+C ֹͣ����
echo ========================================
echo.


:: �ȴ����������������������Զ����أ�
start "" "%server_url%"

:: �ڵ�ǰ��������������
if !use_conda! equ 1 (
    python -m http.server 8000 --bind 127.0.0.1
) else (
    "!selected_python!" -m http.server 8000 --bind 127.0.0.1
)

pause