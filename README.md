# otsuka-veeva-presentation-Rexulti-AAD-PVP

#Main links
github link: https://github.com/OAPI-Commercial-IT/otsuka-veeva-presentation-Rexulti-AAD-PVP
epic link: https://owp.atlassian.net/browse/DF-29539
veeva CLM link:
veeva shared slide link:



#Run the project:

nvm use
npm i
npm run dev

#Build the project:
The Tech branch has the scale code according to veeva requirements, so we need to build from tech.

git checkout tech
git pull --rebase origin main
npm run build
