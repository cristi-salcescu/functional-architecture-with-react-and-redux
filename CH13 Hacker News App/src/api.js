import axios from 'axios';

function fetchTopStoriesIds(){
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json`;
    return axios.get(url).then(getData);
}
  
function fetchStory(id){
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return axios.get(url).then(getData);
}

function getData(request){
    return request.data;
}

export default { fetchTopStoriesIds, fetchStory };

