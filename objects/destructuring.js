const newObj = {
  login: "1",
  id: 1825798,
  node_id: "MDQ6VXNlcjE4MjU3OTg=",
  avatar_url: "https://avatars.githubusercontent.com/u/1825798?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/1",
  html_url: "https://github.com/1",
  followers_url: "https://api.github.com/users/1/followers",
  following_url: "https://api.github.com/users/1/following{/other_user}",
  gists_url: "https://api.github.com/users/1/gists{/gist_id}",
  starred_url: "https://api.github.com/users/1/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/1/subscriptions",
  organizations_url: "https://api.github.com/users/1/orgs",
  repos_url: "https://api.github.com/users/1/repos",
  events_url: "https://api.github.com/users/1/events{/privacy}",
  received_events_url: "https://api.github.com/users/1/received_events",
  type: "User",
  site_admin: false,
  name: "Michael",
  company: null,
  blog: "",
  location: "San Francisco, CA",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  foo:{
      userName:"jack",
      age:30
  }
};

//destructing
const {id:userId,node_id,avatar_url,url} = newObj;

const {foo:{userName,age}} = newObj


// console.log(id,node_id,avatar_url,url)
console.log(userName,age)