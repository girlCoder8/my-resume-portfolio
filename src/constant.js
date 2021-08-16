const env = process.env.URL_ENV || 'development'

const mapApiUrl = {
  development: 'http://localhost:8000/v1',
  staging: 'https://api-sandbox.example.com/v1',
  production: 'https://api.example.com/v1',
}

module.exports = {
  BASE_API_URL: mapApiUrl[env],
}
