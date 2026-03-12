# RdnWeb

This project has been upgraded to Angular 21 and should be built with the corresponding Angular CLI 21 release.
It now uses **bun** as the package manager instead of npm.  Make sure you have [bun](https://bun.sh/) installed and
run `bun install` in the project root before working with the code.


## Development server

With bun installed you can start the dev server using the familiar npm‑style commands:

```bash
bun run start       # equivalent to ng serve
# or
bun start           # bun automatically prefixes run for known script names
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
