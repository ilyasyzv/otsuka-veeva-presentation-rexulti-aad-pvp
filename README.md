# otsuka-veeva-presentation-Rexulti-AAD-PVP

#Main links
* github link: https://github.com/OAPI-Commercial-IT/otsuka-veeva-presentation-Rexulti-AAD-PVP
* epic link: https://owp.atlassian.net/browse/DF-29539
* veeva CLM link:
* veeva shared slide link:



#Run the project from veeva-clm/:

nvm use
npm i
npm run dev

#Build the project:
The Tech branch has the scale code according to veeva requirements, so we need to build from tech.

git checkout tech
git pull --rebase origin main
npm run build




## How to configure PHPStorm/WebStorm to work with Webpack Aliases

1. Install the **MDX** plugin for the PHPStorm/WebStorm.
2. Go to **Languages & Frameworks > JavaScript > Webpack**, chose **Manually** and specify the path to your **webpack.config.js** file.
3. Save changes.
4. If you see the message **Run webpack configuration?** press **Trust project and run**.
5. Enjoy!
