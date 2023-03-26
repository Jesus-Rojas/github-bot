# Github bot

Automatized faker commits in git

![image](https://user-images.githubusercontent.com/57029059/227749802-d0053402-9706-4ecb-8cbf-7e4fb3b7b51c.png)

## Requirements

- Node
- Git

## Before execute
In package.json
```json
{
  "type": "module",
  "dependencies": {
    "@jesus-rojas/github-bot": "^1.0.4"
  }
}
```

In index.js
```js
import { makeCommit } from '@jesus-rojas/github-bot'

makeCommit(10)
```

## Execute in (Terminal | Powershell)

```console
npm i
git init
node index.js
```