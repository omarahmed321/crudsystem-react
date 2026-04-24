@echo off
set /p repoLink="Enter GitHub repo link: "
node deploy.js %repoLink%.git
pause