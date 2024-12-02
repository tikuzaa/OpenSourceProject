import React from "react";
const RepoSection = ({ userData, pullRequests, issues }) => {
  //filter issues
  issues = issues.filter((issue) => !issue.pull_request);
  // console.log(issues)
  const pullRequestsNew = pullRequests.filter(
    (pr) => pr.user.login === userData.login
  );
  // Group PRs by repository
  const repoMap = pullRequestsNew.reduce((acc, pr) => {
    const repoName = pr.base.repo.name;
    if (!acc[repoName]) {
      acc[repoName] = {
        avatar: pr.base.repo.owner.avatar_url,
        url: pr.base.repo.html_url,
        prs: [],
      };
    }
    acc[repoName].prs.push({
      title: pr.title,
      status: pr.state === "open" ? "Pending" : "Accepted",
      prUrl: pr.html_url,
    });
    return acc;
  }, {});

  const repos = Object.entries(repoMap);
  return (
    <div className="repositories">
      {repos.length > 0
        ? repos.map(([repoName, { avatar, url, prs }]) => (
            <div className="repo-card" key={repoName}>
              <div className="repo-header">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img
                    src={avatar}
                    alt="Repo Owner Avatar"
                    className="repo-avatar"
                  />
                </a>
                <h3>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {repoName}
                  </a>
                </h3>
              </div>
              {/* IssueList */}
              <div className="issue-list">
                <h4 className="text-lg font-semibold mb-4">Issues:</h4>
                {issues.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {" "}
                    {/* Flex container for cards */}
                    {issues.map((issue) => (
                      <div
                        className="issue-item bg-[#eaeaea] border border-gray-300 rounded-lg p-4 shadow-md "
                        key={issue.id}
                      >
                        <span
                          className={`issue-status font-bold ${issue.state.toLowerCase()} flex-row flex`}
                        >
                          <p className="font-normal mr-2">Status:</p>
                          {issue.state === "open" ? (
                            <>
                              <div>Open</div>
                              <span className="relative flex h-3 w-3 top-1.5 left-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                              </span>
                            </>
                          ) : (
                            <>
                              <div>Closed</div>
                              <span className="relative flex h-3 w-3 top-1.5 left-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                              </span>
                            </>
                          )}
                        </span>

                        <p className="font-poppins mt-2">{issue.title}</p>

                        {issue.labels && issue.labels.length > 0 && (
                          <div className="issue-labels mt-2 space-x-1">
                            {issue.labels.map((label) => (
                              <span
                                key={label.id}
                                className="issue-label inline-block text-white px-2 py-1 rounded-[20px] mr-1"
                                style={{
                                  backgroundColor: `#${label.color}`,
                                  opacity: "1",
                                }}
                              >
                                <p
                                  style={{
                                    color: `black`,
                                    opacity: "1",
                                  }}
                                >
                                  {label.name}
                                </p>
                              </span>
                            ))}
                          </div>
                        )}

                        <a
                          href={issue.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-link inline-block mt-2 text-blue-500 hover:underline"
                        >
                          View on GitHub
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No issues found.</p>
                )}
              </div>
              {/* List Pull Requests */}
              <div className="pr-list">
                {/* <p>issues {issues.length > 0? console.log(issues[0].labels.name) : console.log("oops")}</p> */}
                <p className="font-poppins">
                  You have made {pullRequestsNew.length} pull request(s) in this
                  repository
                </p>{" "}
                <br />
                {prs.map((pr, index) => (
                  <div className="pr-item" key={index}>
                    <span className={`pr-status ${pr.status.toLowerCase()}`}>
                      {pr.status}
                    </span>
                    <p className="font-poppins">{pr.title}</p>
                    <a
                      href={pr.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-link"
                    >
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))
        : // null //request not found div
          // <p>No pull requests found.</p>

          pullRequests.length > 0 && (
            <div className="repo-card" key={pullRequests[0].base.repo.id}>
              <div className="repo-header">
                <a
                  href={pullRequests[0].base.repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pullRequests[0].base.repo.owner.avatar_url}
                    alt="Repo Owner Avatar"
                    className="repo-avatar"
                  />
                </a>
                <h3>
                  <a
                    href={pullRequests[0].base.repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pullRequests[0].base.repo.name}
                  </a>
                </h3>
              </div>
              {/* List Issues */}
              <div className="issue-list">
                <h4 className="text-lg font-semibold mb-4">Issues:</h4>
                {issues.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {" "}
                    {/* Flex container for cards */}
                    {issues.map((issue) => (
                      <div
                        className="issue-item bg-[#eaeaea] border border-gray-300 rounded-lg p-4 shadow-md "
                        key={issue.id}
                      >
                        <span
                          className={`issue-status font-bold ${issue.state.toLowerCase()} flex-row flex`}
                        >
                          <p className="font-normal mr-2">Status:</p>
                          {issue.state === "open" ? (
                            <>
                              <div>Open</div>
                              <span className="relative flex h-3 w-3 top-1.5 left-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                              </span>
                            </>
                          ) : (
                            <>
                              <div>Closed</div>
                              <span className="relative flex h-3 w-3 top-1.5 left-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                              </span>
                            </>
                          )}
                        </span>

                        <p className="font-poppins mt-2">{issue.title}</p>

                        {issue.labels && issue.labels.length > 0 && (
                          <div className="issue-labels mt-2 space-x-1">
                            {issue.labels.map((label) => (
                              <span
                                key={label.id}
                                className="issue-label inline-block text-white px-2 py-1 rounded-[20px] mr-1"
                                style={{
                                  backgroundColor: `#${label.color}`,
                                  opacity: "1",
                                }}
                              >
                                <p
                                  style={{
                                    color: `black`,
                                    opacity: "1",
                                  }}
                                >
                                  {label.name}
                                </p>
                              </span>
                            ))}
                          </div>
                        )}

                        <a
                          href={issue.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-link inline-block mt-2 text-blue-500 hover:underline"
                        >
                          View on GitHub
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No issues found.</p>
                )}
              </div>
              <div>
                <p className="font-poppins relative top-3">
                  You have not made any pull requests in this repository.
                </p>
              </div>
            </div>
          )}
    </div>
  );
};

export default RepoSection;
