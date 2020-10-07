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

INSTALLATION:

In the same directory as your package.json file, create or edit an .npmrc file to include a line specifying GitHub Packages URL and the account owner. Replace OWNER with the name of the user or organization account that owns the repository containing your project.

```
registry=https://npm.pkg.github.com/OWNER
```

Add to package.json

```
"publishConfig": {
  "registry":"https://npm.pkg.github.com"
},
```

And

```
"repository" : {
    "type" : "git",
    "url": "ssh://git@github.com/OWNER/REPOSITORY.git",
    "directory": "packages/name"
  },
```

Change the name of the package

```
"name": "@OWNER/test-pkg",
```

Configure package.json in your project to use the package you are installing. To add your package dependencies to the package.json file for GitHub Packages, specify the full-scoped package name, such as @my-org/server. For packages from npmjs.com, specify the full name, such as @babel/core or @lodash. For example, this following package.json uses the @octo-org/octo-app package as a dependency.

```
npm i -D @maarten/test-pkg
```
