build:
	docker build -t lastskywalkerer/file-coin:dev .
run:
	docker run --network=host --name file-coin --rm lastskywalkerer/file-coin:dev
stop:
	docker stop file-coin
clear:
	docker container prune && docker image prune && docker rmi lastskywalkerer/file-coin:dev
push:
	docker push lastskywalkerer/file-coin:dev
deploy:
	heroku container:push web --app nest-file-coin
release:
	heroku container:release web --app nest-file-coin