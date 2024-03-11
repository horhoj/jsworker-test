# тестовое для компании jsworker.

# демо

https://jsworker-test.vercel.app/list-of-people?page=1

# Используется: 

vite, react, typescript, redux-tookit, docker(docker-compose), nginx (для раздачи статики билда), eslint + prettier

# запуск

npm i

npm run dev

# запуск в докере (протестировано только на линукс, нужны make, docker, docker-compose)

запуск в режиме разработки (порт 3007)

make ddev

запуск в режиме раздачи билда через nginx (порт 87)

make init


разумеется порты можно поменять в настройках
