import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

function fetchTopStoriesIds(){
    const url = `${baseUrl}/topstories.json`;
    return axios.get(url).then(getData);
}
  
function fetchStory(id){
    const url = `${baseUrl}/item/${id}.json`;
    return axios.get(url).then(getData);
}

function getData(request){
    return request.data;
}

export default { fetchTopStoriesIds, fetchStory };

