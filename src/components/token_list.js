import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { collectionList, verifyCollection, setFeaturedCollection } from '../adapter/api';

const SORT_COLLECTION = {
    LISTED: 1,
    RECENT: 2,
    PRICE: 3
}

const CATEGORIES = {
    ART: 1,
    COLLECTIBLE: 2,
    DOMAIN: 3,
    MUSIC: 4,
    PHOTOGRAPHY: 5,
    VIRTUAL_WORLD: 6
}

const TokenList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [tokens, setTokens] = useState([])
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState(0)
    const [sort, setSort] = useState(SORT_COLLECTION.RECENT)

    const getData = () => {
        collectionList(10, 0, keyword, category, sort).then(res => res.json()).then(res => {
            if (res.status === 200)
                setTokens(res.data.collections)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handlePageClick = (event) => {
        setPageCount(event.selected);
    };

    const verify = (e) => {
        let token = e.token
        verifyCollection(token.collectionAddress, 1).then(res => res.json()).then(res => {
            if (res.status === 200)
                window.location.reload(false);
        })
    }

    const setFeature = (e) => {
        let token = e.token
        verifyCollection(token.collectionAddress, 2).then(res => res.json()).then(res => {
            if (res.status === 200)
                window.location.reload(false);
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
                                    <a data-toggle="collapse" className="collapsed text-white" href="#collapsible-search-items">Collection filter<span className="text-grey-300"> (You can filter the collections)</span> </a>
                                </h6>
                            </div>

                            <div id="collapsible-search-items" className="collapse">
                                <div className="card-body">
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Keyword</label>
                                            <div className="col-lg-10">
                                                <input value={keyword} onChange={(e) => setKeyword(e.target.value)} id="search_keyword" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Category</label>
                                            <div className="col-lg-10">
                                                <select value={category} onChange={(e) => setCategory(e.target.value)} id="search_category" className="form-control">
                                                    <option value="0">All</option>
                                                    {
                                                        Object.keys(CATEGORIES).map((key, index) => {
                                                            return (<option value={CATEGORIES[key]} key={index}>{key}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-lg-2">Sort</label>
                                            <div className="col-lg-10">
                                                <select value={sort} onChange={(e) => setSort(e.target.value)} id="search_sort" className="form-control">
                                                    <option value="0">All</option>
                                                    {
                                                        Object.keys(SORT_COLLECTION).map((key, index) => {
                                                            return (<option value={SORT_COLLECTION[key]} key={index}>{key}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="text-center">
                                        <button onClick={getData} type="button" className="btn btn-primary">Filter <i className="fas fa-search ml-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">Collections</h5>
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
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tokens.map((token, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-center"><img src={`${token.imageURL}`} className="img-thumbnail ryma-token-thumbnail"/></td>
                                                <td className="text-center">{token.name}</td>
                                                <td className="text-center"><a href={`https://testnet.snowtrace.io/address/${token.collectionAddress}`}>{token.collectionAddress}</a></td>
                                                <td className="text-center">{token.description}</td>
                                                <td className="text-center">{token.status}</td>
                                                <td className="text-center">
                                                    <a onClick={e => verify({token})} className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Verify</span></h5></a>
                                                    <a onClick={e => setFeature({token})} className="ryma-btn-cursor" ><h5 className="m-0 p-0"><span className="badge badge-primary js-token-detail-image">Ignore</span></h5></a>
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