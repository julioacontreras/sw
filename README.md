
# 🚀 Starwars Example

Application make with TENG (Typescript + ExpressJS + NuxtJS + GraphQL), enjoy!

More:
* Apollo GraphQL: https://www.apollographql.com/
* The Star Wars API: https://swapi.dev/
* Tailwind CSS: https://tailwindcss.com/
* Buefy CSS: https://buefy.org/documentation/start/
* Nuxt Composition API: https://composition-api.nuxtjs.org/ 
* Pinia Store: https://github.com/posva/pinia

*Dont forget set your `.env` in client and server*

## Getting started

### Starting server

create `.env` and put this `PORT=4000`

```bash
    cd server
    npm i       # install dependencies
    npm start   # start the application
```
### Starting client

create `.env` and put this `API_URL=http://localhost:4000`

```bash
    cd client
    npm i
    npm run generate:types # generate types to graphql
    npm run dev            # start application
```
