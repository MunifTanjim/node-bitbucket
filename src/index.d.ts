/**
 * This declaration file requires TypeScript 2.1 or above.
 */

declare namespace BitBucket {
  type json = any
  type date = string

  export interface AnyResponse {
    data: json;
    meta: json;
  }

  export interface EmptyParams {
  }

  export interface Options {
    baseUrl?: string;
    headers?: {[header: string]: any};
    options?: json;
  }

  export interface AuthBasic {
    type: "basic";
    username: string;
    password: string;
  }

  export interface AuthAppPassword {
    type: "apppassword";
    username: string;
    password: string;
  }

  export interface AuthToken {
    type: "token";
    token: string;
  }

  export type Auth =
    | AuthBasic
    | AuthAppPassword
    | AuthToken;

  export type Link =
    | { next: string; }
    | { previous: string; }
    | string;

  export interface Callback {
    (error: Error | null, result: any): any;
  }

  export type BranchrestrictionsCreateParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type BranchrestrictionsDeleteParams =
    & {
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type BranchrestrictionsGetParams =
    & {
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type BranchrestrictionsGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type BranchrestrictionsUpdateParams =
    & {
      "_body": any;
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsCreateApprovalParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsDeleteApprovalParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsFetchAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type CommitsFetchAllForRevisionParams =
    & {
      "repo_slug": string;
      "revision": string;
      "username": string;
    };
  export type CommitsGetParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type CommitsGetAllCommentsParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsGetAllForRevisionParams =
    & {
      "repo_slug": string;
      "revision": string;
      "username": string;
    };
  export type CommitsGetCommentParams =
    & {
      "comment_id": number;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsGetDiffParams =
    & {
      "binary"?: boolean;
      "context"?: number;
      "ignore_whitespace"?: boolean;
      "path"?: string;
      "repo_slug": string;
      "spec": string;
      "username": string;
    };
  export type CommitsGetPatchParams =
    & {
      "repo_slug": string;
      "spec": string;
      "username": string;
    };
  export type CommitstatusesCreateBuildStatusParams =
    & {
      "_body"?: any;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitstatusesGetAllParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitstatusesGetAllPullRequestStatusesParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type CommitstatusesGetBuildStatusParams =
    & {
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitstatusesUpdateBuildStatusParams =
    & {
      "_body"?: any;
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type DownloadsCreateParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type DownloadsDeleteParams =
    & {
      "filename": string;
      "repo_slug": string;
      "username": string;
    };
  export type DownloadsGetParams =
    & {
      "filename": string;
      "repo_slug": string;
      "username": string;
    };
  export type DownloadsGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type HookEventsListAllParams =
    & {
      "subject_type": "user"|"repository"|"team";
    };
  export type IssueTrackerCreateParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateAttachmentsParams =
    & {
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateChangeParams =
    & {
      "_body": any;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateCommentParams =
    & {
      "_body": any;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerDeleteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerDeleteAttachmentParams =
    & {
      "issue_id": string;
      "path": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerDeleteCommentParams =
    & {
      "_body": any;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerDeleteVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerDeleteWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllAttachmentsParams =
    & {
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllChangesParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerGetAllCommentsParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllComponentsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllMilestonesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAllVersionsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetAttachmentParams =
    & {
      "issue_id": string;
      "path": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetChangeParams =
    & {
      "change_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetCommentParams =
    & {
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetComponentParams =
    & {
      "component_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetMilestoneParams =
    & {
      "milestone_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetVersionParams =
    & {
      "repo_slug": string;
      "username": string;
      "version_id": number;
    };
  export type IssueTrackerGetVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerGetWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerUpdateParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerUpdateCommentParams =
    & {
      "_body": any;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateKnownHostParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateVariableParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateVariableForTeamParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type PipelinesCreateVariableForUserParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type PipelinesDeleteKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesDeleteScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type PipelinesDeleteSshKeyPairParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesDeleteVariableParams =
    & {
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesDeleteVariableForTeamParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesDeleteVariableForUserParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesGetParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllKnownHostsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllScheduleExecutionsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllSchedulesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllStepsParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllVariablesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetAllVariablesForTeamParams =
    & {
      "username": string;
    };
  export type PipelinesGetAllVariablesForUserParams =
    & {
      "username": string;
    };
  export type PipelinesGetConfigParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type PipelinesGetSshKeyPairParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesGetStepParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "step_uuid": string;
      "username": string;
    };
  export type PipelinesGetStepLogParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "step_uuid": string;
      "username": string;
    };
  export type PipelinesGetVariableParams =
    & {
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesGetVariableForTeamParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesGetVariableForUserParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesStopParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateBuildNumberParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateConfigParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateKnownHostParams =
    & {
      "_body": any;
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type PipelinesUpdateSshKeyPairParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateVariableParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesUpdateVariableForTeamParams =
    & {
      "_body": any;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesUpdateVariableForUserParams =
    & {
      "_body": any;
      "username": string;
      "variable_uuid": string;
    };
  export type ProjectsCreateForTeamParams =
    & {
      "_body": any;
      "username": string;
    };
  export type ProjectsDeleteForTeamParams =
    & {
      "project_key": string;
      "username": string;
    };
  export type ProjectsGetAllForTeamParams =
    & {
      "username": string;
    };
  export type ProjectsGetForTeamParams =
    & {
      "project_key": string;
      "username": string;
    };
  export type ProjectsUpdateForTeamParams =
    & {
      "_body": any;
      "project_key": string;
      "username": string;
    };
  export type PullrequestsAddDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type PullrequestsCreateParams =
    & {
      "_body"?: any;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsCreateApprovalParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsDeclineParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsDeleteApprovalParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsDeleteDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type PullrequestsGetParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetActivityLogParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetAllParams =
    & {
      "repo_slug": string;
      "state"?: "MERGED"|"SUPERSEDED"|"OPEN"|"DECLINED";
      "username": string;
    };
  export type PullrequestsGetAllActivityLogParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetAllCommentsParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetAllCommitsParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetAllDefaultReviewersParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetAllStatusesParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetCommentParams =
    & {
      "comment_id": string;
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type PullrequestsGetDiffParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetDiffStatParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsGetPatchParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsMergeParams =
    & {
      "_body"?: any;
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsUpdateParams =
    & {
      "_body"?: any;
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RefsCreateBranchParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RefsCreateTagParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RefsDeleteBranchParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RefsDeleteTagParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RefsGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RefsGetAllBranchesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RefsGetAllTagsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RefsGetBranchParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RefsGetTagParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesAddDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type RepositoriesCreateParams =
    & {
      "_body"?: any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateBranchParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateBranchRestrictionParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateCommitApprovalParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateCommitBuildStatusParams =
    & {
      "_body"?: any;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateDownloadParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateForkParams =
    & {
      "_body"?: any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueAttachmentsParams =
    & {
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueChangeParams =
    & {
      "_body": any;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueCommentParams =
    & {
      "_body": any;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelinesKnownHostParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelinesScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelinesVariableParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePullRequestParams =
    & {
      "_body"?: any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePullRequestApprovalParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateSrcFileCommitParams =
    & {
      "author"?: string;
      "branch"?: string;
      "files"?: string;
      "message"?: string;
      "parents"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateTagParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateWebhookParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeclinePullRequestParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteParams =
    & {
      "redirect_to"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteBranchParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteBranchRestrictionParams =
    & {
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteCommitApprovalParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type RepositoriesDeleteDownloadParams =
    & {
      "filename": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteIssueParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteIssueAttachmentParams =
    & {
      "issue_id": string;
      "path": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteIssueCommentParams =
    & {
      "_body": any;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteIssueVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteIssueWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeletePipelinesKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeletePipelinesScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesDeletePipelinesSshKeyPairParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeletePipelinesVariableParams =
    & {
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type RepositoriesDeletePullRequestApprovalParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteTagParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeleteWebhookParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type RepositoriesFetchAllCommitsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesFetchAllCommitsForRevisionParams =
    & {
      "repo_slug": string;
      "revision": string;
      "username": string;
    };
  export type RepositoriesGetParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllParams =
    & {
      "role"?: "admin"|"contributor"|"member"|"owner";
      "username": string;
    };
  export type RepositoriesGetAllBranchRestrictionsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllBranchesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitCommentsParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitStatusesParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitsForRevisionParams =
    & {
      "repo_slug": string;
      "revision": string;
      "username": string;
    };
  export type RepositoriesGetAllDefaultReviewersParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllDownloadsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllForksParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssueAttachmentsParams =
    & {
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssueChangesParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesGetAllIssueCommentsParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssueComponentsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssueMilestonesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssueVersionsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllIssuesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type RepositoriesGetAllPipelineStepsParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPipelinesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPipelinesKnownHostsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPipelinesScheduleExecutionsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPipelinesSchedulesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPipelinesVariablesParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPullRequestCommentsParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPullRequestCommitsParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPullRequestStatusesParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPullRequestsParams =
    & {
      "repo_slug": string;
      "state"?: "MERGED"|"SUPERSEDED"|"OPEN"|"DECLINED";
      "username": string;
    };
  export type RepositoriesGetAllPullRequestsActivityLogParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllRefsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllTagsParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllWatchersParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllWebhooksParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetBranchParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetBranchRestrictionParams =
    & {
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetCommitParams =
    & {
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetCommitBuildStatusParams =
    & {
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetCommitCommentParams =
    & {
      "comment_id": number;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetDefaultReviewerParams =
    & {
      "repo_slug": string;
      "target_username": string;
      "username": string;
    };
  export type RepositoriesGetDiffParams =
    & {
      "binary"?: boolean;
      "context"?: number;
      "ignore_whitespace"?: boolean;
      "path"?: string;
      "repo_slug": string;
      "spec": string;
      "username": string;
    };
  export type RepositoriesGetDiffStatParams =
    & {
      "ignore_whitespace"?: boolean;
      "repo_slug": string;
      "spec": string;
      "username": string;
    };
  export type RepositoriesGetDownloadParams =
    & {
      "filename": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetFileHistoryParams =
    & {
      "node": string;
      "path": string;
      "q"?: string;
      "renames"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesGetIssueParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueAttachmentParams =
    & {
      "issue_id": string;
      "path": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueChangeParams =
    & {
      "change_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueCommentParams =
    & {
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueComponentParams =
    & {
      "component_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueMilestoneParams =
    & {
      "milestone_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueVersionParams =
    & {
      "repo_slug": string;
      "username": string;
      "version_id": number;
    };
  export type RepositoriesGetIssueVoteParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetIssueWatchParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPatchParams =
    & {
      "repo_slug": string;
      "spec": string;
      "username": string;
    };
  export type RepositoriesGetPipelineParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelineStepParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "step_uuid": string;
      "username": string;
    };
  export type RepositoriesGetPipelineStepLogParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "step_uuid": string;
      "username": string;
    };
  export type RepositoriesGetPipelinesConfigParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelinesKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelinesScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesGetPipelinesSshKeyPairParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelinesVariableParams =
    & {
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type RepositoriesGetPublicParams =
    & {
      "after"?: string;
    };
  export type RepositoriesGetPullRequestParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPullRequestActivityLogParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPullRequestCommentParams =
    & {
      "comment_id": string;
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPullRequestDiffParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPullRequestDiffStatParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPullRequestPatchParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetSrcParams =
    & {
      "format"?: "meta"|"rendered";
      "node": string;
      "path": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesGetSrcRootParams =
    & {
      "format"?: "meta";
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetTagParams =
    & {
      "name": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetWebhookParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type RepositoriesMergePullRequestParams =
    & {
      "_body"?: any;
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesStopPipelineParams =
    & {
      "pipeline_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateParams =
    & {
      "_body"?: any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateBranchRestrictionParams =
    & {
      "_body": any;
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateCommitBuildStatusParams =
    & {
      "_body"?: any;
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateIssueParams =
    & {
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateIssueCommentParams =
    & {
      "_body": any;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesBuildNumberParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesConfigParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesKnownHostParams =
    & {
      "_body": any;
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesSshKeyPairParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelinesVariableParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type RepositoriesUpdatePullRequestParams =
    & {
      "_body"?: any;
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateWebhookParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type SearchCodeOfTeamParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type SearchCodeOfUserParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type SnippetsCreateParams =
    & {
      "_body": any;
    };
  export type SnippetsCreateCommentParams =
    & {
      "_body": any;
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsCreateForUserParams =
    & {
      "_body": any;
      "username": string;
    };
  export type SnippetsCreateWatchParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsDeleteParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsDeleteCommentParams =
    & {
      "comment_id": string;
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsDeleteRevisionParams =
    & {
      "encoded_id": string;
      "node_id": string;
      "username": string;
    };
  export type SnippetsDeleteWatchParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetAllParams =
    & {
      "role"?: "owner"|"contributor"|"member";
    };
  export type SnippetsGetAllCommentsParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetAllCommitsParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetAllCommitsForRevisionParams =
    & {
      "encoded_id": string;
      "revision": string;
      "username": string;
    };
  export type SnippetsGetAllForUserParams =
    & {
      "role"?: "owner"|"contributor"|"member";
      "username": string;
    };
  export type SnippetsGetAllWatchersParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetCommentParams =
    & {
      "comment_id": string;
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsGetDiffParams =
    & {
      "encoded_id": string;
      "path"?: string;
      "revision": string;
      "username": string;
    };
  export type SnippetsGetFileParams =
    & {
      "encoded_id": string;
      "node_id": string;
      "path": string;
      "username": string;
    };
  export type SnippetsGetPatchParams =
    & {
      "encoded_id": string;
      "revision": string;
      "username": string;
    };
  export type SnippetsGetRevisionParams =
    & {
      "encoded_id": string;
      "node_id": string;
      "username": string;
    };
  export type SnippetsGetWatchParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsUpdateParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsUpdateCommentParams =
    & {
      "comment_id": string;
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsUpdateRevisionParams =
    & {
      "encoded_id": string;
      "node_id": string;
      "username": string;
    };
  export type SourceCreateFileCommitParams =
    & {
      "author"?: string;
      "branch"?: string;
      "files"?: string;
      "message"?: string;
      "parents"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type SourceGetParams =
    & {
      "format"?: "meta"|"rendered";
      "node": string;
      "path": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type SourceGetHistoryParams =
    & {
      "node": string;
      "path": string;
      "q"?: string;
      "renames"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type SourceGetRootParams =
    & {
      "format"?: "meta";
      "repo_slug": string;
      "username": string;
    };
  export type SshCreateForUserParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type SshGetAllForUserParams =
    & {
      "username": string;
    };
  export type TeamsCreatePipelinesVariableParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type TeamsCreateProjectParams =
    & {
      "_body": any;
      "username": string;
    };
  export type TeamsCreateWebhookParams =
    & {
      "username": string;
    };
  export type TeamsDeletePipelinesVariableParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type TeamsDeleteProjectParams =
    & {
      "project_key": string;
      "username": string;
    };
  export type TeamsDeleteWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type TeamsGetParams =
    & {
      "username": string;
    };
  export type TeamsGetAllParams =
    & {
      "role"?: "admin"|"contributor"|"member";
    };
  export type TeamsGetAllFollowersParams =
    & {
      "username": string;
    };
  export type TeamsGetAllFollowingParams =
    & {
      "username": string;
    };
  export type TeamsGetAllMembersParams =
    & {
      "username": string;
    };
  export type TeamsGetAllPipelinesVariablesParams =
    & {
      "username": string;
    };
  export type TeamsGetAllProjectsParams =
    & {
      "username": string;
    };
  export type TeamsGetAllRepositoriesParams =
    & {
      "username": string;
    };
  export type TeamsGetAllRepositoriesForUserParams =
    & {
      "username": string;
    };
  export type TeamsGetAllRepositoryPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsGetAllTeamPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsGetAllWebhooksParams =
    & {
      "username": string;
    };
  export type TeamsGetPipelinesVariableParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type TeamsGetProjectParams =
    & {
      "project_key": string;
      "username": string;
    };
  export type TeamsGetWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type TeamsSearchCodeParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type TeamsUpdatePipelinesVariableParams =
    & {
      "_body": any;
      "username": string;
      "variable_uuid": string;
    };
  export type TeamsUpdateProjectParams =
    & {
      "_body": any;
      "project_key": string;
      "username": string;
    };
  export type TeamsUpdateWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type UserGetAllRepositoryPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type UserGetAllTeamPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type UserGetEmailParams =
    & {
      "email": string;
    };
  export type UsersCreatePipelinesVariableParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type UsersCreateSshKeyParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type UsersCreateWebhookParams =
    & {
      "username": string;
    };
  export type UsersDeletePipelinesVariableParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type UsersDeleteWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type UsersGetParams =
    & {
      "username": string;
    };
  export type UsersGetAllFollowersParams =
    & {
      "username": string;
    };
  export type UsersGetAllFollowingParams =
    & {
      "username": string;
    };
  export type UsersGetAllPipelinesVariablesParams =
    & {
      "username": string;
    };
  export type UsersGetAllRepositoriesParams =
    & {
      "username": string;
    };
  export type UsersGetAllRepositoriesForTeamParams =
    & {
      "username": string;
    };
  export type UsersGetAllSshKeysParams =
    & {
      "username": string;
    };
  export type UsersGetAllWebhooksParams =
    & {
      "username": string;
    };
  export type UsersGetEmailForAuthedUserParams =
    & {
      "email": string;
    };
  export type UsersGetPipelinesVariableParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type UsersGetWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type UsersSearchCodeParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type UsersUpdatePipelinesVariableParams =
    & {
      "_body": any;
      "username": string;
      "variable_uuid": string;
    };
  export type UsersUpdateWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksCreateParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type WebhooksCreateForTeamParams =
    & {
      "username": string;
    };
  export type WebhooksCreateForUserParams =
    & {
      "username": string;
    };
  export type WebhooksDeleteParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type WebhooksDeleteForTeamParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksDeleteForUserParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksGetParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type WebhooksGetAllParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type WebhooksGetAllForTeamParams =
    & {
      "username": string;
    };
  export type WebhooksGetAllForUserParams =
    & {
      "username": string;
    };
  export type WebhooksGetForTeamParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksGetForUserParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksListAllParams =
    & {
      "subject_type": "user"|"repository"|"team";
    };
  export type WebhooksUpdateParams =
    & {
      "repo_slug": string;
      "uid": string;
      "username": string;
    };
  export type WebhooksUpdateForTeamParams =
    & {
      "uid": string;
      "username": string;
    };
  export type WebhooksUpdateForUserParams =
    & {
      "uid": string;
      "username": string;
    };
}

declare class BitBucket {
  constructor(options?: BitBucket.Options);
  authenticate(auth: BitBucket.Auth): void;

  nextPage(data: BitBucket.Link): string | undefined;
  previousPage(data: BitBucket.Link): string | undefined;
  getPage(url: BitBucket.Link, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;

  addon: {
  };
  branchrestrictions: {
    create(params: BitBucket.BranchrestrictionsCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.BranchrestrictionsDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.BranchrestrictionsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.BranchrestrictionsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.BranchrestrictionsUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  commits: {
    createApproval(params: BitBucket.CommitsCreateApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteApproval(params: BitBucket.CommitsDeleteApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    fetchAll(params: BitBucket.CommitsFetchAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    fetchAllForRevision(params: BitBucket.CommitsFetchAllForRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.CommitsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.CommitsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllComments(params: BitBucket.CommitsGetAllCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForRevision(params: BitBucket.CommitsGetAllForRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getComment(params: BitBucket.CommitsGetCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiff(params: BitBucket.CommitsGetDiffParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPatch(params: BitBucket.CommitsGetPatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  commitstatuses: {
    createBuildStatus(params: BitBucket.CommitstatusesCreateBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.CommitstatusesGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequestStatuses(params: BitBucket.CommitstatusesGetAllPullRequestStatusesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getBuildStatus(params: BitBucket.CommitstatusesGetBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateBuildStatus(params: BitBucket.CommitstatusesUpdateBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  downloads: {
    create(params: BitBucket.DownloadsCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.DownloadsDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.DownloadsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.DownloadsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  hookEvents: {
    listAll(params: BitBucket.HookEventsListAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  issueTracker: {
    create(params: BitBucket.IssueTrackerCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createAttachments(params: BitBucket.IssueTrackerCreateAttachmentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createChange(params: BitBucket.IssueTrackerCreateChangeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createComment(params: BitBucket.IssueTrackerCreateCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createVote(params: BitBucket.IssueTrackerCreateVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createWatch(params: BitBucket.IssueTrackerCreateWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.IssueTrackerDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteAttachment(params: BitBucket.IssueTrackerDeleteAttachmentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteComment(params: BitBucket.IssueTrackerDeleteCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteVote(params: BitBucket.IssueTrackerDeleteVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteWatch(params: BitBucket.IssueTrackerDeleteWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.IssueTrackerGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.IssueTrackerGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllAttachments(params: BitBucket.IssueTrackerGetAllAttachmentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllChanges(params: BitBucket.IssueTrackerGetAllChangesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllComments(params: BitBucket.IssueTrackerGetAllCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllComponents(params: BitBucket.IssueTrackerGetAllComponentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllMilestones(params: BitBucket.IssueTrackerGetAllMilestonesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllVersions(params: BitBucket.IssueTrackerGetAllVersionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAttachment(params: BitBucket.IssueTrackerGetAttachmentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getChange(params: BitBucket.IssueTrackerGetChangeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getComment(params: BitBucket.IssueTrackerGetCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getComponent(params: BitBucket.IssueTrackerGetComponentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getMilestone(params: BitBucket.IssueTrackerGetMilestoneParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getVersion(params: BitBucket.IssueTrackerGetVersionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getVote(params: BitBucket.IssueTrackerGetVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getWatch(params: BitBucket.IssueTrackerGetWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.IssueTrackerUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateComment(params: BitBucket.IssueTrackerUpdateCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  pipelines: {
    create(params: BitBucket.PipelinesCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createKnownHost(params: BitBucket.PipelinesCreateKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createSchedule(params: BitBucket.PipelinesCreateScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createVariable(params: BitBucket.PipelinesCreateVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createVariableForTeam(params: BitBucket.PipelinesCreateVariableForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createVariableForUser(params: BitBucket.PipelinesCreateVariableForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteKnownHost(params: BitBucket.PipelinesDeleteKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteSchedule(params: BitBucket.PipelinesDeleteScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteSshKeyPair(params: BitBucket.PipelinesDeleteSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteVariable(params: BitBucket.PipelinesDeleteVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteVariableForTeam(params: BitBucket.PipelinesDeleteVariableForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteVariableForUser(params: BitBucket.PipelinesDeleteVariableForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.PipelinesGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.PipelinesGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllKnownHosts(params: BitBucket.PipelinesGetAllKnownHostsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllScheduleExecutions(params: BitBucket.PipelinesGetAllScheduleExecutionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllSchedules(params: BitBucket.PipelinesGetAllSchedulesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllSteps(params: BitBucket.PipelinesGetAllStepsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllVariables(params: BitBucket.PipelinesGetAllVariablesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllVariablesForTeam(params: BitBucket.PipelinesGetAllVariablesForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllVariablesForUser(params: BitBucket.PipelinesGetAllVariablesForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getConfig(params: BitBucket.PipelinesGetConfigParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getKnownHost(params: BitBucket.PipelinesGetKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getSchedule(params: BitBucket.PipelinesGetScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getSshKeyPair(params: BitBucket.PipelinesGetSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getStep(params: BitBucket.PipelinesGetStepParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getStepLog(params: BitBucket.PipelinesGetStepLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getVariable(params: BitBucket.PipelinesGetVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getVariableForTeam(params: BitBucket.PipelinesGetVariableForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getVariableForUser(params: BitBucket.PipelinesGetVariableForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    stop(params: BitBucket.PipelinesStopParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateBuildNumber(params: BitBucket.PipelinesUpdateBuildNumberParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateConfig(params: BitBucket.PipelinesUpdateConfigParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateKnownHost(params: BitBucket.PipelinesUpdateKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateSchedule(params: BitBucket.PipelinesUpdateScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateSshKeyPair(params: BitBucket.PipelinesUpdateSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateVariable(params: BitBucket.PipelinesUpdateVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateVariableForTeam(params: BitBucket.PipelinesUpdateVariableForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateVariableForUser(params: BitBucket.PipelinesUpdateVariableForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  projects: {
    createForTeam(params: BitBucket.ProjectsCreateForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteForTeam(params: BitBucket.ProjectsDeleteForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForTeam(params: BitBucket.ProjectsGetAllForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getForTeam(params: BitBucket.ProjectsGetForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateForTeam(params: BitBucket.ProjectsUpdateForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  pullrequests: {
    addDefaultReviewer(params: BitBucket.PullrequestsAddDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    create(params: BitBucket.PullrequestsCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createApproval(params: BitBucket.PullrequestsCreateApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    decline(params: BitBucket.PullrequestsDeclineParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteApproval(params: BitBucket.PullrequestsDeleteApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteDefaultReviewer(params: BitBucket.PullrequestsDeleteDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.PullrequestsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getActivityLog(params: BitBucket.PullrequestsGetActivityLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.PullrequestsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllActivityLog(params: BitBucket.PullrequestsGetAllActivityLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllComments(params: BitBucket.PullrequestsGetAllCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommits(params: BitBucket.PullrequestsGetAllCommitsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllDefaultReviewers(params: BitBucket.PullrequestsGetAllDefaultReviewersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllStatuses(params: BitBucket.PullrequestsGetAllStatusesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getComment(params: BitBucket.PullrequestsGetCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDefaultReviewer(params: BitBucket.PullrequestsGetDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiff(params: BitBucket.PullrequestsGetDiffParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiffStat(params: BitBucket.PullrequestsGetDiffStatParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPatch(params: BitBucket.PullrequestsGetPatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    merge(params: BitBucket.PullrequestsMergeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.PullrequestsUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  refs: {
    createBranch(params: BitBucket.RefsCreateBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createTag(params: BitBucket.RefsCreateTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteBranch(params: BitBucket.RefsDeleteBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteTag(params: BitBucket.RefsDeleteTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.RefsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllBranches(params: BitBucket.RefsGetAllBranchesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllTags(params: BitBucket.RefsGetAllTagsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getBranch(params: BitBucket.RefsGetBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getTag(params: BitBucket.RefsGetTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  repositories: {
    addDefaultReviewer(params: BitBucket.RepositoriesAddDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    create(params: BitBucket.RepositoriesCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createBranch(params: BitBucket.RepositoriesCreateBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createBranchRestriction(params: BitBucket.RepositoriesCreateBranchRestrictionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createCommitApproval(params: BitBucket.RepositoriesCreateCommitApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createCommitBuildStatus(params: BitBucket.RepositoriesCreateCommitBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createDownload(params: BitBucket.RepositoriesCreateDownloadParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createFork(params: BitBucket.RepositoriesCreateForkParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssue(params: BitBucket.RepositoriesCreateIssueParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssueAttachments(params: BitBucket.RepositoriesCreateIssueAttachmentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssueChange(params: BitBucket.RepositoriesCreateIssueChangeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssueComment(params: BitBucket.RepositoriesCreateIssueCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssueVote(params: BitBucket.RepositoriesCreateIssueVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createIssueWatch(params: BitBucket.RepositoriesCreateIssueWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPipeline(params: BitBucket.RepositoriesCreatePipelineParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPipelinesKnownHost(params: BitBucket.RepositoriesCreatePipelinesKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPipelinesSchedule(params: BitBucket.RepositoriesCreatePipelinesScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPipelinesVariable(params: BitBucket.RepositoriesCreatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPullRequest(params: BitBucket.RepositoriesCreatePullRequestParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createPullRequestApproval(params: BitBucket.RepositoriesCreatePullRequestApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createSrcFileCommit(params: BitBucket.RepositoriesCreateSrcFileCommitParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createTag(params: BitBucket.RepositoriesCreateTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createWebhook(params: BitBucket.RepositoriesCreateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    declinePullRequest(params: BitBucket.RepositoriesDeclinePullRequestParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.RepositoriesDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteBranch(params: BitBucket.RepositoriesDeleteBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteBranchRestriction(params: BitBucket.RepositoriesDeleteBranchRestrictionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteCommitApproval(params: BitBucket.RepositoriesDeleteCommitApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteDefaultReviewer(params: BitBucket.RepositoriesDeleteDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteDownload(params: BitBucket.RepositoriesDeleteDownloadParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteIssue(params: BitBucket.RepositoriesDeleteIssueParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteIssueAttachment(params: BitBucket.RepositoriesDeleteIssueAttachmentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteIssueComment(params: BitBucket.RepositoriesDeleteIssueCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteIssueVote(params: BitBucket.RepositoriesDeleteIssueVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteIssueWatch(params: BitBucket.RepositoriesDeleteIssueWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesKnownHost(params: BitBucket.RepositoriesDeletePipelinesKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesSchedule(params: BitBucket.RepositoriesDeletePipelinesScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesSshKeyPair(params: BitBucket.RepositoriesDeletePipelinesSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesVariable(params: BitBucket.RepositoriesDeletePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePullRequestApproval(params: BitBucket.RepositoriesDeletePullRequestApprovalParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteTag(params: BitBucket.RepositoriesDeleteTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteWebhook(params: BitBucket.RepositoriesDeleteWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    fetchAllCommits(params: BitBucket.RepositoriesFetchAllCommitsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    fetchAllCommitsForRevision(params: BitBucket.RepositoriesFetchAllCommitsForRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.RepositoriesGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.RepositoriesGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllBranchRestrictions(params: BitBucket.RepositoriesGetAllBranchRestrictionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllBranches(params: BitBucket.RepositoriesGetAllBranchesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommitComments(params: BitBucket.RepositoriesGetAllCommitCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommitStatuses(params: BitBucket.RepositoriesGetAllCommitStatusesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommits(params: BitBucket.RepositoriesGetAllCommitsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommitsForRevision(params: BitBucket.RepositoriesGetAllCommitsForRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllDefaultReviewers(params: BitBucket.RepositoriesGetAllDefaultReviewersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllDownloads(params: BitBucket.RepositoriesGetAllDownloadsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForks(params: BitBucket.RepositoriesGetAllForksParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueAttachments(params: BitBucket.RepositoriesGetAllIssueAttachmentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueChanges(params: BitBucket.RepositoriesGetAllIssueChangesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueComments(params: BitBucket.RepositoriesGetAllIssueCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueComponents(params: BitBucket.RepositoriesGetAllIssueComponentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueMilestones(params: BitBucket.RepositoriesGetAllIssueMilestonesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssueVersions(params: BitBucket.RepositoriesGetAllIssueVersionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllIssues(params: BitBucket.RepositoriesGetAllIssuesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPermissions(params: BitBucket.RepositoriesGetAllPermissionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelineSteps(params: BitBucket.RepositoriesGetAllPipelineStepsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelines(params: BitBucket.RepositoriesGetAllPipelinesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesKnownHosts(params: BitBucket.RepositoriesGetAllPipelinesKnownHostsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesScheduleExecutions(params: BitBucket.RepositoriesGetAllPipelinesScheduleExecutionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesSchedules(params: BitBucket.RepositoriesGetAllPipelinesSchedulesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesVariables(params: BitBucket.RepositoriesGetAllPipelinesVariablesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequestComments(params: BitBucket.RepositoriesGetAllPullRequestCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequestCommits(params: BitBucket.RepositoriesGetAllPullRequestCommitsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequestStatuses(params: BitBucket.RepositoriesGetAllPullRequestStatusesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequests(params: BitBucket.RepositoriesGetAllPullRequestsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPullRequestsActivityLog(params: BitBucket.RepositoriesGetAllPullRequestsActivityLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRefs(params: BitBucket.RepositoriesGetAllRefsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllTags(params: BitBucket.RepositoriesGetAllTagsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllWatchers(params: BitBucket.RepositoriesGetAllWatchersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllWebhooks(params: BitBucket.RepositoriesGetAllWebhooksParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getBranch(params: BitBucket.RepositoriesGetBranchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getBranchRestriction(params: BitBucket.RepositoriesGetBranchRestrictionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getCommit(params: BitBucket.RepositoriesGetCommitParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getCommitBuildStatus(params: BitBucket.RepositoriesGetCommitBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getCommitComment(params: BitBucket.RepositoriesGetCommitCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDefaultReviewer(params: BitBucket.RepositoriesGetDefaultReviewerParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiff(params: BitBucket.RepositoriesGetDiffParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiffStat(params: BitBucket.RepositoriesGetDiffStatParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDownload(params: BitBucket.RepositoriesGetDownloadParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getFileHistory(params: BitBucket.RepositoriesGetFileHistoryParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssue(params: BitBucket.RepositoriesGetIssueParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueAttachment(params: BitBucket.RepositoriesGetIssueAttachmentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueChange(params: BitBucket.RepositoriesGetIssueChangeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueComment(params: BitBucket.RepositoriesGetIssueCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueComponent(params: BitBucket.RepositoriesGetIssueComponentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueMilestone(params: BitBucket.RepositoriesGetIssueMilestoneParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueVersion(params: BitBucket.RepositoriesGetIssueVersionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueVote(params: BitBucket.RepositoriesGetIssueVoteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getIssueWatch(params: BitBucket.RepositoriesGetIssueWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPatch(params: BitBucket.RepositoriesGetPatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipeline(params: BitBucket.RepositoriesGetPipelineParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelineStep(params: BitBucket.RepositoriesGetPipelineStepParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelineStepLog(params: BitBucket.RepositoriesGetPipelineStepLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesConfig(params: BitBucket.RepositoriesGetPipelinesConfigParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesKnownHost(params: BitBucket.RepositoriesGetPipelinesKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesSchedule(params: BitBucket.RepositoriesGetPipelinesScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesSshKeyPair(params: BitBucket.RepositoriesGetPipelinesSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesVariable(params: BitBucket.RepositoriesGetPipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPublic(params: BitBucket.RepositoriesGetPublicParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequest(params: BitBucket.RepositoriesGetPullRequestParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequestActivityLog(params: BitBucket.RepositoriesGetPullRequestActivityLogParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequestComment(params: BitBucket.RepositoriesGetPullRequestCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequestDiff(params: BitBucket.RepositoriesGetPullRequestDiffParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequestDiffStat(params: BitBucket.RepositoriesGetPullRequestDiffStatParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPullRequestPatch(params: BitBucket.RepositoriesGetPullRequestPatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getSrc(params: BitBucket.RepositoriesGetSrcParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getSrcRoot(params: BitBucket.RepositoriesGetSrcRootParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getTag(params: BitBucket.RepositoriesGetTagParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getWebhook(params: BitBucket.RepositoriesGetWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    mergePullRequest(params: BitBucket.RepositoriesMergePullRequestParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    stopPipeline(params: BitBucket.RepositoriesStopPipelineParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.RepositoriesUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateBranchRestriction(params: BitBucket.RepositoriesUpdateBranchRestrictionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateCommitBuildStatus(params: BitBucket.RepositoriesUpdateCommitBuildStatusParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateIssue(params: BitBucket.RepositoriesUpdateIssueParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateIssueComment(params: BitBucket.RepositoriesUpdateIssueCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesBuildNumber(params: BitBucket.RepositoriesUpdatePipelinesBuildNumberParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesConfig(params: BitBucket.RepositoriesUpdatePipelinesConfigParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesKnownHost(params: BitBucket.RepositoriesUpdatePipelinesKnownHostParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesSchedule(params: BitBucket.RepositoriesUpdatePipelinesScheduleParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesSshKeyPair(params: BitBucket.RepositoriesUpdatePipelinesSshKeyPairParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesVariable(params: BitBucket.RepositoriesUpdatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePullRequest(params: BitBucket.RepositoriesUpdatePullRequestParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateWebhook(params: BitBucket.RepositoriesUpdateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  search: {
    codeOfTeam(params: BitBucket.SearchCodeOfTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    codeOfUser(params: BitBucket.SearchCodeOfUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  snippets: {
    create(params: BitBucket.SnippetsCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createComment(params: BitBucket.SnippetsCreateCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createForUser(params: BitBucket.SnippetsCreateForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createWatch(params: BitBucket.SnippetsCreateWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.SnippetsDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteComment(params: BitBucket.SnippetsDeleteCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteRevision(params: BitBucket.SnippetsDeleteRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteWatch(params: BitBucket.SnippetsDeleteWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.SnippetsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.SnippetsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllComments(params: BitBucket.SnippetsGetAllCommentsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommits(params: BitBucket.SnippetsGetAllCommitsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllCommitsForRevision(params: BitBucket.SnippetsGetAllCommitsForRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForUser(params: BitBucket.SnippetsGetAllForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllWatchers(params: BitBucket.SnippetsGetAllWatchersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getComment(params: BitBucket.SnippetsGetCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getDiff(params: BitBucket.SnippetsGetDiffParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getFile(params: BitBucket.SnippetsGetFileParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPatch(params: BitBucket.SnippetsGetPatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getRevision(params: BitBucket.SnippetsGetRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getWatch(params: BitBucket.SnippetsGetWatchParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.SnippetsUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateComment(params: BitBucket.SnippetsUpdateCommentParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateRevision(params: BitBucket.SnippetsUpdateRevisionParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  source: {
    createFileCommit(params: BitBucket.SourceCreateFileCommitParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.SourceGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getHistory(params: BitBucket.SourceGetHistoryParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getRoot(params: BitBucket.SourceGetRootParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  ssh: {
    createForUser(params: BitBucket.SshCreateForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForUser(params: BitBucket.SshGetAllForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  teams: {
    createPipelinesVariable(params: BitBucket.TeamsCreatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createProject(params: BitBucket.TeamsCreateProjectParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createWebhook(params: BitBucket.TeamsCreateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesVariable(params: BitBucket.TeamsDeletePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteProject(params: BitBucket.TeamsDeleteProjectParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteWebhook(params: BitBucket.TeamsDeleteWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.TeamsGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.TeamsGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllFollowers(params: BitBucket.TeamsGetAllFollowersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllFollowing(params: BitBucket.TeamsGetAllFollowingParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllMembers(params: BitBucket.TeamsGetAllMembersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesVariables(params: BitBucket.TeamsGetAllPipelinesVariablesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllProjects(params: BitBucket.TeamsGetAllProjectsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositories(params: BitBucket.TeamsGetAllRepositoriesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositoriesForUser(params: BitBucket.TeamsGetAllRepositoriesForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositoryPermissions(params: BitBucket.TeamsGetAllRepositoryPermissionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllTeamPermissions(params: BitBucket.TeamsGetAllTeamPermissionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllWebhooks(params: BitBucket.TeamsGetAllWebhooksParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesVariable(params: BitBucket.TeamsGetPipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getProject(params: BitBucket.TeamsGetProjectParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getWebhook(params: BitBucket.TeamsGetWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    searchCode(params: BitBucket.TeamsSearchCodeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesVariable(params: BitBucket.TeamsUpdatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateProject(params: BitBucket.TeamsUpdateProjectParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateWebhook(params: BitBucket.TeamsUpdateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  user: {
    get(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllEmails(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositoryPermissions(params: BitBucket.UserGetAllRepositoryPermissionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllTeamPermissions(params: BitBucket.UserGetAllTeamPermissionsParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getEmail(params: BitBucket.UserGetEmailParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  users: {
    createPipelinesVariable(params: BitBucket.UsersCreatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createSshKey(params: BitBucket.UsersCreateSshKeyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createWebhook(params: BitBucket.UsersCreateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deletePipelinesVariable(params: BitBucket.UsersDeletePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteWebhook(params: BitBucket.UsersDeleteWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.UsersGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllEmailsForAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllFollowers(params: BitBucket.UsersGetAllFollowersParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllFollowing(params: BitBucket.UsersGetAllFollowingParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllPipelinesVariables(params: BitBucket.UsersGetAllPipelinesVariablesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositories(params: BitBucket.UsersGetAllRepositoriesParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllRepositoriesForTeam(params: BitBucket.UsersGetAllRepositoriesForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllSshKeys(params: BitBucket.UsersGetAllSshKeysParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllWebhooks(params: BitBucket.UsersGetAllWebhooksParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getEmailForAuthedUser(params: BitBucket.UsersGetEmailForAuthedUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getPipelinesVariable(params: BitBucket.UsersGetPipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getWebhook(params: BitBucket.UsersGetWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    searchCode(params: BitBucket.UsersSearchCodeParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updatePipelinesVariable(params: BitBucket.UsersUpdatePipelinesVariableParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateWebhook(params: BitBucket.UsersUpdateWebhookParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
  webhooks: {
    create(params: BitBucket.WebhooksCreateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createForTeam(params: BitBucket.WebhooksCreateForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    createForUser(params: BitBucket.WebhooksCreateForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    delete(params: BitBucket.WebhooksDeleteParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteForTeam(params: BitBucket.WebhooksDeleteForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    deleteForUser(params: BitBucket.WebhooksDeleteForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    get(params: BitBucket.WebhooksGetParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAll(params: BitBucket.WebhooksGetAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForTeam(params: BitBucket.WebhooksGetAllForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getAllForUser(params: BitBucket.WebhooksGetAllForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getForTeam(params: BitBucket.WebhooksGetForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    getForUser(params: BitBucket.WebhooksGetForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    listAll(params: BitBucket.WebhooksListAllParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    update(params: BitBucket.WebhooksUpdateParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateForTeam(params: BitBucket.WebhooksUpdateForTeamParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
    updateForUser(params: BitBucket.WebhooksUpdateForUserParams, callback?: BitBucket.Callback): Promise<BitBucket.AnyResponse>;
  };
}

export = BitBucket
