# design_lib
Design library for projects made for Jose Fernando.

# Dependencies
## For local (instructions)
It depends of react in the host application. It is not work, you need to install react in your host application. If is installed as a local dependency, you need
to link the react library depencency to the host react dependency. To do this

- Go to your host `node_modules/react` and do an `npm link`
- Run `npm ls -g --depth=0`. If you see a global dependencie called react pointing to your host application react dependecie, you are in the right way
- Go in the host application to the design_lib node modules with `cd node_modules/design_lib/node_modules/react` and do a `npm link react`
- By this way your library react dependency is pointing to your host application dependency and you can use hooks
