import React from 'react';
import Thumbnail from './thumbnail';

const PostAdd = () => {
    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="content pt-0">
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">Add post</h5>
                            <div className="header-elements">
                                <div className="list-icons">
                                    {/* <a className="list-icons-item" data-action="collapse"></a>
                                    <a className="list-icons-item" data-action="remove"></a> */}
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="form-group">
                                <label>Title:</label>
                                <input id="name" type="text" className="form-control" placeholder=""/>
                                <span className="form-text text-danger" >Please input the title</span>
                            </div>

                            <div className="form-group">
                                <label>Description:</label>
                                <textarea className="form-control" placeholder=""/>
                                <span className="form-text text-danger" >Please input the description</span>
                            </div>

                            <div className="form-group">
                                <label>URL:</label>
                                <input id="name" type="text" className="form-control" placeholder=""/>
                                <span className="form-text text-danger" >Please input the url</span>
                            </div>

                            <div id="thumbnails">
                                <Thumbnail/>
                            </div>

                            <div className="centered-row">
                                <button type="button" className="btn btn-primary" >Preview<i className="icon-paperplane ml-2"></i></button>
                                <button type="button" className="btn btn-primary" >Add<i className="icon-paperplane ml-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostAdd;