const api_server = process.env.REACT_APP_SERVER_URL

function queryString(params){
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => searchParams.append(key, params[key]));
    return searchParams.toString()
}

function getRequest(url, data){
    return fetch(`${api_server + '/' + url}${data ? '?' + queryString(data) : ''}`)
}

function postRequest(url, data){
    return fetch(api_server + '/' + url, {
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: queryString(data),
      })
}

function login(email, password){
    return postRequest('admin/login', {email, password})
}

function addBlog(title, thumbnail, description, url, duration){
    return postRequest('blog/add', {title, thumbnail, description, url, duration})
}

function deleteBlog(id){
    return postRequest('blog/delete', {id})
}

function addPartner(title, thumbnail, description, url){
    return postRequest('partner/add', {title, thumbnail, description, url})
}

function partnerList(limit, offset){
    return getRequest('partner/list', {limit, offset})
}

function deletePartner(id){
    return postRequest('partner/delete', {id})
}

function addContact(name, email, type, content){
    return postRequest('contact/add', {name, email, type, content})
}

function contactList(limit, offset){
    return getRequest('contact/list', {limit, offset})
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

module.exports = {
    login,
    addBlog,
    deleteBlog,
    addPartner,
    partnerList,
    deletePartner,
    addContact,
    contactList,
    addUser,
    userList,
    getUser,
    updateUser,
    verifyUser,
}