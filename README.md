[![version:@latest](https://img.shields.io/npm/v/bitbucket.svg?style=for-the-badge)](https://www.npmjs.com/package/bitbucket)
[![Documentation](https://img.shields.io/badge/docs-bitbucket.js-blue.svg?style=for-the-badge)](https://bitbucketjs.netlify.com)
[![License](https://img.shields.io/github/license/MunifTanjim/node-bitbucket.svg?style=for-the-badge)](https://github.com/MunifTanjim/node-bitbucket/blob/master/LICENSE)

# Bitbucket.js

Bitbucket API client for Browser and Node.js

Bitbucket API docs: [https://api.bitbucket.org](https://api.bitbucket.org)

---

**BITBUCKET CLOUD API CHANGING NOTICE**: [https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr)  
**BITBUCKET CLOUD API MIGRATION GUIDE**: [https://developer.atlassian.com/cloud/bitbucket/bbc-gdpr-api-migration-guide](https://developer.atlassian.com/cloud/bitbucket/bbc-gdpr-api-migration-guide)

[**BREAKING CHANGES FOR API NAME**](https://github.com/MunifTanjim/node-bitbucket/blob/master/v1_API_NAME_CHANGES.md): Unfortunately, API Name changes were published on the following minor version updates: `v1.8.0`, `v1.9.0`, `v1.10.0`. This type of changes won't happen again for minor version updates anymore.

---

## Installation

via **npm**:

```sh
$ npm install bitbucket --save
```

via **yarn**:

```sh
$ yarn add bitbucket
```

## Usage

### Browser

```html
<script src="https://unpkg.com/bitbucket/dist/bitbucket.min.js"></script>
<script>
  const bitbucket = new Bitbucket()
</script>
```

### Node

```js
const Bitbucket = require('bitbucket')

const bitbucket = new Bitbucket()
```

#### Client Options

You can set the APIs' `baseUrl` and modify some behaviors (e.g. request timeout etc.) by passing a clientOptions object to the `Bitbucket` constructor.

```js
const clientOptions = {
  baseUrl: 'https://api.bitbucket.org/2.0',
  headers: {},
  options: {
    timeout: 10
  }
}

const bitbucket = new Bitbucket(clientOptions)
```

This enables you to use `bitbucket` with both Bitbucket Cloud and Bitbucket Server.

#### Authentication

```js
bitbucket.authenticate({
  type: 'basic',
  username: 'username',
  password: 'password'
})
```

#### API Methods

**async/await**
```js
try {
  let { data, headers } = await bitbucket.<namespace>.<api>({ ...params })
} catch (err) {}
```

**Promise**
```js
bitbucket.<namespace>
  .<api>({ ...params })
  .then(({ data, headers }) => {})
  .catch(err => {})
```

**Callback**
```js
bitbucket.<namespace>.<api>({ ...params }, (err, { data, headers }) => {})
```

Notes:

- `<namespace>` is one of the _Namespace Names_
- `<api>` is one of the _API Names_

#### Namespace Names

`addon`, `hook_events`, `webhooks`, `repositories`, `branchrestrictions`, `commits`, `commitstatuses`, `issue_tracker`, `pullrequests`, `downloads`, `source`, `pipelines`, `refs`, `snippets`, `teams`, `projects`, `users`, `search`, `user`, `ssh`

#### API Names

Check API client docs: [https://bitbucketjs.netlify.com](https://bitbucketjs.netlify.com)

##### Examples

```js
bitbucket.repositories
  .list({ username: 'MunifTanjim' })
  .then(({ data, headers }) => console.log(data.values))
  .catch(err => console.error(err))
```

## Acknowledgement

This API client is heavily inspired by the **[`octokit/rest.js`](https://github.com/octokit/rest.js/)** and a lot of ideas are taken from there. So, thanks goes to the maintainer [Gregor Martynus](https://github.com/gr2m) and all the [awesome contributors](https://github.com/octokit/rest.js/graphs/contributors) of `octokit/rest.js`.

## License

Licensed under the MIT License. Check the [LICENSE](https://github.com/MunifTanjim/node-bitbucket/blob/master/LICENSE) file for details.
