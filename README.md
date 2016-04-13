# Brunch on Rails example application (no server rendering)
Minimal and Simple setup to use Brunch (http://brunch.io/) with Rails asset pipeline to compile and render react on ES6 dynamically on runtime without any gems.

Check out the `app/assets/components` folder
```bash
src: Contains all react components splitted in directories (same namespace as rails views)
utils: Some utilities classes and functions to dynamically render react component
```
## Features
* React with ES6 syntax
* Babel transpiler
* Basic ActionCable integration
* NPM support
* Bower support
* Code watching

## Configuration
More documentation can be found here for brunch: https://github.com/brunch/brunch/blob/master/docs/config.md#files

## Running
```bash
git clone git@github.com:gauravtiwari/brunch_on_rails.git
cd brunch_on_rails
bundle install
chmod 777 start
./start
# Or Alternatively
bundle exec foreman start
```
