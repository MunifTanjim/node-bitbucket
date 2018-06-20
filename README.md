# BitBucket.js

BitBucket API client for Browser and Node.js

BitBucket API docs: [https://api.bitbucket.org](https://api.bitbucket.org)

## Usage

```js
const bitbucket = new BitBucket()

bitbucket.authenticate({
  type: 'basic',
  username: 'username',
  password: 'password'
})

bitbucket.repositories
  .list({ username: 'username' })
  .then(({ data, headers }) => console.log(data.values))
  .catch(err => console.error(err))
```

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

### Namespace Names

`addon`, `hook_events`, `webhooks`, `repositories`, `branchrestrictions`, `commits`, `commitstatuses`, `issue_tracker`, `pullrequests`, `downloads`, `source`, `pipelines`, `refs`, `snippets`, `teams`, `projects`, `users`, `search`, `user`, `ssh`

### API Names

Check API client docs: [https://bitbucketjs.netlify.com](https://bitbucketjs.netlify.com)

## Acknowledgement

This API client is heavily inspired by the **[`octokit/rest.js`](https://github.com/octokit/rest.js/)** and a lot of ideas are taken from there. So, thanks goes to the maintainer [Gregor Martynus](https://github.com/gr2m) and all the [awesome contributors](https://github.com/octokit/rest.js/graphs/contributors) of `octokit/rest.js`.

## License

Licensed under the MIT License. Check the [LICENSE](https://github.com/MunifTanjim/node-bitbucket/blob/master/LICENSE) file for details.
