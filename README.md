# run Aplication

`$ npm i`
`$ npm start`

# run Test

`$ npm run test`


# API 

## create a short URL
```sh
curl --location --request POST 'localhost:3000/api/urls' \
--header 'authorization: test' \
--header 'Content-Type: application/json' \
--data-raw '{
    "origUrl": "http://www.google.com"
}'
```

## get one short URL
```sh
curl --location --request GET 'localhost:3000/api/urls/b' \
--header 'authorization: test'
```


## get 100 top short URLs
```sh
curl --location --request GET 'localhost:3000/api/urls/' \
--header 'authorization: test'
```