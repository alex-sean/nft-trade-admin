import React from 'react';

const ContactReply = () => {
    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="content pt-0">
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">Contact Reply</h5>
                            <div className="header-elements">
                                <div className="list-icons">
                                    {/* <a className="list-icons-item" data-action="collapse"></a>
                                    <a className="list-icons-item" data-action="remove"></a> */}
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input id="name" type="text" className="form-control" value="alex" disabled/>
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input id="name" type="text" className="form-control" value="alex@alex.com" disabled/>
                            </div>

                            <div className="form-group">
                                <label>Type:</label>
                                <input id="name" type="text" className="form-control" value="NFT" disabled/>
                            </div>

                            <div className="form-group">
                                <label>Content:</label>
                                <textarea id="name" type="text" className="form-control" disabled>I have a problem with nft mint.</textarea>
                            </div>

                            <div className="form-group">
                                <label>Content:</label>
                                <textarea id="name" type="text" className="form-control">You can do like this. ...</textarea>
                            </div>

                            <div className="centered-row">
                                <button type="button" className="btn btn-primary" >Reply<i className="icon-paperplane ml-2"></i></button>
                                <button type="button" className="btn btn-primary" >Cancel<i className="icon-paperplane ml-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactReply;