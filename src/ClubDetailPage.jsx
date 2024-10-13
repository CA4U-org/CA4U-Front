import React from 'react';
import ClubImageSlider from './components/ClubImageSlider';
import ClubInfo from './components/ClubInfo';

const clubImages = [
  'https://s3-alpha-sig.figma.com/img/b27c/4fdf/1fb1d8ab73cfac58d71268a454dfb893?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qf9gbewLVYeOZfe8N1XBVRx1adlc~TdHlOnxYUl5D1wPE8DScvmVjJHccR4RZJ08Y~gut1Dd2~lpw55uIFpH3t60F6zFSJ2lFMcmVJ~gQO32Ggh66M--ho5KTZloxRsdOwUbSVKFqUkPb4YE5cPRXA~2V-1xi1~bnn2UJYk3dk8-9~5aQhwNqrbgavEAe4LpI44kHdWHevcXHjFskC9wfkxkfPxGc2Vu8sfP4FCgHcN8dbkqVIJf5yrxfx7Zwq2mlfpMsft2iTXNG-J-jtAWiyMQdQzFnJReAT4TChHhII4rJVCjUcqosbcCF6g8Q0usJNETMRd3Ud3s0fGtN7C3eA__',
  'https://via.placeholder.com/800x400?text=Club+Image+2',
  'https://via.placeholder.com/800x400?text=Club+Image+3',
  'https://via.placeholder.com/800x400?text=Club+Image+4',
  'https://via.placeholder.com/800x400?text=Club+Image+5',
];

const clubLogo =
  'https://s3-alpha-sig.figma.com/img/c5ac/2c80/bfef7c822d4df41b8545a355dd2fa12a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QSZcI8YWj84f1HQllM~ry8FV~C1aCAOUkT3YdieCC3AXwD1b84bvDcvJpcVYEQeBwX7XPPreQ8rlDoJyDvzhq4pGK4nLgjn0JuRu6c1x8GqtA1a-dbvjLvl3R571Euz3hvjdTGtiailoskSCDr2JzFrOpKXnszZ1uk9GUNns~VpCbiRddEKUyj6HA1GT6wXZ8A4J3xgaOm7tOZcFTsEIhSm0oaRNBIp7SCpzxEkyYGOUoA4hCO0gKwK-vj3U9I9hKpTuLbHxsmSjecbIHC3YciRABvBqN2KUbrn~21ZxAJjyNPc8BMq7IpPDReN-69g3m9hBvbVJn0gPwdIE8jCA9w__';

const wrapper = { position: 'relative', width: '375px', height: '200px' };

const ClubDetailPage = () => {
  //const navigate = useNavigate();

  const handleClick = () => {
    //navigate("/club-images");
  };

  return (
    <div>
      <div style={wrapper}>
        <ClubImageSlider images={clubImages} logo={clubLogo} />
      </div>

      <div
        style={{
          width: '375px',
          height: '28px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            height: '100%',
            backgroundColor: '#D4EAFF',
            borderRadius: '5px',
            border: 'none',
            textAlign: 'center',
            fontSize: '12px',
            fontFamily: 'Noto Sans KR',
            fontWeight: '700',
            lineHeight: '14px',
            color: '#454545',
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/874c/d505/3f951579d600be8a4aa80ccd7550b18a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl5L6QfW0mcd4JfRW3GmJOWTjBF9QFYcobHqnGk75rzvMmvSHJd9KXtm4sS2goHDuHFX8BhWq9bo64GxQ1UxVGUa~fQ9Afhav~MJseh6GT8xIsTLIadHZHolOo-S0l2MV-5iVhIE3o2mGInxCZk0Vco5kp~LBeqss7kOweF8wS8C601f4FfYxjq~qeKjoeShx-3ogLnO70WtK~ZMasvZP5~IUuh929HExAOx9ELCZbeiDQeWiRqIZUf3yK0rVAsH~M6Vv0cExZ4vvQG9-MJKXFHMOwCPAe-A9gXN~aMXmcbXcKvD41ciu7PdEFNal01V04MfmcsdBiPlQe0GEEt85w__"
            alt="Activity Icon"
            style={{
              verticalAlign: 'middle',
              marginRight: '10px',
              width: '16px',
              height: '16px',
            }}
          />
          활동사진 보러가기
        </button>
      </div>
      <ClubInfo />
    </div>
  );
};

export default ClubDetailPage;
