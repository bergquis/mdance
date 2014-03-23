build:
	@./node_modules/.bin/grunt

production:
	@./node_modules/.bin/grunt prod

install:
	@npm install
	@./node_modules/.bin/bower install

.PHONY: build production
