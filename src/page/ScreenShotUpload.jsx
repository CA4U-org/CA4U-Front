import React, { useState } from 'react';

// 스크린샷 업로드 컴포넌트
const ScreenshotUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* 예시 이미지 */}
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b9a5/5747/55354af98512570e9507c16394032b1e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4u71nwi9auzz~9vVlekkmbXh9cgQBza~S5xFMTsK04n04CzHR89vT7NNgTtIEpjE5hYvDZT~RENrsrT70b62TPHNjjehbGtxLYzg3-fuXj3JgQLEiwNIJHKCePLPZ50jvhc3rIQ928Y-sxjUliAFbqao2x4CB2AikfVhxNAVqL-3U8J4cetrJCHWBbrp-DZEEs-CfWfsvUizBPEEvo4HI5NGFtw8tLcMafGvs2wKvUxrM0bUQTDvT95dC4Z1e77UJ8XTmxyeqRqW4uxbpaDzxMTMPrWuqQ5BZBD4Ek7EBoBXOZUpi~dLNpvA9qa8wVPOhC8rog2ueMqRkFx40CTDA__" // 예시 이미지 (정확한 경로로 대체)
            alt="스크린샷 예시"
            style={{
              width: '135px',
              height: '278px',
              border: '1px solid #ccc',
              borderRadius: '8  px',
            }}
          />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#777' }}>
            동아리 이름이 잘 나오도록 캡처해주세요!
          </p>
        </div>

        {/* 업로드 섹션 */}
        <div
          style={{
            width: '100%',
            height: '278px',
            border: '1px dashed #ccc',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: uploadedImage ? 'transparent' : '#f9f9f9',
          }}
        >
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded Screenshot"
              style={{ width: '135px', height: '278px', borderRadius: '8px' }}
            />
          ) : (
            <p style={{ fontSize: '14px', color: '#aaa', textAlign: 'center' }}>
              단체 카톡방 스크린샷을 업로드해주세요
            </p>
          )}
        </div>
      </div>

      {/* 파일 업로드 버튼 */}
      <div style={{ marginTop: '16px', textAlign: 'center', width: '100%' }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          style={{
            display: 'block',
            padding: '12px 24px',
            backgroundColor: '#0047BB',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          스크린샷 업로드
        </label>
      </div>
    </div>
  );
};

export default ScreenshotUpload;
