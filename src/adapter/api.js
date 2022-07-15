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

function addBlog(title, thumbnail, description, image1, image2, duration){
    return formRequest('blog/add', {title, thumbnail, description, image1, image2, duration})
}

function blogList(limit, offset, title, content, status){
    return getRequest('blog/list', {limit, offset, title, content, status})
}

function deleteBlog(id){
    return postRequest('blog/delete', {id}, 'DELETE')
}

function addPartner(title, thumbnail, description, url){
    return formRequest('partner/add', {title, thumbnail, description, url})
}

function partnerList(limit, offset, title, content, status){
    return getRequest('partner/list', {limit, offset, title, content, status})
}

function deletePartner(id){
    return postRequest('partner/delete', {id}, 'DELETE')
}

function addContact(name, email, type, content){
    return postRequest('contact/add', {name, email, type, content})
}

function contactList(limit, offset, name, email, content, type, status){
    return getRequest('contact/list', {limit, offset, name, email, content, type, status})
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

function userList(limit, offset, address, keyword, status){
    return getRequest('user/list', {limit, offset, address, keyword, status})
}

function getUser(address){
    return getRequest('user/detail', {address})
}

function updateUser(address, avatar){
    return postRequest('user/update', {address, avatar})
}

function verifyUser(address, status){
    return postRequest('user/verify', {address, status})
}

function deleteUser(id){
    return postRequest('user/delete', {id}, 'DELETE')
}

function collectionList(limit, from, keyword, category, sort){
    return getRequest('token/collection', {category, keyword, from, limit, sort})
}

function verifyCollection(collectionAddress, status){
    return postRequest('token/verify_collection', {collectionAddress, status})
}

function setFeaturedCollection(collectionAddress, status){
    return postRequest('token/set_featured', {collectionAddress, status})
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
    collectionList,
    verifyCollection,
    setFeaturedCollection
}