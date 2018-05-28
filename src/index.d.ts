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
    (error: BitBucket.Type.Error | null, response: T): void;
  }

  export interface Response<T> {
    data: T;
    headers: any;
  }

  namespace Type {
    export type Any = any

    export type Branch = Ref & {
      [k: string]: any;
    };
    export type Commit = BaseCommit & {
      links?: {
        approve?: {
          href?: string;
          name?: string;
        };
        comments?: {
          href?: string;
          name?: string;
        };
        diff?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        patch?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
        statuses?: {
          href?: string;
          name?: string;
        };
      };
      participants?: Participant[];
      repository?: Repository;
      [k: string]: any;
    };
    export type BaseCommit = Object & {
      author?: Author;
      date?: string;
      hash?: string;
      message?: string;
      parents?: BaseCommit[];
      summary?: {
        html?: string;
        markup?: "markdown" | "creole" | "plaintext";
        raw?: string;
      };
      [k: string]: any;
    };
    export type Author = Object & {
      raw?: string;
      user?: Account;
      [k: string]: any;
    };
    export type Account = Object & {
      created_on?: string;
      display_name?: string;
      links?: {
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
        html?: {
          href?: string;
          name?: string;
        };
        repositories?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      username?: string;
      uuid?: string;
      website?: string;
      [k: string]: any;
    };
    export type Participant = Object & {
      approved?: boolean;
      participated_on?: string;
      role?: "PARTICIPANT" | "REVIEWER";
      user?: User;
      [k: string]: any;
    };
    export type User = Account & {
      account_id?: string;
      is_staff?: boolean;
      [k: string]: any;
    };
    export type Repository = Object & {
      created_on?: string;
      description?: string;
      fork_policy?: "allow_forks" | "no_public_forks" | "no_forks";
      full_name?: string;
      has_issues?: boolean;
      has_wiki?: boolean;
      is_private?: boolean;
      language?: string;
      links?: {
        avatar?: {
          href?: string;
          name?: string;
        };
        clone?: {
          href?: string;
          name?: string;
        }[];
        commits?: {
          href?: string;
          name?: string;
        };
        downloads?: {
          href?: string;
          name?: string;
        };
        forks?: {
          href?: string;
          name?: string;
        };
        hooks?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        pullrequests?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
        watchers?: {
          href?: string;
          name?: string;
        };
      };
      mainbranch?: Branch;
      name?: string;
      owner?: Account;
      parent?: Repository;
      project?: Project;
      scm?: "hg" | "git";
      size?: number;
      updated_on?: string;
      uuid?: string;
      [k: string]: any;
    };
    export type Project = Object & {
      created_on?: string;
      description?: string;
      is_private?: boolean;
      key?: string;
      links?: {
        avatar?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      owner?: Team;
      updated_on?: string;
      uuid?: string;
      [k: string]: any;
    };
    export type Team = Account & {
      [k: string]: any;
    };
    export type Branchrestriction = Object & {
      groups?: Group[];
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
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      users?: Account[];
      value?: number;
      [k: string]: any;
    };
    export type Group = Object & {
      full_slug?: string;
      links?: {
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      members?: number;
      name?: string;
      owner?: Account;
      slug?: string;
      [k: string]: any;
    };
    export type CommitComment = Comment & {
      commit?: Commit;
      [k: string]: any;
    };
    export type Comment = Object & {
      content?: {
        html?: string;
        markup?: "markdown" | "creole" | "plaintext";
        raw?: string;
      };
      created_on?: string;
      deleted?: boolean;
      id?: number;
      inline?: {
        from?: number;
        path: string;
        to?: number;
      };
      links?: {
        code?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      parent?: Comment;
      updated_on?: string;
      user?: User;
      [k: string]: any;
    };
    export type Commitstatus = Object & {
      created_on?: string;
      description?: string;
      key?: string;
      links?: {
        commit?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      refname?: string;
      state?: "SUCCESSFUL" | "FAILED" | "INPROGRESS" | "STOPPED";
      updated_on?: string;
      url?: string;
      uuid?: string;
      [k: string]: any;
    };
    export type Component = Object & {
      id?: number;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      [k: string]: any;
    };
    export type Issue = Object & {
      assignee?: User;
      component?: Component;
      content?: {
        html?: string;
        markup?: "markdown" | "creole" | "plaintext";
        raw?: string;
      };
      created_on?: string;
      edited_on?: string;
      id?: number;
      kind?: "bug" | "enhancement" | "proposal" | "task";
      links?: {
        attachments?: {
          href?: string;
          name?: string;
        };
        comments?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
        vote?: {
          href?: string;
          name?: string;
        };
        watch?: {
          href?: string;
          name?: string;
        };
      };
      milestone?: Milestone;
      priority?: "trivial" | "minor" | "major" | "critical" | "blocker";
      reporter?: User;
      repository?: Repository;
      state?: "new" | "open" | "resolved" | "on hold" | "invalid" | "duplicate" | "wontfix" | "closed";
      title?: string;
      updated_on?: string;
      version?: Version;
      votes?: number;
      [k: string]: any;
    };
    export type Milestone = Object & {
      id?: number;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      [k: string]: any;
    };
    export type Version = Object & {
      id?: number;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
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
      hostname?: string;
      public_key?: PipelineSshPublicKey;
      uuid?: string;
      [k: string]: any;
    };
    export type PipelineSshPublicKey = Object & {
      key?: string;
      key_type?: string;
      md5_fingerprint?: string;
      sha256_fingerprint?: string;
      [k: string]: any;
    };
    export type PipelineScheduleExecution = Object & {
      [k: string]: any;
    };
    export type PipelineSchedule = Object & {
      created_on?: string;
      cron_pattern?: string;
      enabled?: boolean;
      selector?: PipelineSelector;
      target?: PipelineTarget;
      updated_on?: string;
      uuid?: string;
      [k: string]: any;
    };
    export type PipelineSelector = Object & {
      pattern?: string;
      type?: "branches" | "tags" | "bookmarks" | "default" | "custom";
      [k: string]: any;
    };
    export type PipelineTarget = Object & {
      [k: string]: any;
    };
    export type PipelineStep = Object & {
      completed_on?: string;
      image?: PipelineImage;
      logByteCount?: number;
      script_commands?: PipelineCommand[];
      setup_commands?: PipelineCommand[];
      started_on?: string;
      state?: PipelineStepState;
      uuid?: string;
      [k: string]: any;
    };
    export type PipelineStepState = Object & {
      [k: string]: any;
    };
    export type PipelineVariable = Object & {
      key?: string;
      secured?: boolean;
      uuid?: string;
      value?: string;
      [k: string]: any;
    };
    export type Pipeline = Object & {
      build_number?: number;
      build_seconds_used?: number;
      completed_on?: string;
      created_on?: string;
      creator?: Account;
      repository?: Repository;
      state?: PipelineState;
      target?: PipelineTarget;
      trigger?: PipelineTrigger;
      uuid?: string;
      [k: string]: any;
    };
    export type PipelineState = Object & {
      [k: string]: any;
    };
    export type PipelineTrigger = Object & {
      [k: string]: any;
    };
    export type PullrequestComment = Comment & {
      pullrequest?: Pullrequest;
      [k: string]: any;
    };
    export type Pullrequest = Object & {
      author?: Account;
      close_source_branch?: boolean;
      closed_by?: Account;
      comment_count?: number;
      created_on?: string;
      destination?: PullrequestEndpoint;
      id?: number;
      links?: {
        activity?: {
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
        commits?: {
          href?: string;
          name?: string;
        };
        decline?: {
          href?: string;
          name?: string;
        };
        diff?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        merge?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      merge_commit?: {
        hash?: string;
      };
      participants?: Participant[];
      reason?: string;
      reviewers?: Account[];
      source?: PullrequestEndpoint;
      state?: "MERGED" | "SUPERSEDED" | "OPEN" | "DECLINED";
      summary?: {
        html?: string;
        markup?: "markdown" | "creole" | "plaintext";
        raw?: string;
      };
      task_count?: number;
      title?: string;
      updated_on?: string;
      [k: string]: any;
    };
    export type SnippetComment = Object & {
      links?: {
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      snippet?: Snippet;
      [k: string]: any;
    };
    export type Snippet = Object & {
      created_on?: string;
      creator?: Account;
      id?: number;
      is_private?: boolean;
      owner?: Account;
      scm?: "hg" | "git";
      title?: string;
      updated_on?: string;
      [k: string]: any;
    };
    export type SnippetCommit = BaseCommit & {
      links?: {
        diff?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
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
      comment?: string;
      created_on?: string;
      key?: string;
      label?: string;
      last_used?: string;
      links?: {
        self?: {
          href?: string;
          name?: string;
        };
      };
      uuid?: string;
      [k: string]: any;
    };
    export type Tag = Ref & {
      date?: string;
      message?: string;
      tagger?: Author;
      [k: string]: any;
    };
    export type WebhookSubscription = Object & {
      active?: boolean;
      created_at?: string;
      description?: string;
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
      subject?: Object;
      subject_type?: "user" | "repository" | "team";
      url?: string;
      uuid?: string;
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
      links?: {
        commits?: {
          href?: string;
          name?: string;
        };
        html?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      name?: string;
      target?: Commit;
      type: string;
      [k: string]: any;
    }
    export interface Object {
      type: string;
      [k: string]: any;
    }
    export interface Error {
      error?: {
        data?: {
          [k: string]: any;
        };
        detail?: string;
        message: string;
      };
      type: string;
      [k: string]: any;
    }
    export interface IssueChange {
      changes?: {
        assignee?: {
          new?: string;
          old?: string;
        };
        component?: {
          new?: string;
          old?: string;
        };
        content?: {
          new?: string;
          old?: string;
        };
        kind?: {
          new?: string;
          old?: string;
        };
        milestone?: {
          new?: string;
          old?: string;
        };
        priority?: {
          new?: string;
          old?: string;
        };
        state?: {
          new?: string;
          old?: string;
        };
        title?: {
          new?: string;
          old?: string;
        };
        version?: {
          new?: string;
          old?: string;
        };
      };
      created_on?: string;
      issue?: Issue;
      links?: {
        issue?: {
          href?: string;
          name?: string;
        };
        self?: {
          href?: string;
          name?: string;
        };
      };
      message?: {
        html?: string;
        markup?: "markdown" | "creole" | "plaintext";
        raw?: string;
      };
      name?: string;
      type: string;
      user?: User;
      [k: string]: any;
    }
    export interface PaginatedBranches {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Branch[];
    }
    export interface PaginatedBranchrestrictions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Branchrestriction[];
    }
    export interface PaginatedCommitComments {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: CommitComment[];
    }
    export interface PaginatedCommitstatuses {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Commitstatus[];
    }
    export interface PaginatedComponents {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Component[];
    }
    export interface PaginatedDiffstats {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Diffstat[];
    }
    export interface Diffstat {
      lines_added?: number;
      lines_removed?: number;
      new?: CommitFile;
      old?: CommitFile;
      status?: "added" | "removed" | "modified" | "renamed";
      type: string;
      [k: string]: any;
    }
    export interface CommitFile {
      attributes?: "link" | "executable" | "subrepository" | "binary" | "lfs";
      commit?: Commit;
      path?: string;
      type: string;
      [k: string]: any;
    }
    export interface PaginatedFiles {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: CommitFile[];
    }
    export interface PaginatedHookEvents {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: HookEvent[];
    }
    export interface HookEvent {
      category?: string;
      description?: string;
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
      label?: string;
    }
    export interface PaginatedIssueAttachments {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: IssueAttachment[];
    }
    export interface PaginatedIssueComments {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: IssueComment[];
    }
    export interface PaginatedIssues {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Issue[];
    }
    export interface PaginatedLogEntries {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: IssueChange[];
    }
    export interface PaginatedMilestones {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Milestone[];
    }
    export interface PaginatedPipelineKnownHosts {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PipelineKnownHost[];
      [k: string]: any;
    }
    export interface PaginatedPipelineScheduleExecutions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PipelineScheduleExecution[];
      [k: string]: any;
    }
    export interface PaginatedPipelineSchedules {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PipelineSchedule[];
      [k: string]: any;
    }
    export interface PaginatedPipelineSteps {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PipelineStep[];
      [k: string]: any;
    }
    export interface PipelineImage {
      email?: string;
      name?: string;
      password?: string;
      username?: string;
      [k: string]: any;
    }
    export interface PipelineCommand {
      command?: string;
      log_range?: PipelineLogRange;
      name?: string;
      [k: string]: any;
    }
    export interface PipelineLogRange {
      first_byte_position?: number;
      last_byte_position?: number;
      [k: string]: any;
    }
    export interface PaginatedPipelineVariables {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PipelineVariable[];
      [k: string]: any;
    }
    export interface PaginatedPipelines {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Pipeline[];
      [k: string]: any;
    }
    export interface PaginatedProjects {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Project[];
    }
    export interface PaginatedPullrequestComments {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: PullrequestComment[];
    }
    export interface PullrequestEndpoint {
      branch?: {
        name?: string;
      };
      commit?: {
        hash?: string;
      };
      repository?: Repository;
    }
    export interface PaginatedPullrequests {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Pullrequest[];
    }
    export interface PaginatedRefs {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Ref[];
    }
    export interface PaginatedRepositories {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Repository[];
    }
    export interface PaginatedRepositoryPermissions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: RepositoryPermission[];
    }
    export interface RepositoryPermission {
      permission?: "admin" | "write" | "read";
      repository?: Repository;
      type: string;
      user?: User;
      [k: string]: any;
    }
    export interface PaginatedSnippetComments {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: SnippetComment[];
    }
    export interface PaginatedSnippetCommit {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: SnippetCommit[];
    }
    export interface PaginatedSnippets {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Snippet[];
    }
    export interface PaginatedSshUserKeys {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: SshAccountKey[];
    }
    export interface PaginatedTags {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Tag[];
    }
    export interface PaginatedTeamPermissions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: TeamPermission[];
    }
    export interface TeamPermission {
      permission?: "admin" | "collaborator";
      team?: Team;
      type: string;
      user?: User;
      [k: string]: any;
    }
    export interface PaginatedTeams {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Team[];
    }
    export interface PaginatedTreeentries {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Treeentry[];
    }
    export interface Treeentry {
      commit?: Commit;
      path?: string;
      type: string;
      [k: string]: any;
    }
    export interface PaginatedUsers {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: User[];
    }
    export interface PaginatedVersions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: Version[];
    }
    export interface PaginatedWebhookSubscriptions {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      size?: number;
      values?: WebhookSubscription[];
    }
    export interface PullrequestMergeParameters {
      close_source_branch?: boolean;
      merge_strategy?: "merge_commit" | "squash" | "fast_forward";
      message?: string;
      type: string;
      [k: string]: any;
    }
    export interface SearchResultPage {
      next?: string;
      page?: number;
      pagelen?: number;
      previous?: string;
      query_substituted?: boolean;
      size?: number;
      values?: SearchCodeSearchResult[];
      [k: string]: any;
    }
    export interface SearchCodeSearchResult {
      content_match_count?: number;
      content_matches?: SearchContentMatch[];
      file?: CommitFile;
      path_matches?: SearchSegment[];
      type?: string;
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
      match?: boolean;
      text?: string;
      [k: string]: any;
    }
    export interface SubjectTypes {
      repository?: {
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
      user?: {
        events?: {
          href?: string;
          name?: string;
        };
      };
    }
  }

  export type BranchrestrictionsCreateParams =
    & {
      "_body": BitBucket.Type.Branchrestriction;
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
      "_body": BitBucket.Type.Branchrestriction;
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
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
  export type CommitsListParams =
    & {
      "exclude"?: string;
      "include"?: string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
      "_body"?: BitBucket.Type.Commitstatus;
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
      "_body"?: BitBucket.Type.Commitstatus;
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type DownloadsCreateParams =
    & {
      "_body": any;
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
      "_body": BitBucket.Type.Issue;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateAttachmentsParams =
    & {
      "_body": any;
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateChangeParams =
    & {
      "_body": BitBucket.Type.IssueChange;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerCreateCommentParams =
    & {
      "_body": BitBucket.Type.IssueComment;
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
      "_body": BitBucket.Type.IssueComment;
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
      "_body": BitBucket.Type.Issue;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type IssueTrackerUpdateCommentParams =
    & {
      "_body": BitBucket.Type.IssueComment;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateParams =
    & {
      "_body": BitBucket.Type.Pipeline;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateKnownHostParams =
    & {
      "_body": BitBucket.Type.PipelineKnownHost;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateScheduleParams =
    & {
      "_body": BitBucket.Type.PipelineSchedule;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateVariableParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesCreateVariableForTeamParams =
    & {
      "_body"?: BitBucket.Type.PipelineVariable;
      "username": string;
    };
  export type PipelinesCreateVariableForUserParams =
    & {
      "_body"?: BitBucket.Type.PipelineVariable;
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
      "_body": BitBucket.Type.PipelineBuildNumber;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateConfigParams =
    & {
      "_body": BitBucket.Type.PipelinesConfig;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateKnownHostParams =
    & {
      "_body": BitBucket.Type.PipelineKnownHost;
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateScheduleParams =
    & {
      "_body": BitBucket.Type.PipelineSchedule;
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type PipelinesUpdateSshKeyPairParams =
    & {
      "_body": BitBucket.Type.PipelineSshKeyPair;
      "repo_slug": string;
      "username": string;
    };
  export type PipelinesUpdateVariableParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesUpdateVariableForTeamParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "username": string;
      "variable_uuid": string;
    };
  export type PipelinesUpdateVariableForUserParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "username": string;
      "variable_uuid": string;
    };
  export type ProjectsCreateForTeamParams =
    & {
      "_body": BitBucket.Type.Project;
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
      "_body": BitBucket.Type.Project;
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
      "_body"?: BitBucket.Type.Pullrequest;
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
      "_body"?: BitBucket.Type.PullrequestMergeParameters;
      "pull_request_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type PullrequestsUpdateParams =
    & {
      "_body"?: BitBucket.Type.Pullrequest;
      "pull_request_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RefsCreateBranchParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RefsCreateTagParams =
    & {
      "_body": BitBucket.Type.Tag;
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
      "_body"?: BitBucket.Type.Repository;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateBranchParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateBranchRestrictionParams =
    & {
      "_body": BitBucket.Type.Branchrestriction;
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
      "_body"?: BitBucket.Type.Commitstatus;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateDownloadParams =
    & {
      "_body": any;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateForkParams =
    & {
      "_body"?: BitBucket.Type.Repository;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueParams =
    & {
      "_body": BitBucket.Type.Issue;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueAttachmentsParams =
    & {
      "_body": any;
      "issue_id": number;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueChangeParams =
    & {
      "_body": BitBucket.Type.IssueChange;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateIssueCommentParams =
    & {
      "_body": BitBucket.Type.IssueComment;
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
      "_body": BitBucket.Type.Pipeline;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineKnownHostParams =
    & {
      "_body": BitBucket.Type.PipelineKnownHost;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineScheduleParams =
    & {
      "_body": BitBucket.Type.PipelineSchedule;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePipelineVariableParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreatePullRequestParams =
    & {
      "_body"?: BitBucket.Type.Pullrequest;
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
      "_body": any;
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
      "_body": BitBucket.Type.Tag;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesCreateWebhookParams =
    & {
      "_body": any;
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
      "_body": BitBucket.Type.IssueComment;
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
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
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
  export type RepositoriesListBranchesParams =
    & {
      "q"?: string;
      "repo_slug": string;
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
  export type RepositoriesListCommitCommentsParams =
    & {
      "node": string;
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "username": string;
    };
  export type RepositoriesListCommitsParams =
    & {
      "exclude"?: string;
      "include"?: string;
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
  export type RepositoriesListPipelinesParams =
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
  export type RepositoriesListPullRequestsParams =
    & {
      "q"?: string;
      "repo_slug": string;
      "sort"?: string;
      "state"?: "MERGED"|"SUPERSEDED"|"OPEN"|"DECLINED";
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
      "_body"?: BitBucket.Type.PullrequestMergeParameters;
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
      "_body"?: BitBucket.Type.Repository;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateBranchRestrictionParams =
    & {
      "_body": BitBucket.Type.Branchrestriction;
      "id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateCommitBuildStatusParams =
    & {
      "_body"?: BitBucket.Type.Commitstatus;
      "key": string;
      "node": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateIssueParams =
    & {
      "_body": BitBucket.Type.Issue;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdateIssueCommentParams =
    & {
      "_body": BitBucket.Type.IssueComment;
      "comment_id": string;
      "issue_id": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineBuildNumberParams =
    & {
      "_body": BitBucket.Type.PipelineBuildNumber;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineConfigParams =
    & {
      "_body": BitBucket.Type.PipelinesConfig;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineKnownHostParams =
    & {
      "_body": BitBucket.Type.PipelineKnownHost;
      "known_host_uuid": string;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineScheduleParams =
    & {
      "_body": BitBucket.Type.PipelineSchedule;
      "repo_slug": string;
      "schedule_uuid": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineSshKeyPairParams =
    & {
      "_body": BitBucket.Type.PipelineSshKeyPair;
      "repo_slug": string;
      "username": string;
    };
  export type RepositoriesUpdatePipelineVariableParams =
    & {
      "_body": BitBucket.Type.PipelineVariable;
      "repo_slug": string;
      "username": string;
      "variable_uuid": string;
    };
  export type RepositoriesUpdatePullRequestParams =
    & {
      "_body"?: BitBucket.Type.Pullrequest;
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
      "_body": BitBucket.Type.Snippet;
    };
  export type SnippetsCreateCommentParams =
    & {
      "_body": BitBucket.Type.Snippet;
      "encoded_id": string;
      "username": string;
    };
  export type SnippetsCreateForUserParams =
    & {
      "_body": BitBucket.Type.Snippet;
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
      "_body": any;
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
      "_body"?: BitBucket.Type.SshAccountKey;
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
      "_body"?: BitBucket.Type.PipelineVariable;
      "username": string;
    };
  export type TeamsCreateProjectParams =
    & {
      "_body": BitBucket.Type.Project;
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
      "_body": BitBucket.Type.PipelineVariable;
      "username": string;
      "variable_uuid": string;
    };
  export type TeamsUpdateProjectParams =
    & {
      "_body": BitBucket.Type.Project;
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
      "_body"?: BitBucket.Type.PipelineVariable;
      "username": string;
    };
  export type UsersCreateSshKeyParams =
    & {
      "_body"?: BitBucket.Type.SshAccountKey;
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
      "_body": BitBucket.Type.PipelineVariable;
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
      "_body": any;
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
  getPage(url: BitBucket.Link, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;

  branchrestrictions: {
    create(params: BitBucket.BranchrestrictionsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
    delete(params: BitBucket.BranchrestrictionsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.BranchrestrictionsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
    list(params: BitBucket.BranchrestrictionsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedBranchrestrictions>>;
    update(params: BitBucket.BranchrestrictionsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
  };
  commits: {
    createApproval(params: BitBucket.CommitsCreateApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Participant>>): Promise<BitBucket.Response<BitBucket.Type.Participant>>;
    deleteApproval(params: BitBucket.CommitsDeleteApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    fetchAll(params: BitBucket.CommitsFetchAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    fetchAllForRevision(params: BitBucket.CommitsFetchAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.CommitsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commit>>): Promise<BitBucket.Response<BitBucket.Type.Commit>>;
    getAllForRevision(params: BitBucket.CommitsGetAllForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getComment(params: BitBucket.CommitsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.CommitComment>>): Promise<BitBucket.Response<BitBucket.Type.CommitComment>>;
    getDiff(params: BitBucket.CommitsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPatch(params: BitBucket.CommitsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    list(params: BitBucket.CommitsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    listComments(params: BitBucket.CommitsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitComments>>;
  };
  commitstatuses: {
    createBuildStatus(params: BitBucket.CommitstatusesCreateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
    getBuildStatus(params: BitBucket.CommitstatusesGetBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
    list(params: BitBucket.CommitstatusesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>;
    listPullRequestStatuses(params: BitBucket.CommitstatusesListPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>;
    updateBuildStatus(params: BitBucket.CommitstatusesUpdateBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
  };
  downloads: {
    create(params: BitBucket.DownloadsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    delete(params: BitBucket.DownloadsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.DownloadsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAll(params: BitBucket.DownloadsGetAllParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
  };
  hookEvents: {
    list(params: BitBucket.HookEventsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedHookEvents>>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SubjectTypes>>): Promise<BitBucket.Response<BitBucket.Type.SubjectTypes>>;
  };
  issueTracker: {
    create(params: BitBucket.IssueTrackerCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    createAttachments(params: BitBucket.IssueTrackerCreateAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createChange(params: BitBucket.IssueTrackerCreateChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueChange>>): Promise<BitBucket.Response<BitBucket.Type.IssueChange>>;
    createComment(params: BitBucket.IssueTrackerCreateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createVote(params: BitBucket.IssueTrackerCreateVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    createWatch(params: BitBucket.IssueTrackerCreateWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    delete(params: BitBucket.IssueTrackerDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    deleteAttachment(params: BitBucket.IssueTrackerDeleteAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteComment(params: BitBucket.IssueTrackerDeleteCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteVote(params: BitBucket.IssueTrackerDeleteVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteWatch(params: BitBucket.IssueTrackerDeleteWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    get(params: BitBucket.IssueTrackerGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    getAttachment(params: BitBucket.IssueTrackerGetAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getChange(params: BitBucket.IssueTrackerGetChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueChange>>): Promise<BitBucket.Response<BitBucket.Type.IssueChange>>;
    getComment(params: BitBucket.IssueTrackerGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueComment>>): Promise<BitBucket.Response<BitBucket.Type.IssueComment>>;
    getComponent(params: BitBucket.IssueTrackerGetComponentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Component>>): Promise<BitBucket.Response<BitBucket.Type.Component>>;
    getMilestone(params: BitBucket.IssueTrackerGetMilestoneParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Milestone>>): Promise<BitBucket.Response<BitBucket.Type.Milestone>>;
    getVersion(params: BitBucket.IssueTrackerGetVersionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Version>>): Promise<BitBucket.Response<BitBucket.Type.Version>>;
    getVote(params: BitBucket.IssueTrackerGetVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    getWatch(params: BitBucket.IssueTrackerGetWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    list(params: BitBucket.IssueTrackerListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssues>>;
    listAttachments(params: BitBucket.IssueTrackerListAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssueAttachments>>;
    listChanges(params: BitBucket.IssueTrackerListChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedLogEntries>>;
    listComments(params: BitBucket.IssueTrackerListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssueComments>>;
    listComponents(params: BitBucket.IssueTrackerListComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedComponents>>;
    listMilestones(params: BitBucket.IssueTrackerListMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedMilestones>>;
    listVersions(params: BitBucket.IssueTrackerListVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedVersions>>;
    update(params: BitBucket.IssueTrackerUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    updateComment(params: BitBucket.IssueTrackerUpdateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueComment>>): Promise<BitBucket.Response<BitBucket.Type.IssueComment>>;
  };
  pipelines: {
    create(params: BitBucket.PipelinesCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pipeline>>): Promise<BitBucket.Response<BitBucket.Type.Pipeline>>;
    createKnownHost(params: BitBucket.PipelinesCreateKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    createSchedule(params: BitBucket.PipelinesCreateScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    createVariable(params: BitBucket.PipelinesCreateVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    createVariableForTeam(params: BitBucket.PipelinesCreateVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    createVariableForUser(params: BitBucket.PipelinesCreateVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    deleteKnownHost(params: BitBucket.PipelinesDeleteKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteSchedule(params: BitBucket.PipelinesDeleteScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteSshKeyPair(params: BitBucket.PipelinesDeleteSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteVariable(params: BitBucket.PipelinesDeleteVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteVariableForTeam(params: BitBucket.PipelinesDeleteVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteVariableForUser(params: BitBucket.PipelinesDeleteVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.PipelinesGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pipeline>>): Promise<BitBucket.Response<BitBucket.Type.Pipeline>>;
    getConfig(params: BitBucket.PipelinesGetConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.Type.PipelinesConfig>>;
    getKnownHost(params: BitBucket.PipelinesGetKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    getSchedule(params: BitBucket.PipelinesGetScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    getSshKeyPair(params: BitBucket.PipelinesGetSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>;
    getStep(params: BitBucket.PipelinesGetStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineStep>>): Promise<BitBucket.Response<BitBucket.Type.PipelineStep>>;
    getStepLog(params: BitBucket.PipelinesGetStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    getVariable(params: BitBucket.PipelinesGetVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    getVariableForTeam(params: BitBucket.PipelinesGetVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    getVariableForUser(params: BitBucket.PipelinesGetVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    list(params: BitBucket.PipelinesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelines>>;
    listKnownHosts(params: BitBucket.PipelinesListKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineKnownHosts>>;
    listScheduleExecutions(params: BitBucket.PipelinesListScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineScheduleExecutions>>;
    listSchedules(params: BitBucket.PipelinesListSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineSchedules>>;
    listSteps(params: BitBucket.PipelinesListStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineSteps>>;
    listVariablesForRepo(params: BitBucket.PipelinesListVariablesForRepoParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    listVariablesForTeam(params: BitBucket.PipelinesListVariablesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    listVariablesForUser(params: BitBucket.PipelinesListVariablesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    stop(params: BitBucket.PipelinesStopParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    updateBuildNumber(params: BitBucket.PipelinesUpdateBuildNumberParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineBuildNumber>>): Promise<BitBucket.Response<BitBucket.Type.PipelineBuildNumber>>;
    updateConfig(params: BitBucket.PipelinesUpdateConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.Type.PipelinesConfig>>;
    updateKnownHost(params: BitBucket.PipelinesUpdateKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    updateSchedule(params: BitBucket.PipelinesUpdateScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    updateSshKeyPair(params: BitBucket.PipelinesUpdateSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>;
    updateVariable(params: BitBucket.PipelinesUpdateVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    updateVariableForTeam(params: BitBucket.PipelinesUpdateVariableForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    updateVariableForUser(params: BitBucket.PipelinesUpdateVariableForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
  };
  projects: {
    createForTeam(params: BitBucket.ProjectsCreateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
    deleteForTeam(params: BitBucket.ProjectsDeleteForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getForTeam(params: BitBucket.ProjectsGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
    listForTeam(params: BitBucket.ProjectsListForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedProjects>>;
    updateForTeam(params: BitBucket.ProjectsUpdateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
  };
  pullrequests: {
    addDefaultReviewer(params: BitBucket.PullrequestsAddDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    create(params: BitBucket.PullrequestsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    createApproval(params: BitBucket.PullrequestsCreateApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Participant>>): Promise<BitBucket.Response<BitBucket.Type.Participant>>;
    decline(params: BitBucket.PullrequestsDeclineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    deleteApproval(params: BitBucket.PullrequestsDeleteApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteDefaultReviewer(params: BitBucket.PullrequestsDeleteDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.PullrequestsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    getActivityLog(params: BitBucket.PullrequestsGetActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllActivityLog(params: BitBucket.PullrequestsGetAllActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllCommits(params: BitBucket.PullrequestsGetAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllDefaultReviewers(params: BitBucket.PullrequestsGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getComment(params: BitBucket.PullrequestsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.Type.PullrequestComment>>;
    getDefaultReviewer(params: BitBucket.PullrequestsGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getDiff(params: BitBucket.PullrequestsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getDiffStat(params: BitBucket.PullrequestsGetDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPatch(params: BitBucket.PullrequestsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    list(params: BitBucket.PullrequestsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPullrequests>>;
    listComments(params: BitBucket.PullrequestsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPullrequestComments>>;
    listStatuses(params: BitBucket.PullrequestsListStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>;
    merge(params: BitBucket.PullrequestsMergeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    update(params: BitBucket.PullrequestsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
  };
  refs: {
    createBranch(params: BitBucket.RefsCreateBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branch>>): Promise<BitBucket.Response<BitBucket.Type.Branch>>;
    createTag(params: BitBucket.RefsCreateTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Tag>>): Promise<BitBucket.Response<BitBucket.Type.Tag>>;
    deleteBranch(params: BitBucket.RefsDeleteBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteTag(params: BitBucket.RefsDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getBranch(params: BitBucket.RefsGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branch>>): Promise<BitBucket.Response<BitBucket.Type.Branch>>;
    getTag(params: BitBucket.RefsGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Tag>>): Promise<BitBucket.Response<BitBucket.Type.Tag>>;
    list(params: BitBucket.RefsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRefs>>;
    listBranches(params: BitBucket.RefsListBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedBranches>>;
    listTags(params: BitBucket.RefsListTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTags>>;
  };
  repositories: {
    addDefaultReviewer(params: BitBucket.RepositoriesAddDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    create(params: BitBucket.RepositoriesCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Repository>>): Promise<BitBucket.Response<BitBucket.Type.Repository>>;
    createBranch(params: BitBucket.RepositoriesCreateBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branch>>): Promise<BitBucket.Response<BitBucket.Type.Branch>>;
    createBranchRestriction(params: BitBucket.RepositoriesCreateBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
    createCommitApproval(params: BitBucket.RepositoriesCreateCommitApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Participant>>): Promise<BitBucket.Response<BitBucket.Type.Participant>>;
    createCommitBuildStatus(params: BitBucket.RepositoriesCreateCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
    createDownload(params: BitBucket.RepositoriesCreateDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createFork(params: BitBucket.RepositoriesCreateForkParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Repository>>): Promise<BitBucket.Response<BitBucket.Type.Repository>>;
    createIssue(params: BitBucket.RepositoriesCreateIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    createIssueAttachments(params: BitBucket.RepositoriesCreateIssueAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createIssueChange(params: BitBucket.RepositoriesCreateIssueChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueChange>>): Promise<BitBucket.Response<BitBucket.Type.IssueChange>>;
    createIssueComment(params: BitBucket.RepositoriesCreateIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createIssueVote(params: BitBucket.RepositoriesCreateIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    createIssueWatch(params: BitBucket.RepositoriesCreateIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    createPipeline(params: BitBucket.RepositoriesCreatePipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pipeline>>): Promise<BitBucket.Response<BitBucket.Type.Pipeline>>;
    createPipelineKnownHost(params: BitBucket.RepositoriesCreatePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    createPipelineSchedule(params: BitBucket.RepositoriesCreatePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    createPipelineVariable(params: BitBucket.RepositoriesCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    createPullRequest(params: BitBucket.RepositoriesCreatePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    createPullRequestApproval(params: BitBucket.RepositoriesCreatePullRequestApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Participant>>): Promise<BitBucket.Response<BitBucket.Type.Participant>>;
    createSrcFileCommit(params: BitBucket.RepositoriesCreateSrcFileCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    createTag(params: BitBucket.RepositoriesCreateTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Tag>>): Promise<BitBucket.Response<BitBucket.Type.Tag>>;
    createWebhook(params: BitBucket.RepositoriesCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    declinePullRequest(params: BitBucket.RepositoriesDeclinePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    delete(params: BitBucket.RepositoriesDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteBranch(params: BitBucket.RepositoriesDeleteBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteBranchRestriction(params: BitBucket.RepositoriesDeleteBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteCommitApproval(params: BitBucket.RepositoriesDeleteCommitApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteDefaultReviewer(params: BitBucket.RepositoriesDeleteDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteDownload(params: BitBucket.RepositoriesDeleteDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteIssue(params: BitBucket.RepositoriesDeleteIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    deleteIssueAttachment(params: BitBucket.RepositoriesDeleteIssueAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteIssueComment(params: BitBucket.RepositoriesDeleteIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteIssueVote(params: BitBucket.RepositoriesDeleteIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteIssueWatch(params: BitBucket.RepositoriesDeleteIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    deletePipelineKnownHost(params: BitBucket.RepositoriesDeletePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deletePipelineSchedule(params: BitBucket.RepositoriesDeletePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deletePipelineSshKeyPair(params: BitBucket.RepositoriesDeletePipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deletePipelineVariable(params: BitBucket.RepositoriesDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deletePullRequestApproval(params: BitBucket.RepositoriesDeletePullRequestApprovalParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteTag(params: BitBucket.RepositoriesDeleteTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteWebhook(params: BitBucket.RepositoriesDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    fetchAllCommits(params: BitBucket.RepositoriesFetchAllCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    fetchAllCommitsForRevision(params: BitBucket.RepositoriesFetchAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.RepositoriesGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Repository>>): Promise<BitBucket.Response<BitBucket.Type.Repository>>;
    getAllCommitsForRevision(params: BitBucket.RepositoriesGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllDefaultReviewers(params: BitBucket.RepositoriesGetAllDefaultReviewersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllDownloads(params: BitBucket.RepositoriesGetAllDownloadsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllPullRequestCommits(params: BitBucket.RepositoriesGetAllPullRequestCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllPullRequestsActivityLog(params: BitBucket.RepositoriesGetAllPullRequestsActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllWatchers(params: BitBucket.RepositoriesGetAllWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getBranch(params: BitBucket.RepositoriesGetBranchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branch>>): Promise<BitBucket.Response<BitBucket.Type.Branch>>;
    getBranchRestriction(params: BitBucket.RepositoriesGetBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
    getCommit(params: BitBucket.RepositoriesGetCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commit>>): Promise<BitBucket.Response<BitBucket.Type.Commit>>;
    getCommitBuildStatus(params: BitBucket.RepositoriesGetCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
    getCommitComment(params: BitBucket.RepositoriesGetCommitCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.CommitComment>>): Promise<BitBucket.Response<BitBucket.Type.CommitComment>>;
    getDefaultReviewer(params: BitBucket.RepositoriesGetDefaultReviewerParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getDiff(params: BitBucket.RepositoriesGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getDownload(params: BitBucket.RepositoriesGetDownloadParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getIssue(params: BitBucket.RepositoriesGetIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    getIssueAttachment(params: BitBucket.RepositoriesGetIssueAttachmentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getIssueChange(params: BitBucket.RepositoriesGetIssueChangeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueChange>>): Promise<BitBucket.Response<BitBucket.Type.IssueChange>>;
    getIssueComment(params: BitBucket.RepositoriesGetIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueComment>>): Promise<BitBucket.Response<BitBucket.Type.IssueComment>>;
    getIssueComponent(params: BitBucket.RepositoriesGetIssueComponentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Component>>): Promise<BitBucket.Response<BitBucket.Type.Component>>;
    getIssueMilestone(params: BitBucket.RepositoriesGetIssueMilestoneParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Milestone>>): Promise<BitBucket.Response<BitBucket.Type.Milestone>>;
    getIssueVersion(params: BitBucket.RepositoriesGetIssueVersionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Version>>): Promise<BitBucket.Response<BitBucket.Type.Version>>;
    getIssueVote(params: BitBucket.RepositoriesGetIssueVoteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    getIssueWatch(params: BitBucket.RepositoriesGetIssueWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    getPatch(params: BitBucket.RepositoriesGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPipeline(params: BitBucket.RepositoriesGetPipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pipeline>>): Promise<BitBucket.Response<BitBucket.Type.Pipeline>>;
    getPipelineConfig(params: BitBucket.RepositoriesGetPipelineConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.Type.PipelinesConfig>>;
    getPipelineKnownHost(params: BitBucket.RepositoriesGetPipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    getPipelineSchedule(params: BitBucket.RepositoriesGetPipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    getPipelineSshKeyPair(params: BitBucket.RepositoriesGetPipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>;
    getPipelineStep(params: BitBucket.RepositoriesGetPipelineStepParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineStep>>): Promise<BitBucket.Response<BitBucket.Type.PipelineStep>>;
    getPipelineStepLog(params: BitBucket.RepositoriesGetPipelineStepLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Error>>): Promise<BitBucket.Response<BitBucket.Type.Error>>;
    getPipelineVariable(params: BitBucket.RepositoriesGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    getPullRequest(params: BitBucket.RepositoriesGetPullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    getPullRequestActivityLog(params: BitBucket.RepositoriesGetPullRequestActivityLogParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPullRequestComment(params: BitBucket.RepositoriesGetPullRequestCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PullrequestComment>>): Promise<BitBucket.Response<BitBucket.Type.PullrequestComment>>;
    getPullRequestDiff(params: BitBucket.RepositoriesGetPullRequestDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPullRequestDiffStat(params: BitBucket.RepositoriesGetPullRequestDiffStatParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPullRequestPatch(params: BitBucket.RepositoriesGetPullRequestPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getSrc(params: BitBucket.RepositoriesGetSrcParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>;
    getSrcMainRoot(params: BitBucket.RepositoriesGetSrcMainRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>;
    getTag(params: BitBucket.RepositoriesGetTagParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Tag>>): Promise<BitBucket.Response<BitBucket.Type.Tag>>;
    getWebhook(params: BitBucket.RepositoriesGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    list(params: BitBucket.RepositoriesListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>;
    listBranches(params: BitBucket.RepositoriesListBranchesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedBranches>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedBranches>>;
    listBranchRestrictions(params: BitBucket.RepositoriesListBranchRestrictionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedBranchrestrictions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedBranchrestrictions>>;
    listCommitComments(params: BitBucket.RepositoriesListCommitCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitComments>>;
    listCommits(params: BitBucket.RepositoriesListCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    listCommitStatuses(params: BitBucket.RepositoriesListCommitStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>;
    listComponents(params: BitBucket.RepositoriesListComponentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedComponents>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedComponents>>;
    listDiffStats(params: BitBucket.RepositoriesListDiffStatsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedDiffstats>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedDiffstats>>;
    listFileHistory(params: BitBucket.RepositoriesListFileHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedFiles>>;
    listForks(params: BitBucket.RepositoriesListForksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>;
    listIssueAttachments(params: BitBucket.RepositoriesListIssueAttachmentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssueAttachments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssueAttachments>>;
    listIssueChanges(params: BitBucket.RepositoriesListIssueChangesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedLogEntries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedLogEntries>>;
    listIssueComments(params: BitBucket.RepositoriesListIssueCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssueComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssueComments>>;
    listIssues(params: BitBucket.RepositoriesListIssuesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedIssues>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedIssues>>;
    listMilestones(params: BitBucket.RepositoriesListMilestonesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedMilestones>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedMilestones>>;
    listPermissions(params: BitBucket.RepositoriesListPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>;
    listPipelineKnownHosts(params: BitBucket.RepositoriesListPipelineKnownHostsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineKnownHosts>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineKnownHosts>>;
    listPipelines(params: BitBucket.RepositoriesListPipelinesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelines>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelines>>;
    listPipelineScheduleExecutions(params: BitBucket.RepositoriesListPipelineScheduleExecutionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineScheduleExecutions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineScheduleExecutions>>;
    listPipelineSchedules(params: BitBucket.RepositoriesListPipelineSchedulesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineSchedules>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineSchedules>>;
    listPipelineSteps(params: BitBucket.RepositoriesListPipelineStepsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineSteps>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineSteps>>;
    listPipelineVariables(params: BitBucket.RepositoriesListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    listPublic(params: BitBucket.RepositoriesListPublicParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositories>>;
    listPullRequestComments(params: BitBucket.RepositoriesListPullRequestCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPullrequestComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPullrequestComments>>;
    listPullRequests(params: BitBucket.RepositoriesListPullRequestsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPullrequests>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPullrequests>>;
    listPullRequestStatuses(params: BitBucket.RepositoriesListPullRequestStatusesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedCommitstatuses>>;
    listRefs(params: BitBucket.RepositoriesListRefsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRefs>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRefs>>;
    listTags(params: BitBucket.RepositoriesListTagsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTags>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTags>>;
    listVersions(params: BitBucket.RepositoriesListVersionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedVersions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedVersions>>;
    listWebhooks(params: BitBucket.RepositoriesListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    mergePullRequest(params: BitBucket.RepositoriesMergePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    stopPipeline(params: BitBucket.RepositoriesStopPipelineParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    update(params: BitBucket.RepositoriesUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Repository>>): Promise<BitBucket.Response<BitBucket.Type.Repository>>;
    updateBranchRestriction(params: BitBucket.RepositoriesUpdateBranchRestrictionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Branchrestriction>>): Promise<BitBucket.Response<BitBucket.Type.Branchrestriction>>;
    updateCommitBuildStatus(params: BitBucket.RepositoriesUpdateCommitBuildStatusParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Commitstatus>>): Promise<BitBucket.Response<BitBucket.Type.Commitstatus>>;
    updateIssue(params: BitBucket.RepositoriesUpdateIssueParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Issue>>): Promise<BitBucket.Response<BitBucket.Type.Issue>>;
    updateIssueComment(params: BitBucket.RepositoriesUpdateIssueCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.IssueComment>>): Promise<BitBucket.Response<BitBucket.Type.IssueComment>>;
    updatePipelineBuildNumber(params: BitBucket.RepositoriesUpdatePipelineBuildNumberParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineBuildNumber>>): Promise<BitBucket.Response<BitBucket.Type.PipelineBuildNumber>>;
    updatePipelineConfig(params: BitBucket.RepositoriesUpdatePipelineConfigParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelinesConfig>>): Promise<BitBucket.Response<BitBucket.Type.PipelinesConfig>>;
    updatePipelineKnownHost(params: BitBucket.RepositoriesUpdatePipelineKnownHostParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>): Promise<BitBucket.Response<BitBucket.Type.PipelineKnownHost>>;
    updatePipelineSchedule(params: BitBucket.RepositoriesUpdatePipelineScheduleParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSchedule>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSchedule>>;
    updatePipelineSshKeyPair(params: BitBucket.RepositoriesUpdatePipelineSshKeyPairParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>): Promise<BitBucket.Response<BitBucket.Type.PipelineSshKeyPair>>;
    updatePipelineVariable(params: BitBucket.RepositoriesUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    updatePullRequest(params: BitBucket.RepositoriesUpdatePullRequestParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Pullrequest>>): Promise<BitBucket.Response<BitBucket.Type.Pullrequest>>;
    updateWebhook(params: BitBucket.RepositoriesUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
  };
  search: {
    codeOfTeam(params: BitBucket.SearchCodeOfTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.Type.SearchResultPage>>;
    codeOfUser(params: BitBucket.SearchCodeOfUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.Type.SearchResultPage>>;
  };
  snippets: {
    checkWatch(params: BitBucket.SnippetsCheckWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    create(params: BitBucket.SnippetsCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    createComment(params: BitBucket.SnippetsCreateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    createForUser(params: BitBucket.SnippetsCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    delete(params: BitBucket.SnippetsDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteComment(params: BitBucket.SnippetsDeleteCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteRevision(params: BitBucket.SnippetsDeleteRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.SnippetsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    getAllCommitsForRevision(params: BitBucket.SnippetsGetAllCommitsForRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SnippetCommit>>): Promise<BitBucket.Response<BitBucket.Type.SnippetCommit>>;
    getComment(params: BitBucket.SnippetsGetCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SnippetComment>>): Promise<BitBucket.Response<BitBucket.Type.SnippetComment>>;
    getDiff(params: BitBucket.SnippetsGetDiffParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getFile(params: BitBucket.SnippetsGetFileParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPatch(params: BitBucket.SnippetsGetPatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getRevision(params: BitBucket.SnippetsGetRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    list(params: BitBucket.SnippetsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSnippets>>;
    listComments(params: BitBucket.SnippetsListCommentsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSnippetComments>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSnippetComments>>;
    listCommits(params: BitBucket.SnippetsListCommitsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSnippetCommit>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSnippetCommit>>;
    listForUser(params: BitBucket.SnippetsListForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSnippets>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSnippets>>;
    listWatchers(params: BitBucket.SnippetsListWatchersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedUsers>>;
    startWatch(params: BitBucket.SnippetsStartWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    stopWatch(params: BitBucket.SnippetsStopWatchParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    update(params: BitBucket.SnippetsUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
    updateComment(params: BitBucket.SnippetsUpdateCommentParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    updateRevision(params: BitBucket.SnippetsUpdateRevisionParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Snippet>>): Promise<BitBucket.Response<BitBucket.Type.Snippet>>;
  };
  source: {
    createFileCommit(params: BitBucket.SourceCreateFileCommitParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.SourceGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>;
    getMainRoot(params: BitBucket.SourceGetMainRootParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTreeentries>>;
    listHistory(params: BitBucket.SourceListHistoryParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedFiles>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedFiles>>;
  };
  ssh: {
    createKeyForUser(params: BitBucket.SshCreateKeyForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.Type.SshAccountKey>>;
    deleteKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    listKeys(params: BitBucket.SshListKeysParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSshUserKeys>>;
    updateKeyForUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
  };
  teams: {
    createPipelineVariable(params: BitBucket.TeamsCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    createProject(params: BitBucket.TeamsCreateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
    createWebhook(params: BitBucket.TeamsCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    deletePipelineVariable(params: BitBucket.TeamsDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteProject(params: BitBucket.TeamsDeleteProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteWebhook(params: BitBucket.TeamsDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.TeamsGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Team>>): Promise<BitBucket.Response<BitBucket.Type.Team>>;
    getAllMembers(params: BitBucket.TeamsGetAllMembersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.User>>): Promise<BitBucket.Response<BitBucket.Type.User>>;
    getAllRepositories(params: BitBucket.TeamsGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllRepositoriesForUser(params: BitBucket.TeamsGetAllRepositoriesForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPipelineVariable(params: BitBucket.TeamsGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    getProject(params: BitBucket.TeamsGetProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
    getWebhook(params: BitBucket.TeamsGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    list(params: BitBucket.TeamsListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTeams>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTeams>>;
    listFollowers(params: BitBucket.TeamsListFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedUsers>>;
    listFollowing(params: BitBucket.TeamsListFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedUsers>>;
    listPipelineVariables(params: BitBucket.TeamsListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    listProjects(params: BitBucket.TeamsListProjectsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedProjects>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedProjects>>;
    listRepositoryPermissions(params: BitBucket.TeamsListRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>;
    listTeamPermissions(params: BitBucket.TeamsListTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTeamPermissions>>;
    listWebhooks(params: BitBucket.TeamsListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    searchCode(params: BitBucket.TeamsSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.Type.SearchResultPage>>;
    updatePipelineVariable(params: BitBucket.TeamsUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    updateProject(params: BitBucket.TeamsUpdateProjectParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Project>>): Promise<BitBucket.Response<BitBucket.Type.Project>>;
    updateWebhook(params: BitBucket.TeamsUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
  };
  user: {
    get(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.User>>): Promise<BitBucket.Response<BitBucket.Type.User>>;
    getAllEmails(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getEmail(params: BitBucket.UserGetEmailParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    listRepositoryPermissions(params: BitBucket.UserListRepositoryPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedRepositoryPermissions>>;
    listTeamPermissions(params: BitBucket.UserListTeamPermissionsParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedTeamPermissions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedTeamPermissions>>;
  };
  users: {
    createPipelineVariable(params: BitBucket.UsersCreatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    createSshKey(params: BitBucket.UsersCreateSshKeyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SshAccountKey>>): Promise<BitBucket.Response<BitBucket.Type.SshAccountKey>>;
    createWebhook(params: BitBucket.UsersCreateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    deletePipelineVariable(params: BitBucket.UsersDeletePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteWebhook(params: BitBucket.UsersDeleteWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.UsersGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.User>>): Promise<BitBucket.Response<BitBucket.Type.User>>;
    getAllEmailsForAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllRepositories(params: BitBucket.UsersGetAllRepositoriesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAllRepositoriesForTeam(params: BitBucket.UsersGetAllRepositoriesForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getAuthedUser(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.User>>): Promise<BitBucket.Response<BitBucket.Type.User>>;
    getEmailForAuthedUser(params: BitBucket.UsersGetEmailForAuthedUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getPipelineVariable(params: BitBucket.UsersGetPipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    getSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    getWebhook(params: BitBucket.UsersGetWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    listFollowers(params: BitBucket.UsersListFollowersParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedUsers>>;
    listFollowing(params: BitBucket.UsersListFollowingParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedUsers>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedUsers>>;
    listPipelineVariables(params: BitBucket.UsersListPipelineVariablesParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedPipelineVariables>>;
    listSshKeys(params: BitBucket.UsersListSshKeysParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedSshUserKeys>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedSshUserKeys>>;
    listWebhooks(params: BitBucket.UsersListWebhooksParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    searchCode(params: BitBucket.UsersSearchCodeParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SearchResultPage>>): Promise<BitBucket.Response<BitBucket.Type.SearchResultPage>>;
    updatePipelineVariable(params: BitBucket.UsersUpdatePipelineVariableParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PipelineVariable>>): Promise<BitBucket.Response<BitBucket.Type.PipelineVariable>>;
    updateSshKey(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    updateWebhook(params: BitBucket.UsersUpdateWebhookParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
  };
  webhooks: {
    create(params: BitBucket.WebhooksCreateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    createForTeam(params: BitBucket.WebhooksCreateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    createForUser(params: BitBucket.WebhooksCreateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    delete(params: BitBucket.WebhooksDeleteParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteForTeam(params: BitBucket.WebhooksDeleteForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    deleteForUser(params: BitBucket.WebhooksDeleteForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.Any>>): Promise<BitBucket.Response<BitBucket.Type.Any>>;
    get(params: BitBucket.WebhooksGetParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    getForTeam(params: BitBucket.WebhooksGetForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    getForUser(params: BitBucket.WebhooksGetForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    list(params: BitBucket.WebhooksListParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedHookEvents>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedHookEvents>>;
    listForRepo(params: BitBucket.WebhooksListForRepoParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    listForTeam(params: BitBucket.WebhooksListForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    listForUser(params: BitBucket.WebhooksListForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>): Promise<BitBucket.Response<BitBucket.Type.PaginatedWebhookSubscriptions>>;
    listSubjectTypes(params: BitBucket.EmptyParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.SubjectTypes>>): Promise<BitBucket.Response<BitBucket.Type.SubjectTypes>>;
    update(params: BitBucket.WebhooksUpdateParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    updateForTeam(params: BitBucket.WebhooksUpdateForTeamParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
    updateForUser(params: BitBucket.WebhooksUpdateForUserParams, callback?: BitBucket.Callback<BitBucket.Response<BitBucket.Type.WebhookSubscription>>): Promise<BitBucket.Response<BitBucket.Type.WebhookSubscription>>;
  };
}

export = BitBucket
