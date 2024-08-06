.PHONY: install
install:
	npm ci

init: install

.PHONY: run
run:
	npm run dev
