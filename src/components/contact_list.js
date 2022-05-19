import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const contacts = [
    {
        name: 'Alex',
        email: 'alex@alex.com',
        type: 0,
        content: 'I am alex',
        reply: 'Reply',
        status: 0
    }
]

const types = {
    NFT: 0,
    TRADE: 1
}

const status = {
    PENDING: 0,
    LISTED: 1,
    DELETED: 2
}

const ContactList = () => {
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (event) => {
        setPageCount(event.selected);
      };

    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="content pt-0">
                    <div className="card-group-control card-group-control-right">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <h6 className="card-title">
                                    <a data-toggle="collapse" className="collapsed text-white" href="#collapsible-search-items">Contacts filter<span className="text-grey-300"> (You can filter the contacts)</span> </a>
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
                                            <label className="col-form-label col-lg-2">Email</label>
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
                                            <label className="col-form-label col-lg-2">Type</label>
                                            <div className="col-lg-10">
                                                <select id="search_category" className="form-control">
                                                    <option value="0">All</option>
                                                    {
                                                        Object.keys(types).map((type, index) => {
                                                            return (<option value={types[type]} key={index}>{type}</option>)
                                                        })
                                                    }
                                                </select>
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
                            <h5 className="card-title">Contacts</h5>
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
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Type</th>
                                    <th className="text-center">Content</th>
                                    <th className="text-center">Reply</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-center">{contact.name}</td>
                                                <td className="text-center">{contact.email}</td>
                                                <td className="text-center">NFT</td>
                                                <td className="text-center">{contact.content}</td>
                                                <td className="text-center">{contact.reply}</td>
                                                <td className="text-center">Replied</td>
                                                <td className="text-center">
                                                    <a className="ryma-btn-cursor" href="/reply_contact"><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Reply</span></h5></a>
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
export default ContactList;