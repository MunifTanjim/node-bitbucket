/**
 * This declaration file requires TypeScript 2.1 or above.
 */

declare namespace BitBucket {
  export interface EmptyParams {
  }

  export interface Options {
    baseUrl?: string;
    headers?: {[header: string]: any};
    options?: any;
  }

  interface AuthBasic {
    type: "basic";
    username: string;
    password: string;
  }

  interface AuthAppPassword {
    type: "apppassword";
    username: string;
    password: string;
  }

  interface AuthToken {
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

  export interface Callback<T> {
    (error: Error | null, response: T): void;
  }

  export interface Response<T> {
    data: T;
    meta: any;
  }

  namespace ResponseType {
    export type Any = any

    export type Branch = Ref & {
      [k: string]: any;
    };
    export type Commit = BaseCommit & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        diff?: {
          href?: string;
          name?: string;
        };
        patch?: {
          href?: string;
          name?: string;
        };
        approve?: {
          href?: string;
          name?: string;
        };
        comments?: {
          href?: string;
          name?: string;
        };
        statuses?: {
          href?: string;
          name?: string;
        };
      };
      repository?: Repository;
      participants?: Participant[];
      [k: string]: any;
    };
    export type BaseCommit = Object & {
      hash?: string;
      date?: string;
      author?: Author;
      message?: string;
      summary?: {
        raw?: string;
        markup?: "markdown" | "creole" | "plaintext";
        html?: string;
      };
      parents?: BaseCommit[];
      [k: string]: any;
    };
    export type Author = Object & {
      raw?: string;
      user?: Account;
      [k: string]: any;
    };
    export type Account = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        avatar?: {
          href?: string;
          name?: string;
        };
        followers?: {
          href?: string;
          name?: string;
        };
        following?: {
          href?: string;
          name?: string;
        };
        repositories?: {
          href?: string;
          name?: string;
        };
      };
      username?: string;
      display_name?: string;
      website?: string;
      created_on?: string;
      uuid?: string;
      [k: string]: any;
    };
    export type Repository = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        avatar?: {
          href?: string;
          name?: string;
        };
        pullrequests?: {
          href?: string;
          name?: string;
        };
        commits?: {
          href?: string;
          name?: string;
        };
        forks?: {
          href?: string;
          name?: string;
        };
        watchers?: {
          href?: string;
          name?: string;
        };
        downloads?: {
          href?: string;
          name?: string;
        };
        clone?: {
          href?: string;
          name?: string;
        }[];
        hooks?: {
          href?: string;
          name?: string;
        };
      };
      uuid?: string;
      full_name?: string;
      is_private?: boolean;
      parent?: Repository;
      scm?: "hg" | "git";
      owner?: Account;
      name?: string;
      description?: string;
      created_on?: string;
      updated_on?: string;
      size?: number;
      language?: string;
      has_issues?: boolean;
      has_wiki?: boolean;
      fork_policy?: "allow_forks" | "no_public_forks" | "no_forks";
      project?: Project;
      mainbranch?: Branch;
      [k: string]: any;
    };
    export type Project = Object & {
      links?: {
        html?: {
          href?: string;
          name?: string;
        };
        avatar?: {
          href?: string;
          name?: string;
        };
      };
      uuid?: string;
      key?: string;
      owner?: Team;
      name?: string;
      description?: string;
      is_private?: boolean;
      created_on?: string;
      updated_on?: string;
      [k: string]: any;
    };
    export type Team = Account & {
      [k: string]: any;
    };
    export type Participant = Object & {
      user?: User;
      role?: "PARTICIPANT" | "REVIEWER";
      approved?: boolean;
      participated_on?: string;
      [k: string]: any;
    };
    export type User = Account & {
      is_staff?: boolean;
      account_id?: string;
      [k: string]: any;
    };
    export type Branchrestriction = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      id?: number;
      kind?:
        | "require_tasks_to_be_completed"
        | "require_passing_builds_to_merge"
        | "force"
        | "require_all_dependencies_merged"
        | "push"
        | "require_approvals_to_merge"
        | "enforce_merge_checks"
        | "restrict_merges"
        | "reset_pullrequest_approvals_on_change"
        | "delete";
      users?: Account[];
      groups?: Group[];
      value?: number;
      [k: string]: any;
    };
    export type Group = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
      };
      owner?: Account;
      name?: string;
      slug?: string;
      full_slug?: string;
      members?: number;
      [k: string]: any;
    };
    export type CommitComment = Comment & {
      commit?: Commit;
      [k: string]: any;
    };
    export type Comment = Object & {
      id?: number;
      created_on?: string;
      updated_on?: string;
      content?: {
        raw?: string;
        markup?: "markdown" | "creole" | "plaintext";
        html?: string;
      };
      user?: User;
      deleted?: boolean;
      parent?: Comment;
      inline?: {
        to?: number;
        from?: number;
        path: string;
      };
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        code?: {
          href?: string;
          name?: string;
        };
      };
      [k: string]: any;
    };
    export type Commitstatus = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        commit?: {
          href?: string;
          name?: string;
        };
      };
      uuid?: string;
      key?: string;
      refname?: string;
      url?: string;
      state?: "SUCCESSFUL" | "FAILED" | "INPROGRESS" | "STOPPED";
      name?: string;
      description?: string;
      created_on?: string;
      updated_on?: string;
      [k: string]: any;
    };
    export type Component = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      id?: number;
      [k: string]: any;
    };
    export type Issue = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        comments?: {
          href?: string;
          name?: string;
        };
        attachments?: {
          href?: string;
          name?: string;
        };
        watch?: {
          href?: string;
          name?: string;
        };
        vote?: {
          href?: string;
          name?: string;
        };
      };
      id?: number;
      repository?: Repository;
      title?: string;
      reporter?: User;
      assignee?: User;
      created_on?: string;
      updated_on?: string;
      edited_on?: string;
      state?: "new" | "open" | "resolved" | "on hold" | "invalid" | "duplicate" | "wontfix" | "closed";
      kind?: "bug" | "enhancement" | "proposal" | "task";
      priority?: "trivial" | "minor" | "major" | "critical" | "blocker";
      milestone?: Milestone;
      version?: Version;
      component?: Component;
      votes?: number;
      content?: {
        raw?: string;
        markup?: "markdown" | "creole" | "plaintext";
        html?: string;
      };
      [k: string]: any;
    };
    export type Milestone = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      id?: number;
      [k: string]: any;
    };
    export type Version = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      id?: number;
      [k: string]: any;
    };
    export type IssueComment = Comment & {
      issue?: Issue;
      [k: string]: any;
    };
    export type IssueAttachment = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      [k: string]: any;
    };
    export type PipelineKnownHost = Object & {
      uuid?: string;
      hostname?: string;
      public_key?: PipelineSshPublicKey;
      [k: string]: any;
    };
    export type PipelineSshPublicKey = Object & {
      key_type?: string;
      key?: string;
      md5_fingerprint?: string;
      sha256_fingerprint?: string;
      [k: string]: any;
    };
    export type PipelineScheduleExecution = Object & {
      [k: string]: any;
    };
    export type PipelineSchedule = Object & {
      uuid?: string;
      enabled?: boolean;
      target?: PipelineTarget;
      selector?: PipelineSelector;
      cron_pattern?: string;
      created_on?: string;
      updated_on?: string;
      [k: string]: any;
    };
    export type PipelineTarget = Object & {
      [k: string]: any;
    };
    export type PipelineSelector = Object & {
      type?: "branches" | "tags" | "bookmarks" | "default" | "custom";
      pattern?: string;
      [k: string]: any;
    };
    export type PipelineStep = Object & {
      uuid?: string;
      started_on?: string;
      completed_on?: string;
      state?: PipelineStepState;
      image?: PipelineImage;
      setup_commands?: PipelineCommand[];
      script_commands?: PipelineCommand[];
      logByteCount?: number;
      [k: string]: any;
    };
    export type PipelineStepState = Object & {
      [k: string]: any;
    };
    export type PipelineVariable = Object & {
      uuid?: string;
      key?: string;
      value?: string;
      secured?: boolean;
      [k: string]: any;
    };
    export type Pipeline = Object & {
      uuid?: string;
      build_number?: number;
      creator?: Account;
      repository?: Repository;
      target?: PipelineTarget;
      trigger?: PipelineTrigger;
      state?: PipelineState;
      created_on?: string;
      completed_on?: string;
      build_seconds_used?: number;
      [k: string]: any;
    };
    export type PipelineTrigger = Object & {
      [k: string]: any;
    };
    export type PipelineState = Object & {
      [k: string]: any;
    };
    export type PullrequestComment = Comment & {
      pullrequest?: Pullrequest;
      [k: string]: any;
    };
    export type Pullrequest = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        commits?: {
          href?: string;
          name?: string;
        };
        approve?: {
          href?: string;
          name?: string;
        };
        diff?: {
          href?: string;
          name?: string;
        };
        comments?: {
          href?: string;
          name?: string;
        };
        activity?: {
          href?: string;
          name?: string;
        };
        merge?: {
          href?: string;
          name?: string;
        };
        decline?: {
          href?: string;
          name?: string;
        };
      };
      id?: number;
      title?: string;
      summary?: {
        raw?: string;
        markup?: "markdown" | "creole" | "plaintext";
        html?: string;
      };
      state?: "MERGED" | "SUPERSEDED" | "OPEN" | "DECLINED";
      author?: Account;
      source?: PullrequestEndpoint;
      destination?: PullrequestEndpoint;
      merge_commit?: {
        hash?: string;
      };
      comment_count?: number;
      task_count?: number;
      close_source_branch?: boolean;
      closed_by?: Account;
      reason?: string;
      created_on?: string;
      updated_on?: string;
      reviewers?: Account[];
      participants?: Participant[];
      [k: string]: any;
    };
    export type SnippetComment = Object & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
      };
      snippet?: Snippet;
      [k: string]: any;
    };
    export type Snippet = Object & {
      id?: number;
      title?: string;
      scm?: "hg" | "git";
      created_on?: string;
      updated_on?: string;
      owner?: Account;
      creator?: Account;
      is_private?: boolean;
      [k: string]: any;
    };
    export type SnippetCommit = BaseCommit & {
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        diff?: {
          href?: string;
          name?: string;
        };
      };
      snippet?: Snippet;
      [k: string]: any;
    };
    export type SshAccountKey = SshKey & {
      owner?: Account;
      [k: string]: any;
    };
    export type SshKey = Object & {
      uuid?: string;
      key?: string;
      comment?: string;
      label?: string;
      created_on?: string;
      last_used?: string;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      [k: string]: any;
    };
    export type Tag = Ref & {
      message?: string;
      date?: string;
      tagger?: Author;
      [k: string]: any;
    };
    export type WebhookSubscription = Object & {
      uuid?: string;
      url?: string;
      description?: string;
      subject_type?: "user" | "repository" | "team";
      subject?: Object;
      active?: boolean;
      created_at?: string;
      events?: (
        | "pullrequest:unapproved"
        | "issue:comment_created"
        | "pullrequest:approved"
        | "repo:created"
        | "repo:deleted"
        | "repo:imported"
        | "pullrequest:comment_updated"
        | "issue:updated"
        | "project:updated"
        | "pullrequest:comment_created"
        | "repo:commit_status_updated"
        | "pullrequest:updated"
        | "issue:created"
        | "repo:fork"
        | "pullrequest:comment_deleted"
        | "repo:commit_status_created"
        | "repo:updated"
        | "pullrequest:rejected"
        | "pullrequest:fulfilled"
        | "repo:push"
        | "pullrequest:created"
        | "repo:transfer"
        | "repo:commit_comment_created")[];
      [k: string]: any;
    };
    export type PipelineBuildNumber = Object & {
      next?: number;
      [k: string]: any;
    };
    export type PipelineSshKeyPair = Object & {
      private_key?: string;
      public_key?: string;
      [k: string]: any;
    };
    export type PipelinesConfig = Object & {
      enabled?: boolean;
      repository?: Repository;
      [k: string]: any;
    };
    export interface Ref {
      type: string;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        commits?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      target?: Commit;
      [k: string]: any;
    }
    export interface Object {
      type: string;
      [k: string]: any;
    }
    export interface Error {
      type: string;
      error?: {
        message: string;
        detail?: string;
        data?: {
          [k: string]: any;
        };
      };
      [k: string]: any;
    }
    export interface IssueChange {
      type: string;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
        issue?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      created_on?: string;
      user?: User;
      issue?: Issue;
      changes?: {
        assignee?: {
          old?: string;
          new?: string;
        };
        state?: {
          old?: string;
          new?: string;
        };
        title?: {
          old?: string;
          new?: string;
        };
        kind?: {
          old?: string;
          new?: string;
        };
        milestone?: {
          old?: string;
          new?: string;
        };
        component?: {
          old?: string;
          new?: string;
        };
        priority?: {
          old?: string;
          new?: string;
        };
        version?: {
          old?: string;
          new?: string;
        };
        content?: {
          old?: string;
          new?: string;
        };
      };
      message?: {
        raw?: string;
        markup?: "markdown" | "creole" | "plaintext";
        html?: string;
      };
      [k: string]: any;
    }
    export interface PaginatedBranches {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Branch[];
    }
    export interface PaginatedBranchrestrictions {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Branchrestriction[];
    }
    export interface PaginatedCommitComments {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: CommitComment[];
    }
    export interface PaginatedCommitstatuses {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Commitstatus[];
    }
    export interface PaginatedComponents {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Component[];
    }
    export interface PaginatedDiffstats {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Diffstat[];
    }
    export interface Diffstat {
      type: string;
      status?: "added" | "removed" | "modified" | "renamed";
      lines_added?: number;
      lines_removed?: number;
      old?: CommitFile;
      new?: CommitFile;
      [k: string]: any;
    }
    export interface CommitFile {
      type: string;
      path?: string;
      commit?: Commit;
      attributes?: "link" | "executable" | "subrepository" | "binary" | "lfs";
      [k: string]: any;
    }
    export interface PaginatedFiles {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: CommitFile[];
    }
    export interface PaginatedHookEvents {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: HookEvent[];
    }
    export interface HookEvent {
      event?:
        | "pullrequest:unapproved"
        | "issue:comment_created"
        | "pullrequest:approved"
        | "repo:created"
        | "repo:deleted"
        | "repo:imported"
        | "pullrequest:comment_updated"
        | "issue:updated"
        | "project:updated"
        | "pullrequest:comment_created"
        | "repo:commit_status_updated"
        | "pullrequest:updated"
        | "issue:created"
        | "repo:fork"
        | "pullrequest:comment_deleted"
        | "repo:commit_status_created"
        | "repo:updated"
        | "pullrequest:rejected"
        | "pullrequest:fulfilled"
        | "repo:push"
        | "pullrequest:created"
        | "repo:transfer"
        | "repo:commit_comment_created";
      category?: string;
      label?: string;
      description?: string;
    }
    export interface PaginatedIssueAttachments {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: IssueAttachment[];
    }
    export interface PaginatedIssueComments {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: IssueComment[];
    }
    export interface PaginatedIssues {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Issue[];
    }
    export interface PaginatedLogEntries {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: IssueChange[];
    }
    export interface PaginatedMilestones {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Milestone[];
    }
    export interface PaginatedPipelineKnownHosts {
      page?: number;
      values?: PipelineKnownHost[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PaginatedPipelineScheduleExecutions {
      page?: number;
      values?: PipelineScheduleExecution[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PaginatedPipelineSchedules {
      page?: number;
      values?: PipelineSchedule[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PaginatedPipelineSteps {
      page?: number;
      values?: PipelineStep[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PipelineImage {
      name?: string;
      username?: string;
      password?: string;
      email?: string;
      [k: string]: any;
    }
    export interface PipelineCommand {
      name?: string;
      command?: string;
      log_range?: PipelineLogRange;
      [k: string]: any;
    }
    export interface PipelineLogRange {
      first_byte_position?: number;
      last_byte_position?: number;
      [k: string]: any;
    }
    export interface PaginatedPipelineVariables {
      page?: number;
      values?: PipelineVariable[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PaginatedPipelines {
      page?: number;
      values?: Pipeline[];
      size?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      [k: string]: any;
    }
    export interface PaginatedProjects {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Project[];
    }
    export interface PaginatedPullrequestComments {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: PullrequestComment[];
    }
    export interface PullrequestEndpoint {
      repository?: Repository;
      branch?: {
        name?: string;
      };
      commit?: {
        hash?: string;
      };
    }
    export interface PaginatedPullrequests {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Pullrequest[];
    }
    export interface PaginatedRefs {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Ref[];
    }
    export interface PaginatedRepositories {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Repository[];
    }
    export interface PaginatedRepositoryPermissions {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: RepositoryPermission[];
    }
    export interface RepositoryPermission {
      type: string;
      permission?: "admin" | "write" | "read";
      user?: User;
      repository?: Repository;
      [k: string]: any;
    }
    export interface PaginatedSnippetComments {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: SnippetComment[];
    }
    export interface PaginatedSnippetCommit {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: SnippetCommit[];
    }
    export interface PaginatedSnippets {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Snippet[];
    }
    export interface PaginatedSshUserKeys {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: SshAccountKey[];
    }
    export interface PaginatedTags {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Tag[];
    }
    export interface PaginatedTeamPermissions {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: TeamPermission[];
    }
    export interface TeamPermission {
      type: string;
      permission?: "admin" | "collaborator";
      user?: User;
      team?: Team;
      [k: string]: any;
    }
    export interface PaginatedTeams {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Team[];
    }
    export interface PaginatedTreeentries {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Treeentry[];
    }
    export interface Treeentry {
      type: string;
      path?: string;
      commit?: Commit;
      [k: string]: any;
    }
    export interface PaginatedUsers {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: User[];
    }
    export interface PaginatedVersions {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: Version[];
    }
    export interface PaginatedWebhookSubscriptions {
      size?: number;
      page?: number;
      pagelen?: number;
      next?: string;
      previous?: string;
      values?: WebhookSubscription[];
    }
    export interface PullrequestMergeParameters {
      type: string;
      message?: string;
      close_source_branch?: boolean;
      merge_strategy?: "merge_commit" | "squash" | "fast_forward";
      [k: string]: any;
    }
    export interface SearchResultPage {
      size?: number;
      page?: number;
      pagelen?: number;
      query_substituted?: boolean;
      next?: string;
      previous?: string;
      values?: SearchCodeSearchResult[];
      [k: string]: any;
    }
    export interface SearchCodeSearchResult {
      type?: string;
      content_match_count?: number;
      content_matches?: SearchContentMatch[];
      path_matches?: SearchSegment[];
      file?: CommitFile;
      [k: string]: any;
    }
    export interface SearchContentMatch {
      lines?: SearchLine[];
      [k: string]: any;
    }
    export interface SearchLine {
      line?: number;
      segments?: SearchSegment[];
      [k: string]: any;
    }
    export interface SearchSegment {
      text?: string;
      match?: boolean;
      [k: string]: any;
    }
    export interface SubjectTypes {
      repository?: {
        events?: {
          href?: string;
          name?: string;
        };
      };
      user?: {
        events?: {
          href?: string;
          name?: string;
        };
      };
      team?: {
        events?: {
          href?: string;
          name?: string;
        };
      };
    }
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
  export type BranchrestrictionsListParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
      "exclude"?: string;
      "include"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsFetchAllForRevisionParams =
    & {
      "exclude"?: string;
      "include"?: string;
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
      "exclude"?: string;
      "include"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type CommitsGetAllForRevisionParams =
    & {
      "exclude"?: string;
      "include"?: string;
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
  export type CommitsListCommentsParams =
    & {
      "node": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type CommitstatusesCreateBuildStatusParams =
    & {
      "_body"?: any;
      "node": string;
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
  export type CommitstatusesListParams =
    & {
      "node": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type CommitstatusesListPullRequestStatusesParams =
    & {
      "pull_request_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
  export type HookEventsListParams =
    & {
      "q"?: string;
      "sort"?: string;
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
  export type IssueTrackerListParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListAttachmentsParams =
    & {
      "issue_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListChangesParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListCommentsParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListComponentsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListMilestonesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerListVersionsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type IssueTrackerUpdateParams =
    & {
      "_body"?: any;
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
  export type PipelinesListParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListKnownHostsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListScheduleExecutionsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListSchedulesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListStepsParams =
    & {
      "pipeline_uuid": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListVariablesForRepoParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListVariablesForTeamParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type PipelinesListVariablesForUserParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
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
  export type ProjectsGetForTeamParams =
    & {
      "project_key": string;
      "username": string;
    };
  export type ProjectsListForTeamParams =
    & {
      "q"?: string;
      "sort"?: string;
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
  export type PullrequestsGetAllActivityLogParams =
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
  export type PullrequestsListParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "state"?: "MERGED"|"SUPERSEDED"|"OPEN"|"DECLINED";
      "username": string;
    };
  export type PullrequestsListCommentsParams =
    & {
      "pull_request_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type PullrequestsListStatusesParams =
    & {
      "pull_request_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
      "_body"?: any;
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
  export type RefsListParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RefsListBranchesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RefsListTagsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
      "_body"?: any;
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
  export type RepositoriesCreatePipelineKnownHostParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineVariableParams =
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
      "_body"?: any;
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
  export type RepositoriesDeletePipelineKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeletePipelineScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesDeletePipelineSshKeyPairParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesDeletePipelineVariableParams =
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
      "exclude"?: string;
      "include"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesFetchAllCommitsForRevisionParams =
    & {
      "exclude"?: string;
      "include"?: string;
      "repo_slug": string;
      "revision": string;
      "username": string;
    };
  export type RepositoriesGetParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitsParams =
    & {
      "exclude"?: string;
      "include"?: string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllCommitsForRevisionParams =
    & {
      "exclude"?: string;
      "include"?: string;
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
  export type RepositoriesGetAllPullRequestCommitsParams =
    & {
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllPullRequestsActivityLogParams =
    & {
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetAllWatchersParams =
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
  export type RepositoriesGetDownloadParams =
    & {
      "filename": string;
      "repo_slug": string;
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
  export type RepositoriesGetPipelineConfigParams =
    & {
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelineKnownHostParams =
    & {
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesGetPipelineScheduleParams =
    & {
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesGetPipelineSshKeyPairParams =
    & {
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
  export type RepositoriesGetPipelineVariableParams =
    & {
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
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
  export type RepositoriesGetSrcMainRootParams =
    & {
      "format"?: "meta";
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
  export type RepositoriesListParams =
    & {
      "q"?: string;
      "role"?: "admin"|"contributor"|"member"|"owner";
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListBranchRestrictionsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListBranchesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListCommitCommentsParams =
    & {
      "node": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListCommitStatusesParams =
    & {
      "node": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListComponentsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListDiffStatsParams =
    & {
      "ignore_whitespace"?: boolean;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "spec": string;
      "username": string;
    };
  export type RepositoriesListFileHistoryParams =
    & {
      "fields"?: string;
      "node": string;
      "path": string;
      "q"?: string;
      "renames"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListForksParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListIssueAttachmentsParams =
    & {
      "issue_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListIssueChangesParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListIssueCommentsParams =
    & {
      "issue_id": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListIssuesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListMilestonesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type RepositoriesListPipelineKnownHostsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPipelineScheduleExecutionsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPipelineSchedulesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPipelineStepsParams =
    & {
      "pipeline_uuid": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPipelineVariablesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPipelinesParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPublicParams =
    & {
      "after"?: string;
      "q"?: string;
      "sort"?: string;
    };
  export type RepositoriesListPullRequestCommentsParams =
    & {
      "pull_request_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPullRequestStatusesParams =
    & {
      "pull_request_id": number;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListPullRequestsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "state"?: "MERGED"|"SUPERSEDED"|"OPEN"|"DECLINED";
      "username": string;
    };
  export type RepositoriesListRefsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListTagsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListVersionsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListWebhooksParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
      "_body"?: any;
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
  export type RepositoriesUpdatePipelineBuildNumberParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineConfigParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineKnownHostParams =
    & {
      "_body": any;
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineScheduleParams =
    & {
      "_body": any;
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineSshKeyPairParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineVariableParams =
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
  export type SnippetsCheckWatchParams =
    & {
      "encoded_id": string;
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
  export type SnippetsGetParams =
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
  export type SnippetsListParams =
    & {
      "q"?: string;
      "role"?: "owner"|"contributor"|"member";
      "sort"?: string;
    };
  export type SnippetsListCommentsParams =
    & {
      "encoded_id": string;
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type SnippetsListCommitsParams =
    & {
      "encoded_id": string;
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type SnippetsListForUserParams =
    & {
      "q"?: string;
      "role"?: "owner"|"contributor"|"member";
      "sort"?: string;
      "username": string;
    };
  export type SnippetsListWatchersParams =
    & {
      "encoded_id": string;
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type SnippetsStartWatchParams =
    & {
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsStopWatchParams =
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
  export type SourceGetMainRootParams =
    & {
      "format"?: "meta";
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type SourceListHistoryParams =
    & {
      "fields"?: string;
      "node": string;
      "path": string;
      "q"?: string;
      "renames"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type SshCreateKeyForUserParams =
    & {
      "_body"?: any;
      "username": string;
    };
  export type SshListKeysParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsCreatePipelineVariableParams =
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
  export type TeamsDeletePipelineVariableParams =
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
  export type TeamsGetAllMembersParams =
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
  export type TeamsGetPipelineVariableParams =
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
  export type TeamsListParams =
    & {
      "q"?: string;
      "role"?: "admin"|"contributor"|"member";
      "sort"?: string;
    };
  export type TeamsListFollowersParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListFollowingParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListPipelineVariablesParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListProjectsParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListRepositoryPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListTeamPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsListWebhooksParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type TeamsSearchCodeParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type TeamsUpdatePipelineVariableParams =
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
  export type UserGetEmailParams =
    & {
      "email": string;
    };
  export type UserListRepositoryPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type UserListTeamPermissionsParams =
    & {
      "q"?: string;
      "sort"?: string;
    };
  export type UsersCreatePipelineVariableParams =
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
  export type UsersDeletePipelineVariableParams =
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
  export type UsersGetAllRepositoriesParams =
    & {
      "username": string;
    };
  export type UsersGetAllRepositoriesForTeamParams =
    & {
      "username": string;
    };
  export type UsersGetEmailForAuthedUserParams =
    & {
      "email": string;
    };
  export type UsersGetPipelineVariableParams =
    & {
      "username": string;
      "variable_uuid": string;
    };
  export type UsersGetWebhookParams =
    & {
      "uid": string;
      "username": string;
    };
  export type UsersListFollowersParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type UsersListFollowingParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type UsersListPipelineVariablesParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type UsersListSshKeysParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type UsersListWebhooksParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type UsersSearchCodeParams =
    & {
      "page"?: number;
      "pagelen"?: number;
      "search_query": string;
      "username": string;
    };
  export type UsersUpdatePipelineVariableParams =
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
      "_body"?: any;
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
  export type WebhooksListParams =
    & {
      "q"?: string;
      "sort"?: string;
      "subject_type": "user"|"repository"|"team";
    };
  export type WebhooksListForRepoParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type WebhooksListForTeamParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
    };
  export type WebhooksListForUserParams =
    & {
      "q"?: string;
      "sort"?: string;
      "username": string;
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
  getPage(url: BitBucket.Link, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;

  branchrestrictions: {
    create(params: BitBucket.BranchrestrictionsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    delete(params: BitBucket.BranchrestrictionsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.BranchrestrictionsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    list(params: BitBucket.BranchrestrictionsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>;
    update(params: BitBucket.BranchrestrictionsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
  };
  commits: {
    createApproval(params: BitBucket.CommitsCreateApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Participant>>): Promise<BitBucket.Response<BitBucket.ResponseType.Participant>>;
    deleteApproval(params: BitBucket.CommitsDeleteApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAll(params: BitBucket.CommitsFetchAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllForRevision(params: BitBucket.CommitsFetchAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.CommitsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commit>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commit>>;
    getAll(params: BitBucket.CommitsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllForRevision(params: BitBucket.CommitsGetAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getComment(params: BitBucket.CommitsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.CommitComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.CommitComment>>;
    getDiff(params: BitBucket.CommitsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.CommitsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    listComments(params: BitBucket.CommitsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>;
  };
  commitstatuses: {
    createBuildStatus(params: BitBucket.CommitstatusesCreateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    getBuildStatus(params: BitBucket.CommitstatusesGetBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    list(params: BitBucket.CommitstatusesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    listPullRequestStatuses(params: BitBucket.CommitstatusesListPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    updateBuildStatus(params: BitBucket.CommitstatusesUpdateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
  };
  downloads: {
    create(params: BitBucket.DownloadsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    delete(params: BitBucket.DownloadsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.DownloadsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAll(params: BitBucket.DownloadsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  hookEvents: {
    list(params: BitBucket.HookEventsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>): Promise<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>;
  };
  issueTracker: {
    create(params: BitBucket.IssueTrackerCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    createAttachments(params: BitBucket.IssueTrackerCreateAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createChange(params: BitBucket.IssueTrackerCreateChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueChange>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueChange>>;
    createComment(params: BitBucket.IssueTrackerCreateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createVote(params: BitBucket.IssueTrackerCreateVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    createWatch(params: BitBucket.IssueTrackerCreateWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    delete(params: BitBucket.IssueTrackerDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    deleteAttachment(params: BitBucket.IssueTrackerDeleteAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteComment(params: BitBucket.IssueTrackerDeleteCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteVote(params: BitBucket.IssueTrackerDeleteVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWatch(params: BitBucket.IssueTrackerDeleteWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    get(params: BitBucket.IssueTrackerGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    getAttachment(params: BitBucket.IssueTrackerGetAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getChange(params: BitBucket.IssueTrackerGetChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueChange>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueChange>>;
    getComment(params: BitBucket.IssueTrackerGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
    getComponent(params: BitBucket.IssueTrackerGetComponentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Component>>): Promise<BitBucket.Response<BitBucket.ResponseType.Component>>;
    getMilestone(params: BitBucket.IssueTrackerGetMilestoneParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Milestone>>): Promise<BitBucket.Response<BitBucket.ResponseType.Milestone>>;
    getVersion(params: BitBucket.IssueTrackerGetVersionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Version>>): Promise<BitBucket.Response<BitBucket.ResponseType.Version>>;
    getVote(params: BitBucket.IssueTrackerGetVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getWatch(params: BitBucket.IssueTrackerGetWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    list(params: BitBucket.IssueTrackerListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>;
    listAttachments(params: BitBucket.IssueTrackerListAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>;
    listChanges(params: BitBucket.IssueTrackerListChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>;
    listComments(params: BitBucket.IssueTrackerListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>;
    listComponents(params: BitBucket.IssueTrackerListComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>;
    listMilestones(params: BitBucket.IssueTrackerListMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>;
    listVersions(params: BitBucket.IssueTrackerListVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>;
    update(params: BitBucket.IssueTrackerUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    updateComment(params: BitBucket.IssueTrackerUpdateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
  };
  pipelines: {
    create(params: BitBucket.PipelinesCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pipeline>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pipeline>>;
    createKnownHost(params: BitBucket.PipelinesCreateKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    createSchedule(params: BitBucket.PipelinesCreateScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    createVariable(params: BitBucket.PipelinesCreateVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createVariableForTeam(params: BitBucket.PipelinesCreateVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createVariableForUser(params: BitBucket.PipelinesCreateVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    deleteKnownHost(params: BitBucket.PipelinesDeleteKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteSchedule(params: BitBucket.PipelinesDeleteScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteSshKeyPair(params: BitBucket.PipelinesDeleteSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteVariable(params: BitBucket.PipelinesDeleteVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteVariableForTeam(params: BitBucket.PipelinesDeleteVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteVariableForUser(params: BitBucket.PipelinesDeleteVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.PipelinesGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pipeline>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pipeline>>;
    getConfig(params: BitBucket.PipelinesGetConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    getKnownHost(params: BitBucket.PipelinesGetKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    getSchedule(params: BitBucket.PipelinesGetScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    getSshKeyPair(params: BitBucket.PipelinesGetSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    getStep(params: BitBucket.PipelinesGetStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>;
    getStepLog(params: BitBucket.PipelinesGetStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getVariable(params: BitBucket.PipelinesGetVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getVariableForTeam(params: BitBucket.PipelinesGetVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getVariableForUser(params: BitBucket.PipelinesGetVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    list(params: BitBucket.PipelinesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>;
    listKnownHosts(params: BitBucket.PipelinesListKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>;
    listScheduleExecutions(params: BitBucket.PipelinesListScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>;
    listSchedules(params: BitBucket.PipelinesListSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>;
    listSteps(params: BitBucket.PipelinesListStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>;
    listVariablesForRepo(params: BitBucket.PipelinesListVariablesForRepoParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    listVariablesForTeam(params: BitBucket.PipelinesListVariablesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    listVariablesForUser(params: BitBucket.PipelinesListVariablesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    stop(params: BitBucket.PipelinesStopParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    updateBuildNumber(params: BitBucket.PipelinesUpdateBuildNumberParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>;
    updateConfig(params: BitBucket.PipelinesUpdateConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    updateKnownHost(params: BitBucket.PipelinesUpdateKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    updateSchedule(params: BitBucket.PipelinesUpdateScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    updateSshKeyPair(params: BitBucket.PipelinesUpdateSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    updateVariable(params: BitBucket.PipelinesUpdateVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updateVariableForTeam(params: BitBucket.PipelinesUpdateVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updateVariableForUser(params: BitBucket.PipelinesUpdateVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
  };
  projects: {
    createForTeam(params: BitBucket.ProjectsCreateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    deleteForTeam(params: BitBucket.ProjectsDeleteForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getForTeam(params: BitBucket.ProjectsGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    listForTeam(params: BitBucket.ProjectsListForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>;
    updateForTeam(params: BitBucket.ProjectsUpdateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
  };
  pullrequests: {
    addDefaultReviewer(params: BitBucket.PullrequestsAddDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    create(params: BitBucket.PullrequestsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    createApproval(params: BitBucket.PullrequestsCreateApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Participant>>): Promise<BitBucket.Response<BitBucket.ResponseType.Participant>>;
    decline(params: BitBucket.PullrequestsDeclineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    deleteApproval(params: BitBucket.PullrequestsDeleteApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteDefaultReviewer(params: BitBucket.PullrequestsDeleteDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.PullrequestsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    getActivityLog(params: BitBucket.PullrequestsGetActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllActivityLog(params: BitBucket.PullrequestsGetAllActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllCommits(params: BitBucket.PullrequestsGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDefaultReviewers(params: BitBucket.PullrequestsGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getComment(params: BitBucket.PullrequestsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>;
    getDefaultReviewer(params: BitBucket.PullrequestsGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiff(params: BitBucket.PullrequestsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiffStat(params: BitBucket.PullrequestsGetDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.PullrequestsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    list(params: BitBucket.PullrequestsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>;
    listComments(params: BitBucket.PullrequestsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>;
    listStatuses(params: BitBucket.PullrequestsListStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    merge(params: BitBucket.PullrequestsMergeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    update(params: BitBucket.PullrequestsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
  };
  refs: {
    createBranch(params: BitBucket.RefsCreateBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    createTag(params: BitBucket.RefsCreateTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    deleteBranch(params: BitBucket.RefsDeleteBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteTag(params: BitBucket.RefsDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getBranch(params: BitBucket.RefsGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    getTag(params: BitBucket.RefsGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    list(params: BitBucket.RefsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>;
    listBranches(params: BitBucket.RefsListBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>;
    listTags(params: BitBucket.RefsListTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>;
  };
  repositories: {
    addDefaultReviewer(params: BitBucket.RepositoriesAddDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    create(params: BitBucket.RepositoriesCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    createBranch(params: BitBucket.RepositoriesCreateBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    createBranchRestriction(params: BitBucket.RepositoriesCreateBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    createCommitApproval(params: BitBucket.RepositoriesCreateCommitApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Participant>>): Promise<BitBucket.Response<BitBucket.ResponseType.Participant>>;
    createCommitBuildStatus(params: BitBucket.RepositoriesCreateCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    createDownload(params: BitBucket.RepositoriesCreateDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createFork(params: BitBucket.RepositoriesCreateForkParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    createIssue(params: BitBucket.RepositoriesCreateIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    createIssueAttachments(params: BitBucket.RepositoriesCreateIssueAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createIssueChange(params: BitBucket.RepositoriesCreateIssueChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueChange>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueChange>>;
    createIssueComment(params: BitBucket.RepositoriesCreateIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createIssueVote(params: BitBucket.RepositoriesCreateIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    createIssueWatch(params: BitBucket.RepositoriesCreateIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    createPipeline(params: BitBucket.RepositoriesCreatePipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pipeline>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pipeline>>;
    createPipelineKnownHost(params: BitBucket.RepositoriesCreatePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    createPipelineSchedule(params: BitBucket.RepositoriesCreatePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    createPipelineVariable(params: BitBucket.RepositoriesCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createPullRequest(params: BitBucket.RepositoriesCreatePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    createPullRequestApproval(params: BitBucket.RepositoriesCreatePullRequestApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Participant>>): Promise<BitBucket.Response<BitBucket.ResponseType.Participant>>;
    createSrcFileCommit(params: BitBucket.RepositoriesCreateSrcFileCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    createTag(params: BitBucket.RepositoriesCreateTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    createWebhook(params: BitBucket.RepositoriesCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    declinePullRequest(params: BitBucket.RepositoriesDeclinePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    delete(params: BitBucket.RepositoriesDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteBranch(params: BitBucket.RepositoriesDeleteBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteBranchRestriction(params: BitBucket.RepositoriesDeleteBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteCommitApproval(params: BitBucket.RepositoriesDeleteCommitApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteDefaultReviewer(params: BitBucket.RepositoriesDeleteDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteDownload(params: BitBucket.RepositoriesDeleteDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteIssue(params: BitBucket.RepositoriesDeleteIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    deleteIssueAttachment(params: BitBucket.RepositoriesDeleteIssueAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteIssueComment(params: BitBucket.RepositoriesDeleteIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteIssueVote(params: BitBucket.RepositoriesDeleteIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteIssueWatch(params: BitBucket.RepositoriesDeleteIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    deletePipelineKnownHost(params: BitBucket.RepositoriesDeletePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelineSchedule(params: BitBucket.RepositoriesDeletePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelineSshKeyPair(params: BitBucket.RepositoriesDeletePipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelineVariable(params: BitBucket.RepositoriesDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePullRequestApproval(params: BitBucket.RepositoriesDeletePullRequestApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteTag(params: BitBucket.RepositoriesDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.RepositoriesDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllCommits(params: BitBucket.RepositoriesFetchAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllCommitsForRevision(params: BitBucket.RepositoriesFetchAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.RepositoriesGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    getAllCommits(params: BitBucket.RepositoriesGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllCommitsForRevision(params: BitBucket.RepositoriesGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDefaultReviewers(params: BitBucket.RepositoriesGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDownloads(params: BitBucket.RepositoriesGetAllDownloadsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllPullRequestCommits(params: BitBucket.RepositoriesGetAllPullRequestCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllPullRequestsActivityLog(params: BitBucket.RepositoriesGetAllPullRequestsActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllWatchers(params: BitBucket.RepositoriesGetAllWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getBranch(params: BitBucket.RepositoriesGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    getBranchRestriction(params: BitBucket.RepositoriesGetBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    getCommit(params: BitBucket.RepositoriesGetCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commit>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commit>>;
    getCommitBuildStatus(params: BitBucket.RepositoriesGetCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    getCommitComment(params: BitBucket.RepositoriesGetCommitCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.CommitComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.CommitComment>>;
    getDefaultReviewer(params: BitBucket.RepositoriesGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiff(params: BitBucket.RepositoriesGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDownload(params: BitBucket.RepositoriesGetDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getIssue(params: BitBucket.RepositoriesGetIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    getIssueAttachment(params: BitBucket.RepositoriesGetIssueAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getIssueChange(params: BitBucket.RepositoriesGetIssueChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueChange>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueChange>>;
    getIssueComment(params: BitBucket.RepositoriesGetIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
    getIssueComponent(params: BitBucket.RepositoriesGetIssueComponentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Component>>): Promise<BitBucket.Response<BitBucket.ResponseType.Component>>;
    getIssueMilestone(params: BitBucket.RepositoriesGetIssueMilestoneParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Milestone>>): Promise<BitBucket.Response<BitBucket.ResponseType.Milestone>>;
    getIssueVersion(params: BitBucket.RepositoriesGetIssueVersionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Version>>): Promise<BitBucket.Response<BitBucket.ResponseType.Version>>;
    getIssueVote(params: BitBucket.RepositoriesGetIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getIssueWatch(params: BitBucket.RepositoriesGetIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getPatch(params: BitBucket.RepositoriesGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPipeline(params: BitBucket.RepositoriesGetPipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pipeline>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pipeline>>;
    getPipelineConfig(params: BitBucket.RepositoriesGetPipelineConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    getPipelineKnownHost(params: BitBucket.RepositoriesGetPipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    getPipelineSchedule(params: BitBucket.RepositoriesGetPipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    getPipelineSshKeyPair(params: BitBucket.RepositoriesGetPipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    getPipelineStep(params: BitBucket.RepositoriesGetPipelineStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>;
    getPipelineStepLog(params: BitBucket.RepositoriesGetPipelineStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getPipelineVariable(params: BitBucket.RepositoriesGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getPullRequest(params: BitBucket.RepositoriesGetPullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    getPullRequestActivityLog(params: BitBucket.RepositoriesGetPullRequestActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestComment(params: BitBucket.RepositoriesGetPullRequestCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>;
    getPullRequestDiff(params: BitBucket.RepositoriesGetPullRequestDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestDiffStat(params: BitBucket.RepositoriesGetPullRequestDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestPatch(params: BitBucket.RepositoriesGetPullRequestPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getSrc(params: BitBucket.RepositoriesGetSrcParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getSrcMainRoot(params: BitBucket.RepositoriesGetSrcMainRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getTag(params: BitBucket.RepositoriesGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    getWebhook(params: BitBucket.RepositoriesGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    list(params: BitBucket.RepositoriesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    listBranchRestrictions(params: BitBucket.RepositoriesListBranchRestrictionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>;
    listBranches(params: BitBucket.RepositoriesListBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>;
    listCommitComments(params: BitBucket.RepositoriesListCommitCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>;
    listCommitStatuses(params: BitBucket.RepositoriesListCommitStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    listComponents(params: BitBucket.RepositoriesListComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>;
    listDiffStats(params: BitBucket.RepositoriesListDiffStatsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedDiffstats>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedDiffstats>>;
    listFileHistory(params: BitBucket.RepositoriesListFileHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>;
    listForks(params: BitBucket.RepositoriesListForksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    listIssueAttachments(params: BitBucket.RepositoriesListIssueAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>;
    listIssueChanges(params: BitBucket.RepositoriesListIssueChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>;
    listIssueComments(params: BitBucket.RepositoriesListIssueCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>;
    listIssues(params: BitBucket.RepositoriesListIssuesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>;
    listMilestones(params: BitBucket.RepositoriesListMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>;
    listPermissions(params: BitBucket.RepositoriesListPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    listPipelineKnownHosts(params: BitBucket.RepositoriesListPipelineKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>;
    listPipelineScheduleExecutions(params: BitBucket.RepositoriesListPipelineScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>;
    listPipelineSchedules(params: BitBucket.RepositoriesListPipelineSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>;
    listPipelineSteps(params: BitBucket.RepositoriesListPipelineStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>;
    listPipelineVariables(params: BitBucket.RepositoriesListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    listPipelines(params: BitBucket.RepositoriesListPipelinesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>;
    listPublic(params: BitBucket.RepositoriesListPublicParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    listPullRequestComments(params: BitBucket.RepositoriesListPullRequestCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>;
    listPullRequestStatuses(params: BitBucket.RepositoriesListPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    listPullRequests(params: BitBucket.RepositoriesListPullRequestsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>;
    listRefs(params: BitBucket.RepositoriesListRefsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>;
    listTags(params: BitBucket.RepositoriesListTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>;
    listVersions(params: BitBucket.RepositoriesListVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>;
    listWebhooks(params: BitBucket.RepositoriesListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    mergePullRequest(params: BitBucket.RepositoriesMergePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    stopPipeline(params: BitBucket.RepositoriesStopPipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    update(params: BitBucket.RepositoriesUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    updateBranchRestriction(params: BitBucket.RepositoriesUpdateBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    updateCommitBuildStatus(params: BitBucket.RepositoriesUpdateCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    updateIssue(params: BitBucket.RepositoriesUpdateIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    updateIssueComment(params: BitBucket.RepositoriesUpdateIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
    updatePipelineBuildNumber(params: BitBucket.RepositoriesUpdatePipelineBuildNumberParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>;
    updatePipelineConfig(params: BitBucket.RepositoriesUpdatePipelineConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    updatePipelineKnownHost(params: BitBucket.RepositoriesUpdatePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    updatePipelineSchedule(params: BitBucket.RepositoriesUpdatePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    updatePipelineSshKeyPair(params: BitBucket.RepositoriesUpdatePipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    updatePipelineVariable(params: BitBucket.RepositoriesUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updatePullRequest(params: BitBucket.RepositoriesUpdatePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    updateWebhook(params: BitBucket.RepositoriesUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
  search: {
    codeOfTeam(params: BitBucket.SearchCodeOfTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    codeOfUser(params: BitBucket.SearchCodeOfUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
  };
  snippets: {
    checkWatch(params: BitBucket.SnippetsCheckWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    create(params: BitBucket.SnippetsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    createComment(params: BitBucket.SnippetsCreateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    createForUser(params: BitBucket.SnippetsCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    delete(params: BitBucket.SnippetsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteComment(params: BitBucket.SnippetsDeleteCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteRevision(params: BitBucket.SnippetsDeleteRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.SnippetsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    getAllCommitsForRevision(params: BitBucket.SnippetsGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SnippetCommit>>): Promise<BitBucket.Response<BitBucket.ResponseType.SnippetCommit>>;
    getComment(params: BitBucket.SnippetsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SnippetComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.SnippetComment>>;
    getDiff(params: BitBucket.SnippetsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getFile(params: BitBucket.SnippetsGetFileParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.SnippetsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getRevision(params: BitBucket.SnippetsGetRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    list(params: BitBucket.SnippetsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>;
    listComments(params: BitBucket.SnippetsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetComments>>;
    listCommits(params: BitBucket.SnippetsListCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetCommit>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetCommit>>;
    listForUser(params: BitBucket.SnippetsListForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>;
    listWatchers(params: BitBucket.SnippetsListWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    startWatch(params: BitBucket.SnippetsStartWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    stopWatch(params: BitBucket.SnippetsStopWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    update(params: BitBucket.SnippetsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    updateComment(params: BitBucket.SnippetsUpdateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    updateRevision(params: BitBucket.SnippetsUpdateRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
  };
  source: {
    createFileCommit(params: BitBucket.SourceCreateFileCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.SourceGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getMainRoot(params: BitBucket.SourceGetMainRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    listHistory(params: BitBucket.SourceListHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>;
  };
  ssh: {
    createKeyForUser(params: BitBucket.SshCreateKeyForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>;
    deleteKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    listKeys(params: BitBucket.SshListKeysParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>;
    updateKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  teams: {
    createPipelineVariable(params: BitBucket.TeamsCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createProject(params: BitBucket.TeamsCreateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    createWebhook(params: BitBucket.TeamsCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    deletePipelineVariable(params: BitBucket.TeamsDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteProject(params: BitBucket.TeamsDeleteProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.TeamsDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.TeamsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Team>>): Promise<BitBucket.Response<BitBucket.ResponseType.Team>>;
    getAllMembers(params: BitBucket.TeamsGetAllMembersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllRepositories(params: BitBucket.TeamsGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoriesForUser(params: BitBucket.TeamsGetAllRepositoriesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPipelineVariable(params: BitBucket.TeamsGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getProject(params: BitBucket.TeamsGetProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    getWebhook(params: BitBucket.TeamsGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    list(params: BitBucket.TeamsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeams>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeams>>;
    listFollowers(params: BitBucket.TeamsListFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    listFollowing(params: BitBucket.TeamsListFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    listPipelineVariables(params: BitBucket.TeamsListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    listProjects(params: BitBucket.TeamsListProjectsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>;
    listRepositoryPermissions(params: BitBucket.TeamsListRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    listTeamPermissions(params: BitBucket.TeamsListTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>;
    listWebhooks(params: BitBucket.TeamsListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    searchCode(params: BitBucket.TeamsSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    updatePipelineVariable(params: BitBucket.TeamsUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updateProject(params: BitBucket.TeamsUpdateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    updateWebhook(params: BitBucket.TeamsUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
  user: {
    get(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllEmails(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getEmail(params: BitBucket.UserGetEmailParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    listRepositoryPermissions(params: BitBucket.UserListRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    listTeamPermissions(params: BitBucket.UserListTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>;
  };
  users: {
    createPipelineVariable(params: BitBucket.UsersCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createSshKey(params: BitBucket.UsersCreateSshKeyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>;
    createWebhook(params: BitBucket.UsersCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    deletePipelineVariable(params: BitBucket.UsersDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.UsersDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.UsersGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllEmailsForAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositories(params: BitBucket.UsersGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoriesForTeam(params: BitBucket.UsersGetAllRepositoriesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getEmailForAuthedUser(params: BitBucket.UsersGetEmailForAuthedUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPipelineVariable(params: BitBucket.UsersGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getWebhook(params: BitBucket.UsersGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    listFollowers(params: BitBucket.UsersListFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    listFollowing(params: BitBucket.UsersListFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    listPipelineVariables(params: BitBucket.UsersListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    listSshKeys(params: BitBucket.UsersListSshKeysParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>;
    listWebhooks(params: BitBucket.UsersListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    searchCode(params: BitBucket.UsersSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    updatePipelineVariable(params: BitBucket.UsersUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updateSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    updateWebhook(params: BitBucket.UsersUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
  webhooks: {
    create(params: BitBucket.WebhooksCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    createForTeam(params: BitBucket.WebhooksCreateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    createForUser(params: BitBucket.WebhooksCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    delete(params: BitBucket.WebhooksDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteForTeam(params: BitBucket.WebhooksDeleteForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteForUser(params: BitBucket.WebhooksDeleteForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.WebhooksGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    getForTeam(params: BitBucket.WebhooksGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    getForUser(params: BitBucket.WebhooksGetForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    list(params: BitBucket.WebhooksListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>;
    listForRepo(params: BitBucket.WebhooksListForRepoParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    listForTeam(params: BitBucket.WebhooksListForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    listForUser(params: BitBucket.WebhooksListForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>): Promise<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>;
    update(params: BitBucket.WebhooksUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    updateForTeam(params: BitBucket.WebhooksUpdateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    updateForUser(params: BitBucket.WebhooksUpdateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
}

export = BitBucket
