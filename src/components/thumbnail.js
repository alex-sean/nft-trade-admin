import React from 'react';

const Thumbnail = () => {
    return (
        <div className="form-group">
            <label>Thumbnail:</label>:
            <div style={{display: 'flex'}}>
                <div className="uniform-uploader" style={{width: '100%'}}><input id="thumbnail" type="file" className="form-input-styled" data-fouc="" /><span className="filename border-danger" style={{userSelect: 'none'}}>aa.png</span><span className="action btn bg-pink-400" style={{userSelect: 'none'}}>Select
                </span></div>
                <button 
                    type="button"
                    className="btn btn-secondary"
                    style={{width: '80px'}}
                    onClick={() => {this.onRemoveThumbnail(this.props.index)}}
                >
                    Delete
                </button>
            </div>
            <span className="form-text text-muted">Please select the thumbnail in png format.</span>
        </div>
    );
}

export default Thumbnail;