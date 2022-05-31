import './groupProfile.css'
import Profileimage from '../../../image/Logo.jpg'

import Profileimage2 from '../../../image/image5.jpg'


export default function GroupProfile() 
{
  return (
      <>
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                   height = 'auto'
                  src={Profileimage2}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={Profileimage}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">General Group</h4>
                  {/* <span className="profileInfoDesc">Hello my friends!</span> */}
              </div>
            </div>
            <div className="profileRightBottom">
      
            </div>
          </div>
      </>
    );
  }