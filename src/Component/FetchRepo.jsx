export function fetchRepos(url) {
    return function(dispatch) {
      dispatch({
        type: "FETCH_REPOS_REQUEST",
      });
  
      return fetch(
        url,
      )
      .then(response => response.json().then(body => ({response, body})))
      .then(({response, body}) => {
        if (!response.ok) {
          dispatch({
            type: "FETCH_REPOS_FAILURE",
            error: body.error,
          });
        } else {
          dispatch({
            type: "FETCH_REPOS_SUCCESS",
            repos: body.items,
            headers: response.headers
          });
        }
      });
    };
  }
  