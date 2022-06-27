import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { addPartner } from '../adapter/api';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

const PartnerAdd = () => {
    const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    
    const handleFileChange = (file) => {
        setThumbnail(file);
    };
    
    const handleSubmit = () => {
        if (!title || !description || !url){
            return
        }

        addPartner(Base64.stringify(Utf8.parse(title)), thumbnail, Base64.stringify(Utf8.parse(description)), url).then(response =>(response.json())).then(res => {
            if (res.status === 200) {
                window.location.href='/partners'
            } else
                alert(res.error)
        })
    };

    return (
        <div style={{width: '100%'}}>
            <div className="content-wrapper">
                <div className="content pt-0">
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h5 className="card-title">Add partner</h5>
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
                                <input value={title} onChange={(e) => setTitle(e.target.value)} id="name" type="text" className="form-control" placeholder=""/>
                                {title? '' : (<span className="form-text text-danger" >Please input the title</span>)}
                            </div>

                            <div className="form-group">
                                <label>Description:</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder=""/>
                                {description? '' : (<span className="form-text text-danger" >Please input the description</span>)}
                            </div>

                            <div className="form-group">
                                <label>URL:</label>
                                <input value={url} onChange={(e) => setUrl(e.target.value)} id="url" type="text" className="form-control" placeholder=""/>
                                {url? '' : (<span className="form-text text-danger" >Please input the url</span>)}
                            </div>

                            <div id="thumbnails">
                                <FileUploader
                                    handleChange={handleFileChange}
                                    name="file"
                                    types={fileTypes}
                                    />
                            </div>

                            <div className="centered-row">
                                <button type="button" className="btn btn-primary" >Preview<i className="icon-paperplane ml-2"></i></button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add<i className="icon-paperplane ml-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnerAdd;