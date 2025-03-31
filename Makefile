default: help

help: # with thanks to Ben Rady
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

NODE_MODULES:=./node_modules/.npm-updated

$(NODE_MODULES): package.json package-lock.json
	npm i
	@rm -rf node_modules/.cache/esm/*
	@touch $@

src/public/favicon.ico: scripts/favicon.sh
	scripts/favicon.sh

.PHONY: prereqs
prereqs: $(NODE_MODULES) # src/public/favicon.ico

.PHONY: clean
clean:  ## Cleans up everything
	rm -rf node_modules

.PHONY: dev
dev: prereqs ## Runs the site as a developer; including live reload support and installation of git hooks
	npm run dev

.PHONY: build
build: prereqs ## Builds the website
	npm run build

.PHONY: format
format: prereqs ## Format files
	npm run format

.PHONY: test
test: prereqs ## runs tests
	npm run test
