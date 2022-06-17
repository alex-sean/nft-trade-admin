const api_server = process.env.REACT_APP_SERVER_URL

function queryString(params){
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => searchParams.append(key, params[key]));
    return searchParams.toString()
}

function getRequest(url, data){
    let headers = {'Content-Type' : 'application/x-www-form-urlencoded'}
    if (localStorage.getItem('token'))
        headers.Authorization = localStorage.getItem('token')
    return fetch(`${api_server + '/' + url}${data ? '?' + queryString(data) : ''}`, {
        method: "GET",
        headers,
      })
}

function postRequest(url, data, method = 'POST'){
    let headers = {'Content-Type' : 'application/x-www-form-urlencoded'}
    if (localStorage.getItem('token'))
        headers.Authorization = localStorage.getItem('token')
    return fetch(api_server + '/' + url, {
        method,
        headers,
        body: queryString(data),
      })
}

function formRequest(url, data){
    let headers = {'Authorization' : localStorage.getItem('token')}
    let params = new FormData();
    Object.keys(data).forEach(key => {
        params.append(key, data[key])
    })
    return fetch(api_server + '/' + url, {
        method: 'POST',
        headers,
        body: params,
      })
}

function login(email, password){
    return postRequest('admin/login', {email, password})
}

function addBlog(title, thumbnail, description, url, duration){
    return formRequest('blog/add', {title, thumbnail, description, url, duration})
}

function blogList(limit, offset){
    return getRequest('blog/list', {limit, offset})
}

function deleteBlog(id){
    return postRequest('blog/delete', {id}, 'DELETE')
}

function addPartner(title, thumbnail, description, url){
    return postRequest('partner/add', {title, thumbnail, description, url})
}

function partnerList(limit, offset){
    return getRequest('partner/list', {limit, offset})
}

function deletePartner(id){
    return postRequest('partner/delete', {id}, 'DELETE')
}

function addContact(name, email, type, content){
    return postRequest('contact/add', {name, email, type, content})
}

function contactList(limit, offset){
    return getRequest('contact/list', {limit, offset})
}

function getContact(id){
    return getRequest('contact/detail', {id})
}

function replyContact(id, reply){
    return postRequest('contact/reply', {id, reply})
}

function addUser(name, email, description, twitter_account, address, avatar){
    return postRequest('user/add', {name, email, description, twitter_account, address, avatar})
}

function userList(limit, offset){
    return getRequest('user/list', {limit, offset})
}

function getUser(address){
    return getRequest('user/detail', {address})
}

function updateUser(address, avatar){
    return postRequest('user/update', {address, avatar})
}

function verifyUser(id, status){
    return postRequest('user/verify', {id, status})
}

function deleteUser(id){
    return postRequest('user/delete', {id}, 'DELETE')
}

module.exports = {
    login,
    addBlog,
    blogList,
    deleteBlog,
    addPartner,
    partnerList,
    deletePartner,
    addContact,
    getContact,
    contactList,
    replyContact,
    addUser,
    userList,
    getUser,
    updateUser,
    verifyUser,
    deleteUser,
}