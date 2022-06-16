import React, { useEffect, useState } from 'react';
import {getContact, replyContact} from '../adapter/api'

const ContactReply = () => {
    const [contact, setContact] = useState({})
    const [reply, setReply] = useState('')

    useEffect(() => {
        getContact(localStorage.getItem('contactId')).then(res => res.json()).then(res => {
            if (res.status === 200)
                setContact(res.data)
        })
    }, [])

    const handleReply = () => {
        replyContact(localStorage.getItem('contactId'), reply)
    }
    
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
                                <input id="name" type="text" className="form-control" value={contact.name} disabled/>
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input id="mail" type="text" className="form-control" value={contact.email} disabled/>
                            </div>

                            <div className="form-group">
                                <label>Type:</label>
                                <input id="type" type="text" className="form-control"  value={contact.type} disabled/>
                            </div>

                            <div className="form-group">
                                <label>Content:</label>
                                <textarea id="content" type="text" className="form-control" value={contact.content} disabled></textarea>
                            </div>

                            <div className="form-group">
                                <label>Reply Message:</label>
                                <textarea id="reply" type="text" className="form-control" onChange={(e) => setReply(e.target.value)} value={reply}></textarea>
                            </div>

                            <div className="centered-row">
                                <button onClick={handleReply} type="button" className="btn btn-primary" >Reply<i className="icon-paperplane ml-2"></i></button>
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