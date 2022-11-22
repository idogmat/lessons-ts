console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug


import axios from 'axios';

const configOMB = {
    baseURL: 'https://jsonplaceholder.typicode.com',
};
const key = 'f8903326';
const axiosInstance = axios.create(configOMB);

const testAPI = {
    get: () => {
        axiosInstance.get('/posts').then((response) => response.data)
            .then((data) => console.log(data));
    },
    post: (id: string, firstName: string, lastName: string, checkbox: string) => {
        axiosInstance.post('/posts',
            {
                id,
                firstName,
                lastName,
                checkbox
            })
            .then((response) => response.data)
            .then((data) => console.log(data));
    },
    delete: (id: string) => {
        axiosInstance.delete(`/posts/${id}`)
            .then((response) => response.data)
            .then((data) => console.log(data));
    },
    put: (id: string, firstName: string, lastName: string, checkbox: string) => {
        axiosInstance.put(`/users/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then((response) => response.data)
            .then((data) => console.log(data));
    }
}
export default testAPI