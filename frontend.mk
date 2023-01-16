frontend-build:
	npm run build

services/front-end/node_modules/.bin/ng:
	cd services/front-end && npm install

frontend-install: services/front-end/node_modules/.bin/ng

frontend-dev: services/front-end/node_modules/.bin/ng
	cd services/front-end && npm run start

$PHONY: frontend-build frontend-dev frontend-install
