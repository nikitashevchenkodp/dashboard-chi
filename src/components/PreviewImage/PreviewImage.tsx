import React, { FC } from 'react';
import './PreviewImage.scss';

type PreviewImgProps = {
  imgUrl: string;
};

const PreviewImage: FC<PreviewImgProps> = ({ imgUrl }) => {
  return (
    <>
      {imgUrl && (
        <div className="preview__img__container">
          <img className="preview__img" src={imgUrl} alt="user_avatar" />
        </div>
      )}
    </>
  );
};

export default PreviewImage;
