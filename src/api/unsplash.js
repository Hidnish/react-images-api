import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID nYHuNBjf0mgFqApL8JmNKxlHFXm12oSrRcylQ0iOkak",
    },
});