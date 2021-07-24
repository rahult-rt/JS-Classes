// REST operator

const newFunc = (a,b,...args)=>{
console.log(a,b,args);
}

const newArr = [1,2,7,39,10,39]
newFunc(...newArr)


//************************************************* */

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
    received_events_url: "https://api.github.com/users/1/received_events"}

    const {login,id,...restObj} = newObj

    console.log(restObj);
    console.log(newObj);