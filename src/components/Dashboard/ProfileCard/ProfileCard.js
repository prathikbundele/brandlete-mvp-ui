import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext'; // Import UserContext
import './ProfileCard.css';
import profilePic from '../../../assets/profile-pic.png'

function ProfileCard({user}) {
    const { userDetails } = useContext(UserContext); // Access user details from context

  return (
    <div className="card personal-details">
        <div className="detailsWidget-userInfo detailsWidget-userInfo--soccer -free">
                {/* <a href="javascript:;" data-segment-track="get_verified_cta" data-segment-cta_page="activity" data-segment-cta_name="profile_visibility_switch" className="bg-red-300 verfied-toggle" data-ember-action="" data-ember-action-8="8">
                    Profile Status: Unverified
                    <span className="switch"></span>
                </a> */}
            <div className="dashboardWidget-avatarWrap">
                <label href="/athlete_profile">
                        <span className="dashboardWidget-avatar default-avatar-initials default-avatar avatar-green">
                            {/* {user?.firstName[0] || "N/A"}{user?.lastName[0]}  */}
                        </span>
                </label>
            </div>
            <div>
                <h4>
                    {user.firstName || "N/A"} {user.lastName}
                </h4>
                <div className="player-colored divisor hidden-xs"></div>
                    <p className="personal-details-description">
                        <p>Sport: {user.athleticDetails?.sport || "N/A"}<br />Grad Year: {userDetails.gradYear || "N/A"}</p>
                    </p>
            </div>
            <div>
                <div class="score-container">
                    <div class="text-wrapper">
                        <p class="brand-text">Brand Score</p>
                        <p class="score-text">{userDetails.score || "N/A"}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileCard;






<div className="card personal-details">
    <div className="detailsWidget-userInfo detailsWidget-userInfo--soccer -free">
            <a href="javascript:;" data-segment-track="get_verified_cta" data-segment-cta_page="activity" data-segment-cta_name="profile_visibility_switch" className="bg-red-300 verfied-toggle" data-ember-action="" data-ember-action-8="8">
                Profile Status: Unverified
                <span className="switch"></span>
            </a>
        <div className="dashboardWidget-avatarWrap">
            <a href="/athlete_profile">
                    <span className="dashboardWidget-avatar default-avatar-initials default-avatar avatar-green">
            PB
        </span>

            </a>
        </div>
        <div>
            <h4>
                Prateek Bundele
                
                        <div id="ember10" className="inline-block align-baseline ember-view"><div className="inline-block inline-block align-baseline"><div className="flex flex"><div className="flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="cursor-pointer" style="height: 16px;"><g transform="translate(-489.87 -323)"><path fill="#d73c28" d="M785.625,1220.678l6.042,4.67a8.927,8.927,0,0,0,5.875,1.83l7.749-.37a8.646,8.646,0,0,1,8.806,6.137l2.027,7.184a8.332,8.332,0,0,0,3.63,4.792l6.5,4.07a8.141,8.141,0,0,1,3.363,9.93l-2.761,6.955a8,8,0,0,0,0,5.925l2.761,6.955a8.141,8.141,0,0,1-3.363,9.93l-6.5,4.069a8.346,8.346,0,0,0-3.63,4.791l-2.027,7.187a8.649,8.649,0,0,1-8.806,6.138l-7.749-.372a8.921,8.921,0,0,0-5.875,1.83l-6.042,4.67a8.964,8.964,0,0,1-10.885,0l-6.042-4.67a8.917,8.917,0,0,0-5.874-1.83l-7.75.372a8.646,8.646,0,0,1-8.8-6.138l-2.027-7.187a8.351,8.351,0,0,0-3.63-4.791l-6.5-4.069a8.142,8.142,0,0,1-3.363-9.93l2.763-6.955a8.009,8.009,0,0,0,0-5.925l-2.763-6.955a8.143,8.143,0,0,1,3.363-9.93l6.5-4.07a8.337,8.337,0,0,0,3.63-4.792l2.027-7.184a8.643,8.643,0,0,1,8.8-6.137l7.75.37a8.923,8.923,0,0,0,5.874-1.83l6.042-4.67A8.963,8.963,0,0,1,785.625,1220.678Z" transform="translate(-240.312 -895.836)"></path><path fill="#fff" d="M58.67,2.515h5.637a2.8,2.8,0,0,1,2.045.864,2.8,2.8,0,0,1,.864,2.046v.091l-1.273,34.91a2.649,2.649,0,0,1-.864,2,2.874,2.874,0,0,1-2.046.818H59.943a2.874,2.874,0,0,1-2.046-.818,2.649,2.649,0,0,1-.864-2L55.761,5.515V5.424a2.8,2.8,0,0,1,.864-2.046,2.8,2.8,0,0,1,2.046-.864ZM61.488,60.7a5.744,5.744,0,1,1,4.137-1.682A5.622,5.622,0,0,1,61.488,60.7Z" transform="translate(478.586 342.203)"></path></g></svg></div> <div id="tooltip" role="tooltip" transition="[object Object]" className="hoverTooltip cursor-pointer z-3000 text-white font-semibold p-2 text-2xs semi-bold bg-gray-1000" style="display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(257px, -444px, 0px);" data-popper-placement="top"><div id="arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"></div> <div className="whitespace-no-wrap ds-text-2xs"> Profile Not Verified <i className="ml-1 ds-text-2xs sr-2 sr-v2-question-mark-circle text-red-300"></i></div></div></div><div data-v-09f4f8ba="" className="v-portal" style="display: none;"></div></div></div>
            </h4>

            <div className="player-colored divisor hidden-xs"></div>

                <p className="personal-details-description">
                        <p>Sport: Soccer<br />Grad Year: 2025</p>
                </p>
        </div>
    </div>
</div>