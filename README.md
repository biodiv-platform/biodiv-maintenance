# Maintainance Notice

A tiny express application for scheduled maintainance

- returns HTTP `503` page to notify crawlers that site is unavailable instead of just going blind
- return `Retry-After: x` header

## Installing

```sh
yarn install
yarn start
```

## References

https://yoast.com/http-503-site-maintenance-seo/
