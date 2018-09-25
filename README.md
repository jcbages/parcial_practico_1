# Parcial practico 1

## How to run?

Install dependencies

```sh
$ npm install
```

Run cypress

```sh
$ npm run cypress:open
```

Run tests from there

 - `monkey.spec.js` which is the target for Monkey Testing.
 - `*.spec.js` which has the integrations tests.
 
In order to run Android monkey test, the command is
 
```sh
adb shell monkey -p de.danoeh.antennapod -s 0 -v 10000
```

The parameters for this command are:

 - Seed is 0
 - Number of events is 10000
 
