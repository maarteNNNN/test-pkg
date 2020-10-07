Add register of github to `~/.npmrc`

IMPORTANT: TOKEN should contain all repo entities and write and read packages
```
//npm.pkg.github.com/:_authToken=TOKEN
```

login to the registry:

```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
