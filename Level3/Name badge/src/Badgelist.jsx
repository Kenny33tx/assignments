import React, {useState} from 'react'
import { MdAttachEmail } from "react-icons/md";

export default function Badgelist(props) {
  return (
    <div >
      <ul>
        {props.badges.map((badge, index) => (
          <div className='badgeCard'>
            <div>
              <p key={index}>{badge.firstName}</p>
            </div>
            <div>
              <p>{badge.lastName}</p>
            </div>
            <div>
              <p></p>
              <span>
                <MdAttachEmail />
                {badge.Email}{" "}
              </span>
            </div>
            <div>
              <p>{badge.Phone}</p>
            </div>
            <div>
              <p>{badge.placeOfBirth}</p>
            </div>
            <div>
              <p>{badge.favFood}</p>
            </div>
            <div>
              <p>{badge.aboutMe}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
