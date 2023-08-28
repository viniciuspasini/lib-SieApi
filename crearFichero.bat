@echo off

c:
cd C:\Programs\lib-SieApi

set Prog=crearFicheroSieApi
call:LOG INICIO %Prog%
npm run crear_fichero
call:LOG FIN %Prog%

goto:eof

:LOG
echo %date:~0,10%,%time:~0,8%,%~1 %~2 >> C:\CronJobs\crearFicheroSieApi.log
goto:eof