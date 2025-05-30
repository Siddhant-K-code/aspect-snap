import React from 'react';
import { UI_TEXT } from '../constants/messages';
import { ImageInfoType } from '../types';

interface ImageResultProps {
  imageInfo: ImageInfoType | null;
}

const ImageResult: React.FC<ImageResultProps> = ({ imageInfo }) => {
  if (!imageInfo) return null;

  return (
    <div className="result">
      <div className="preview-container">
        <img
          src={imageInfo.src}
          alt="Uploaded Images"
          className="image-preview"
        />
      </div>

      <table className="result-table">
        <tbody>
          <tr>
            <th>{UI_TEXT.IMAGE_SIZE}</th>
            <td>{imageInfo.width} × {imageInfo.height} {UI_TEXT.PIXELS}</td>
          </tr>
          <tr>
            <th>{UI_TEXT.ASPECT_RATIO}</th>
            <td>{imageInfo.aspectRatio}</td>
          </tr>
          <tr>
            <th>{UI_TEXT.COMMON_NAME}</th>
            <td>{imageInfo.commonName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageResult;