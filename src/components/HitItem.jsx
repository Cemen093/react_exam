import React from 'react';
import Loader from "./UI/Loader/Loader";

const HitItem = ({hit, widthImg = 300}) => {
  // if (isLoading){
  //   return <>{isLoading ? 'true' : 'false'}</>
  //   return <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>;
  // }

  return (
    <div className="hit_card">
      <div>
        {console.log(widthImg)}
        <img style={{width: `${widthImg}px`}} src={hit.previewURL} />
      </div>
      <div className={"hit_content"}>
        <div>Likes: {hit.likes}</div>
        <div>Comments: {hit.comments}</div>
      </div>
    </div>
  );
};

export default HitItem;