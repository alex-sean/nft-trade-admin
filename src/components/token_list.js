import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const tokens = [
    {
        name: 'Alex',
        address: '0x0000000000000000000000',
        description: 'I am alex',
        status: 0
    }
]

const status = {
    PENDING: 0,
    VERIFIED: 1,
    IGNORED: 2
}

const TokenList = () => {
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
                                    <a data-toggle="collapse" className="collapsed text-white" href="#collapsible-search-items">Token filter<span className="text-grey-300"> (You can filter the tokens)</span> </a>
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
                            <h5 className="card-title">Tokens</h5>
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
                                    <th className="text-center">View on blockexplorer</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tokens.map((token, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-center"><img src={`${token.address}.png`} className="img-thumbnail ryma-token-thumbnail"/></td>
                                                <td className="text-center">{token.name}</td>
                                                <td className="text-center">{token.address}</td>
                                                <td className="text-center">{token.description}</td>
                                                <td className="text-center"><a href={`https://etherscan.io/address/${token.address}`}>{`https://etherscan.io/address/${token.address}`}</a></td>
                                                <td className="text-center">{token.status}</td>
                                                <td className="text-center">
                                                    <a className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Verify</span></h5></a>
                                                    <a className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Ignore</span></h5></a>
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
export default TokenList;