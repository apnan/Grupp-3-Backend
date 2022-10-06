our 5th git action

# Grupp-3-Backend

santas action
our 3rd try on actions

Create backend project

```bash
 cd ~
```

```bash
mkdir Grupp-3-Backend
```

```bash
 cd Grupp-3-Backend
```

```bash
  npm init -y
```

```bash
  mv app.js server.js
```

```bash
 touch .env
```

```bash
 touch app.json
```

```bash
 touch Procfile
```



```bash
touch request.rest
```

```bash
mkdir routes
```

```bash
touch routes/Login.js
```

```bash
mkdir __tests__
```

```bash
touch ./__tests__/component.js
```



```bash
npm install express --save
```

```bash
npm install dotenv --save
```

```bash

npm install cors --save
```

```bash
npm install jsonwebtoken --save
```

```bash
npm install nodemon --save-dev
```
Install Jest:

```bash
npm install jest --save-dev
```

```bash
code .
```

Install swagger:


```bash
 npm install  swagger-jsdoc
```

```bash
npm install swagger-ui-express
```

Install husky:

```bash
npm pkg set scripts.prepare="husky install"
npm run prepare

npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit

```

In case of Error on Heroku
"Your account has reached its concurrent builds limit"

```bash
heroku plugins:install heroku-builds
heroku builds:cancel
heroku restart

```
Mongoose
```bash
npm install mongoose

```




