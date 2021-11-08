.PHONY: generate
generate:
	hexo generate
	rm -rf ../articles
	mkdir -p ../articles
	cp -r public/* ../articles

.PHONY: clean
	hexo clean
