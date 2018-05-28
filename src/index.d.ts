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
  getPage(url: BitBucket.Link, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;

  branchrestrictions: {
    create(params: BitBucket.BranchrestrictionsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    delete(params: BitBucket.BranchrestrictionsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.BranchrestrictionsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    getAll(params: BitBucket.BranchrestrictionsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>;
    update(params: BitBucket.BranchrestrictionsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
  };
  commits: {
    createApproval(params: BitBucket.CommitsCreateApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Participant>>): Promise<BitBucket.Response<BitBucket.ResponseType.Participant>>;
    deleteApproval(params: BitBucket.CommitsDeleteApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAll(params: BitBucket.CommitsFetchAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllForRevision(params: BitBucket.CommitsFetchAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.CommitsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commit>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commit>>;
    getAll(params: BitBucket.CommitsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllComments(params: BitBucket.CommitsGetAllCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>;
    getAllForRevision(params: BitBucket.CommitsGetAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getComment(params: BitBucket.CommitsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.CommitComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.CommitComment>>;
    getDiff(params: BitBucket.CommitsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.CommitsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  commitstatuses: {
    createBuildStatus(params: BitBucket.CommitstatusesCreateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    getAll(params: BitBucket.CommitstatusesGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    getAllPullRequestStatuses(params: BitBucket.CommitstatusesGetAllPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    getBuildStatus(params: BitBucket.CommitstatusesGetBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    updateBuildStatus(params: BitBucket.CommitstatusesUpdateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
  };
  downloads: {
    create(params: BitBucket.DownloadsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    delete(params: BitBucket.DownloadsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.DownloadsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAll(params: BitBucket.DownloadsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  hookEvents: {
    listAll(params: BitBucket.HookEventsListAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>;
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
    getAll(params: BitBucket.IssueTrackerGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>;
    getAllAttachments(params: BitBucket.IssueTrackerGetAllAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>;
    getAllChanges(params: BitBucket.IssueTrackerGetAllChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>;
    getAllComments(params: BitBucket.IssueTrackerGetAllCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>;
    getAllComponents(params: BitBucket.IssueTrackerGetAllComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>;
    getAllMilestones(params: BitBucket.IssueTrackerGetAllMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>;
    getAllVersions(params: BitBucket.IssueTrackerGetAllVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>;
    getAttachment(params: BitBucket.IssueTrackerGetAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getChange(params: BitBucket.IssueTrackerGetChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueChange>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueChange>>;
    getComment(params: BitBucket.IssueTrackerGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
    getComponent(params: BitBucket.IssueTrackerGetComponentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Component>>): Promise<BitBucket.Response<BitBucket.ResponseType.Component>>;
    getMilestone(params: BitBucket.IssueTrackerGetMilestoneParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Milestone>>): Promise<BitBucket.Response<BitBucket.ResponseType.Milestone>>;
    getVersion(params: BitBucket.IssueTrackerGetVersionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Version>>): Promise<BitBucket.Response<BitBucket.ResponseType.Version>>;
    getVote(params: BitBucket.IssueTrackerGetVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getWatch(params: BitBucket.IssueTrackerGetWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
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
    getAll(params: BitBucket.PipelinesGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>;
    getAllKnownHosts(params: BitBucket.PipelinesGetAllKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>;
    getAllScheduleExecutions(params: BitBucket.PipelinesGetAllScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>;
    getAllSchedules(params: BitBucket.PipelinesGetAllSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>;
    getAllSteps(params: BitBucket.PipelinesGetAllStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>;
    getAllVariables(params: BitBucket.PipelinesGetAllVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getAllVariablesForTeam(params: BitBucket.PipelinesGetAllVariablesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getAllVariablesForUser(params: BitBucket.PipelinesGetAllVariablesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getConfig(params: BitBucket.PipelinesGetConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    getKnownHost(params: BitBucket.PipelinesGetKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    getSchedule(params: BitBucket.PipelinesGetScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    getSshKeyPair(params: BitBucket.PipelinesGetSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    getStep(params: BitBucket.PipelinesGetStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>;
    getStepLog(params: BitBucket.PipelinesGetStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getVariable(params: BitBucket.PipelinesGetVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getVariableForTeam(params: BitBucket.PipelinesGetVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getVariableForUser(params: BitBucket.PipelinesGetVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
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
    getAllForTeam(params: BitBucket.ProjectsGetAllForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>;
    getForTeam(params: BitBucket.ProjectsGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
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
    getAll(params: BitBucket.PullrequestsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>;
    getAllActivityLog(params: BitBucket.PullrequestsGetAllActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllComments(params: BitBucket.PullrequestsGetAllCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>;
    getAllCommits(params: BitBucket.PullrequestsGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDefaultReviewers(params: BitBucket.PullrequestsGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllStatuses(params: BitBucket.PullrequestsGetAllStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    getComment(params: BitBucket.PullrequestsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>;
    getDefaultReviewer(params: BitBucket.PullrequestsGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiff(params: BitBucket.PullrequestsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiffStat(params: BitBucket.PullrequestsGetDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.PullrequestsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    merge(params: BitBucket.PullrequestsMergeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    update(params: BitBucket.PullrequestsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
  };
  refs: {
    createBranch(params: BitBucket.RefsCreateBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    createTag(params: BitBucket.RefsCreateTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    deleteBranch(params: BitBucket.RefsDeleteBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteTag(params: BitBucket.RefsDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAll(params: BitBucket.RefsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>;
    getAllBranches(params: BitBucket.RefsGetAllBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>;
    getAllTags(params: BitBucket.RefsGetAllTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>;
    getBranch(params: BitBucket.RefsGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    getTag(params: BitBucket.RefsGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
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
    createPipelinesKnownHost(params: BitBucket.RepositoriesCreatePipelinesKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    createPipelinesSchedule(params: BitBucket.RepositoriesCreatePipelinesScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    createPipelinesVariable(params: BitBucket.RepositoriesCreatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
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
    deletePipelinesKnownHost(params: BitBucket.RepositoriesDeletePipelinesKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelinesSchedule(params: BitBucket.RepositoriesDeletePipelinesScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelinesSshKeyPair(params: BitBucket.RepositoriesDeletePipelinesSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePipelinesVariable(params: BitBucket.RepositoriesDeletePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deletePullRequestApproval(params: BitBucket.RepositoriesDeletePullRequestApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteTag(params: BitBucket.RepositoriesDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.RepositoriesDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllCommits(params: BitBucket.RepositoriesFetchAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    fetchAllCommitsForRevision(params: BitBucket.RepositoriesFetchAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.RepositoriesGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    getAll(params: BitBucket.RepositoriesGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    getAllBranchRestrictions(params: BitBucket.RepositoriesGetAllBranchRestrictionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranchrestrictions>>;
    getAllBranches(params: BitBucket.RepositoriesGetAllBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedBranches>>;
    getAllCommitComments(params: BitBucket.RepositoriesGetAllCommitCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitComments>>;
    getAllCommitStatuses(params: BitBucket.RepositoriesGetAllCommitStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    getAllCommits(params: BitBucket.RepositoriesGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllCommitsForRevision(params: BitBucket.RepositoriesGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDefaultReviewers(params: BitBucket.RepositoriesGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllDownloads(params: BitBucket.RepositoriesGetAllDownloadsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllForks(params: BitBucket.RepositoriesGetAllForksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    getAllIssueAttachments(params: BitBucket.RepositoriesGetAllIssueAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueAttachments>>;
    getAllIssueChanges(params: BitBucket.RepositoriesGetAllIssueChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedLogEntries>>;
    getAllIssueComments(params: BitBucket.RepositoriesGetAllIssueCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssueComments>>;
    getAllIssueComponents(params: BitBucket.RepositoriesGetAllIssueComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedComponents>>;
    getAllIssueMilestones(params: BitBucket.RepositoriesGetAllIssueMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedMilestones>>;
    getAllIssueVersions(params: BitBucket.RepositoriesGetAllIssueVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedVersions>>;
    getAllIssues(params: BitBucket.RepositoriesGetAllIssuesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedIssues>>;
    getAllPermissions(params: BitBucket.RepositoriesGetAllPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    getAllPipelineSteps(params: BitBucket.RepositoriesGetAllPipelineStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSteps>>;
    getAllPipelines(params: BitBucket.RepositoriesGetAllPipelinesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelines>>;
    getAllPipelinesKnownHosts(params: BitBucket.RepositoriesGetAllPipelinesKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineKnownHosts>>;
    getAllPipelinesScheduleExecutions(params: BitBucket.RepositoriesGetAllPipelinesScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineScheduleExecutions>>;
    getAllPipelinesSchedules(params: BitBucket.RepositoriesGetAllPipelinesSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineSchedules>>;
    getAllPipelinesVariables(params: BitBucket.RepositoriesGetAllPipelinesVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getAllPullRequestComments(params: BitBucket.RepositoriesGetAllPullRequestCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequestComments>>;
    getAllPullRequestCommits(params: BitBucket.RepositoriesGetAllPullRequestCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllPullRequestStatuses(params: BitBucket.RepositoriesGetAllPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedCommitstatuses>>;
    getAllPullRequests(params: BitBucket.RepositoriesGetAllPullRequestsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPullrequests>>;
    getAllPullRequestsActivityLog(params: BitBucket.RepositoriesGetAllPullRequestsActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRefs(params: BitBucket.RepositoriesGetAllRefsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRefs>>;
    getAllTags(params: BitBucket.RepositoriesGetAllTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTags>>;
    getAllWatchers(params: BitBucket.RepositoriesGetAllWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllWebhooks(params: BitBucket.RepositoriesGetAllWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getBranch(params: BitBucket.RepositoriesGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branch>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branch>>;
    getBranchRestriction(params: BitBucket.RepositoriesGetBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    getCommit(params: BitBucket.RepositoriesGetCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commit>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commit>>;
    getCommitBuildStatus(params: BitBucket.RepositoriesGetCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    getCommitComment(params: BitBucket.RepositoriesGetCommitCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.CommitComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.CommitComment>>;
    getDefaultReviewer(params: BitBucket.RepositoriesGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiff(params: BitBucket.RepositoriesGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getDiffStat(params: BitBucket.RepositoriesGetDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedDiffstats>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedDiffstats>>;
    getDownload(params: BitBucket.RepositoriesGetDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getFileHistory(params: BitBucket.RepositoriesGetFileHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>;
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
    getPipelineStep(params: BitBucket.RepositoriesGetPipelineStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineStep>>;
    getPipelineStepLog(params: BitBucket.RepositoriesGetPipelineStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Error>>): Promise<BitBucket.Response<BitBucket.ResponseType.Error>>;
    getPipelinesConfig(params: BitBucket.RepositoriesGetPipelinesConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    getPipelinesKnownHost(params: BitBucket.RepositoriesGetPipelinesKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    getPipelinesSchedule(params: BitBucket.RepositoriesGetPipelinesScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    getPipelinesSshKeyPair(params: BitBucket.RepositoriesGetPipelinesSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    getPipelinesVariable(params: BitBucket.RepositoriesGetPipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getPublic(params: BitBucket.RepositoriesGetPublicParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositories>>;
    getPullRequest(params: BitBucket.RepositoriesGetPullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    getPullRequestActivityLog(params: BitBucket.RepositoriesGetPullRequestActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestComment(params: BitBucket.RepositoriesGetPullRequestCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.PullrequestComment>>;
    getPullRequestDiff(params: BitBucket.RepositoriesGetPullRequestDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestDiffStat(params: BitBucket.RepositoriesGetPullRequestDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPullRequestPatch(params: BitBucket.RepositoriesGetPullRequestPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getSrc(params: BitBucket.RepositoriesGetSrcParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getSrcRoot(params: BitBucket.RepositoriesGetSrcRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getTag(params: BitBucket.RepositoriesGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Tag>>): Promise<BitBucket.Response<BitBucket.ResponseType.Tag>>;
    getWebhook(params: BitBucket.RepositoriesGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    mergePullRequest(params: BitBucket.RepositoriesMergePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    stopPipeline(params: BitBucket.RepositoriesStopPipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    update(params: BitBucket.RepositoriesUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Repository>>): Promise<BitBucket.Response<BitBucket.ResponseType.Repository>>;
    updateBranchRestriction(params: BitBucket.RepositoriesUpdateBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.ResponseType.Branchrestriction>>;
    updateCommitBuildStatus(params: BitBucket.RepositoriesUpdateCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>): Promise<BitBucket.Response<BitBucket.ResponseType.Commitstatus>>;
    updateIssue(params: BitBucket.RepositoriesUpdateIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Issue>>): Promise<BitBucket.Response<BitBucket.ResponseType.Issue>>;
    updateIssueComment(params: BitBucket.RepositoriesUpdateIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.IssueComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.IssueComment>>;
    updatePipelinesBuildNumber(params: BitBucket.RepositoriesUpdatePipelinesBuildNumberParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineBuildNumber>>;
    updatePipelinesConfig(params: BitBucket.RepositoriesUpdatePipelinesConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelinesConfig>>;
    updatePipelinesKnownHost(params: BitBucket.RepositoriesUpdatePipelinesKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineKnownHost>>;
    updatePipelinesSchedule(params: BitBucket.RepositoriesUpdatePipelinesScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSchedule>>;
    updatePipelinesSshKeyPair(params: BitBucket.RepositoriesUpdatePipelinesSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineSshKeyPair>>;
    updatePipelinesVariable(params: BitBucket.RepositoriesUpdatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updatePullRequest(params: BitBucket.RepositoriesUpdatePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>): Promise<BitBucket.Response<BitBucket.ResponseType.Pullrequest>>;
    updateWebhook(params: BitBucket.RepositoriesUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
  search: {
    codeOfTeam(params: BitBucket.SearchCodeOfTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    codeOfUser(params: BitBucket.SearchCodeOfUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
  };
  snippets: {
    create(params: BitBucket.SnippetsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    createComment(params: BitBucket.SnippetsCreateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    createForUser(params: BitBucket.SnippetsCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    createWatch(params: BitBucket.SnippetsCreateWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    delete(params: BitBucket.SnippetsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteComment(params: BitBucket.SnippetsDeleteCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteRevision(params: BitBucket.SnippetsDeleteRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWatch(params: BitBucket.SnippetsDeleteWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    get(params: BitBucket.SnippetsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    getAll(params: BitBucket.SnippetsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>;
    getAllComments(params: BitBucket.SnippetsGetAllCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetComments>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetComments>>;
    getAllCommits(params: BitBucket.SnippetsGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetCommit>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippetCommit>>;
    getAllCommitsForRevision(params: BitBucket.SnippetsGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SnippetCommit>>): Promise<BitBucket.Response<BitBucket.ResponseType.SnippetCommit>>;
    getAllForUser(params: BitBucket.SnippetsGetAllForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSnippets>>;
    getAllWatchers(params: BitBucket.SnippetsGetAllWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    getComment(params: BitBucket.SnippetsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SnippetComment>>): Promise<BitBucket.Response<BitBucket.ResponseType.SnippetComment>>;
    getDiff(params: BitBucket.SnippetsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getFile(params: BitBucket.SnippetsGetFileParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPatch(params: BitBucket.SnippetsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getRevision(params: BitBucket.SnippetsGetRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    getWatch(params: BitBucket.SnippetsGetWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    update(params: BitBucket.SnippetsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
    updateComment(params: BitBucket.SnippetsUpdateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    updateRevision(params: BitBucket.SnippetsUpdateRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Snippet>>): Promise<BitBucket.Response<BitBucket.ResponseType.Snippet>>;
  };
  source: {
    createFileCommit(params: BitBucket.SourceCreateFileCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.SourceGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
    getHistory(params: BitBucket.SourceGetHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedFiles>>;
    getRoot(params: BitBucket.SourceGetRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTreeentries>>;
  };
  ssh: {
    createForUser(params: BitBucket.SshCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>;
    deleteForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllForUser(params: BitBucket.SshGetAllForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>;
    getForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    updateForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  teams: {
    createPipelinesVariable(params: BitBucket.TeamsCreatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createProject(params: BitBucket.TeamsCreateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    createWebhook(params: BitBucket.TeamsCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    deletePipelinesVariable(params: BitBucket.TeamsDeletePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteProject(params: BitBucket.TeamsDeleteProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.TeamsDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.TeamsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Team>>): Promise<BitBucket.Response<BitBucket.ResponseType.Team>>;
    getAll(params: BitBucket.TeamsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeams>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeams>>;
    getAllFollowers(params: BitBucket.TeamsGetAllFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    getAllFollowing(params: BitBucket.TeamsGetAllFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    getAllMembers(params: BitBucket.TeamsGetAllMembersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllPipelinesVariables(params: BitBucket.TeamsGetAllPipelinesVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getAllProjects(params: BitBucket.TeamsGetAllProjectsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedProjects>>;
    getAllRepositories(params: BitBucket.TeamsGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoriesForUser(params: BitBucket.TeamsGetAllRepositoriesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoryPermissions(params: BitBucket.TeamsGetAllRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    getAllTeamPermissions(params: BitBucket.TeamsGetAllTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>;
    getAllWebhooks(params: BitBucket.TeamsGetAllWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getPipelinesVariable(params: BitBucket.TeamsGetPipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getProject(params: BitBucket.TeamsGetProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    getWebhook(params: BitBucket.TeamsGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    searchCode(params: BitBucket.TeamsSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    updatePipelinesVariable(params: BitBucket.TeamsUpdatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    updateProject(params: BitBucket.TeamsUpdateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Project>>): Promise<BitBucket.Response<BitBucket.ResponseType.Project>>;
    updateWebhook(params: BitBucket.TeamsUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
  user: {
    get(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllEmails(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoryPermissions(params: BitBucket.UserGetAllRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedRepositoryPermissions>>;
    getAllTeamPermissions(params: BitBucket.UserGetAllTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedTeamPermissions>>;
    getEmail(params: BitBucket.UserGetEmailParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
  };
  users: {
    createPipelinesVariable(params: BitBucket.UsersCreatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    createSshKey(params: BitBucket.UsersCreateSshKeyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.ResponseType.SshAccountKey>>;
    createWebhook(params: BitBucket.UsersCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    deletePipelinesVariable(params: BitBucket.UsersDeletePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    deleteWebhook(params: BitBucket.UsersDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    get(params: BitBucket.UsersGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getAllEmailsForAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllFollowers(params: BitBucket.UsersGetAllFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    getAllFollowing(params: BitBucket.UsersGetAllFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedUsers>>;
    getAllPipelinesVariables(params: BitBucket.UsersGetAllPipelinesVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedPipelineVariables>>;
    getAllRepositories(params: BitBucket.UsersGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllRepositoriesForTeam(params: BitBucket.UsersGetAllRepositoriesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getAllSshKeys(params: BitBucket.UsersGetAllSshKeysParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedSshUserKeys>>;
    getAllWebhooks(params: BitBucket.UsersGetAllWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.User>>): Promise<BitBucket.Response<BitBucket.ResponseType.User>>;
    getEmailForAuthedUser(params: BitBucket.UsersGetEmailForAuthedUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getPipelinesVariable(params: BitBucket.UsersGetPipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
    getSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.Any>>): Promise<BitBucket.Response<BitBucket.ResponseType.Any>>;
    getWebhook(params: BitBucket.UsersGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    searchCode(params: BitBucket.UsersSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.ResponseType.SearchResultPage>>;
    updatePipelinesVariable(params: BitBucket.UsersUpdatePipelinesVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.ResponseType.PipelineVariable>>;
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
    getAll(params: BitBucket.WebhooksGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getAllForTeam(params: BitBucket.WebhooksGetAllForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getAllForUser(params: BitBucket.WebhooksGetAllForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedWebhookSubscriptions>>;
    getForTeam(params: BitBucket.WebhooksGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    getForUser(params: BitBucket.WebhooksGetForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    listAll(params: BitBucket.WebhooksListAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.ResponseType.PaginatedHookEvents>>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>): Promise<BitBucket.Response<BitBucket.ResponseType.SubjectTypes>>;
    update(params: BitBucket.WebhooksUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    updateForTeam(params: BitBucket.WebhooksUpdateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
    updateForUser(params: BitBucket.WebhooksUpdateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.ResponseType.WebhookSubscription>>;
  };
}

export = BitBucket
