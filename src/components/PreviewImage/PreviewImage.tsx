import React from 'react';
import './PreviewImage.scss';

const PreviewImage = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <>
      {imgUrl && (
        <div className="preview__img__container">
          <img className="preview__img" src={imgUrl} alt="sdfsdf" />
        </div>
      )}
    </>
  );
};

export default PreviewImage;
