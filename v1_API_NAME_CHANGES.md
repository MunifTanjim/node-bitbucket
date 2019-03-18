# Breaking Changes for API Name

Unfortunately, API Name changes were published on the following minor version updates:

- `v1.8.0`
- `v1.9.0`
- `v1.10.0`

This type of changes won't happen again for minor version updates anymore.

## v1.8.0

**deploy**
```
getAllKeys -> listKeys
```

**repositories**
```
getAllDeployKeys -> listDeployKeys
```

## v1.9.0

**teams**
```
listTeamPermissions       -> listPermissions
listRepositoryPermissions -> listPermissionsForRepos
```

**user**
```
listRepositoryPermissions -> listPermissionsForRepos
listTeamPermissions       -> listPermissionsForTeams
```

## v1.10.0

**commits**
```
fetchAll    -> listAlt
listFor     -> listAt
fetchAllFor ->listAtAlt
```

**pullrequests**
```
getForCommit    -> listForCommit
getActivityLog  -> listActivities
listActivityLog -> listActivitiesForRepo
```

**repositories**
```
getPullrequestsForCommit    -> listPullrequestsForCommit
fetchAllCommits             -> listCommitsAlt
listCommitsFor              -> listCommitsAt
fetchAllCommitsFor          -> listCommitsAtAlt
getPullRequestActivityLog   -> listPullRequestActivities
listPullRequestsActivityLog -> listPullRequestActivitiesForRepo
getSrcMainRoot              -> readSrcRoot
getSrc                      -> readSrc
```

**snippets**
```
deleteCommit   -> deleteAt
getCommit      -> getAt
updateCommit   -> updateAt
listCommitsFor -> getCommit
```

**source**
```
getMainRoot -> readRoot
get         -> read
```

**teams**
```
listMembers -> getAllMembers
```
