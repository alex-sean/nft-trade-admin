import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { addBlog } from '../adapter/api';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

const PostAdd = () => {
    const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [duration, setDuration] = useState('3');

    const handleThumb = (file) => {
        setThumbnail(file);
    };

    const handleImage1 = (file) => {
        setImage1(file);
    };

    const handleImage2 = (file) => {
        setImage2(file);
    };

    const handleSubmit = () => {
        if (!title || !description || !image1 || !image2){
            return
        }

        addBlog(Base64.stringify(Utf8.parse( title)), thumbnail, Base64.stringify(Utf8.parse(description)), image1, image2, duration).then(response =>(response.json())).then(res => {
            if (res.status === 200) {
                window.location.href='/posts'
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
                                <input value={title} onChange={(e) => setTitle(e.target.value)} id="name" type="text" className="form-control" placeholder=""/>
                                {title? '' : (<span className="form-text text-danger" >Please input the title</span>)}
                            </div>

                            <div className="form-group">
                                <label>Description:</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder=""/>
                                {description? '' : (<span className="form-text text-danger" >Please input the description</span>)}
                            </div>

                            <div className="form-group" id="thumbnails">
                                <FileUploader
                                    handleChange={handleThumb}
                                    name="file"
                                    types={fileTypes}
                                    />
                                {thumbnail? '' : (<span className="form-text text-danger" >Please upload the thumbnail</span>)}
                            </div>

                            <div className="form-group" id="image1">
                                <FileUploader
                                    handleChange={handleImage1}
                                    name="file"
                                    types={fileTypes}
                                    />
                                {image1? '' : (<span className="form-text text-danger" >Please upload the first image</span>)}
                            </div>
                            
                            <div className="form-group" id="image2">
                                <FileUploader
                                    handleChange={handleImage2}
                                    name="file"
                                    types={fileTypes}
                                    />
                                {image2? '' : (<span className="form-text text-danger" >Please upload the second image</span>)}
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

export default PostAdd;