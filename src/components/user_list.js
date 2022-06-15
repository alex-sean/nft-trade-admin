import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {userList, verifyUser, deleteUser} from '../adapter/api'

const status = {
    PENDING: 0,
    VERIFIED: 1,
    IGNORED: 2
}

const UserList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [users, setUsers] = useState([])

    const getUsers = () => {
        userList(10, 0).then(res => res.json()).then(res => {
            if (res.status === 200)
                setUsers(res.data.users)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const handlePageClick = (event) => {
        setPageCount(event.selected);
    };

    const verify = (e) => {
        let user = e.user
        verifyUser(user.id, 1).then(res => res.json()).then(res => {
            if (res.status === 200)
                getUsers()
        })
    }

    const ignore = (e) => {
        let user = e.user
        deleteUser(user.id).then(res => res.json()).then(res => {
            if (res.status === 200)
                getUsers()
        })
    }

    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="content pt-0">
                    <div className="card-group-control card-group-control-right">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <h6 className="card-title">
                                    <a data-toggle="collapse" className="collapsed text-white" href="#collapsible-search-items">User Filter<span className="text-grey-300"> (You can filter the users)</span> </a>
                                </h6>
                            </div>

                            <div id="collapsible-search-items" className="collapse">
                                <div className="card-body">
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Name</label>
                                            <div className="col-lg-10">
                                                <input id="search_name" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Address</label>
                                            <div className="col-lg-10">
                                                <input id="search_name" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Description</label>
                                            <div className="col-lg-10">
                                                <input id="search_name" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Status</label>
                                            <div className="col-lg-10">
                                                <select id="search_category" className="form-control">
                                                    <option value="0">All</option>
                                                    {
                                                        Object.keys(status).map((key, index) => {
                                                            return (<option value={status[key]} key={index}>{key}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary">Filter <i className="fas fa-search ml-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">Users</h5>
                            <div className="header-elements">
                                <div className="list-icons">
                                    {/* <a className="list-icons-item" data-action="collapse"></a> */}
                                    {/* <a className="list-icons-item" data-action="remove"></a> */}
                                </div>
                            </div>
                        </div>

                        <table className="table datatable-basic table-bordered js-token-list">
                            <thead>
                                <tr>
                                    <th className="text-center"></th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Address</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center">Facebook url</th>
                                    <th className="text-center">Website url</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-center"><img src={`${user.address}.png`} className="img-thumbnail ryma-token-thumbnail"/></td>
                                                <td className="text-center">{user.name}</td>
                                                <td className="text-center">{user.address}</td>
                                                <td className="text-center">{user.description}</td>
                                                <td className="text-center"><a href={user.facebook_url}>{user.facebook_url}</a></td>
                                                <td className="text-center"><a href={user.website_url}>{user.website_url}</a></td>
                                                <td className="text-center">{user.status}</td>
                                                <td className="text-center">
                                                    <a onClick={e => verify({user})} className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Verify</span></h5></a>
                                                    <a onClick={e => ignore({user})} className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Ignore</span></h5></a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserList;