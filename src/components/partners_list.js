import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {partnerList, deletePartner} from  '../adapter/api'

const status = {
    PENDING: 0,
    LISTED: 1,
    DELETED: 2
}

const PartnerList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        partnerList(10, 0).then(res => res.json()).then(res => {
            if (res.status === 200 && res.data.total > 0){
                setPosts(res.data.partners)
            }
        })
    })

    const remove = (e) => {
        let post = e.post
        deletePartner(post.id).then(res => res.json()).then(res => {
            if (res.status === 200)
                window.location.reload(false);
        })
    }

    const handlePageClick = (event) => {
        setPageCount(event.selected);
      };

    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                    <div className="d-flex">
                        
                    </div>
                    <div className="header-elements d-none">
                        <div className="breadcrumb justify-content-center">
                            <a href="/partner_add" className="breadcrumb-elements-item">
                                <i className="fas fa-plus-square"></i>
                                Add a partner
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="content pt-0">
                    <div className="card-group-control card-group-control-right">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <h6 className="card-title">
                                    <a data-toggle="collapse" className="collapsed text-white" href="#collapsible-search-items">Partner filter<span className="text-grey-300"> (You can filter the partners)</span> </a>
                                </h6>
                            </div>

                            <div id="collapsible-search-items" className="collapse">
                                <div className="card-body">
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Title</label>
                                            <div className="col-lg-10">
                                                <input id="search_name" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Content</label>
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
                            <h5 className="card-title">Partners</h5>
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
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Content</th>
                                    <th className="text-center">URL</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-center">{post.title}</td>
                                                <td className="text-center">{post.description}</td>
                                                <td className="text-center"><a href={post.url}>{post.url}</a></td>
                                                <td className="text-center">{post.status}</td>
                                                <td className="text-center">
                                                    <a className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">List</span></h5></a>
                                                    <a onClick={e => remove({post})} className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Delete</span></h5></a>
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
export default PartnerList;