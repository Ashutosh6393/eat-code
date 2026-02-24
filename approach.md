

- initialize next app
- install shadcn ui
- prisma initialization and dockerized db
- install prisma `pnpm i prisma --save-dev`
- install prisma client `pnpm i @prisma/client`
- initialize prisma `pnpm dlx prisma init`


Challange 1:

I was not able to connect to prisma docker container, when I was running migrate command it shows authentication failed. 

Solution: 
- remove the already running container
- remove the volume attached
- updated the output port in docker compose "5433:5432"
- used 127.0.0.1 insted of localhost in db_url

