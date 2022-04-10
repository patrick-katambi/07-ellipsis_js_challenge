import React from "react";
import FaceBookIcon from "../assets/social/facebook-white.svg";
import InstagramIcon from "../assets/social/instagram-white.svg";
import TwitterIcon from "../assets/social/twitter-white.svg";
import AppStoreIcon from "../assets/store/app-store.svg";
import PlayStoreIcon from "../assets/store/play-store.svg";
import WindowsStoreIcon from "../assets/store/windows-store.svg";

function Footer() {
  const footerRow1Links = [
    "Home",
    "Tarms and Conditions",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];
  const footerSocials = [FaceBookIcon, TwitterIcon, InstagramIcon];
  const storesIcons = [AppStoreIcon, PlayStoreIcon, WindowsStoreIcon]
  return (
    <div className=" px-[10%] w-full py-20 mt-8 bg-[#161C23] opacity-60 overflow-x-hidden bottom-0 left-0 right-0 flex flex-col items-start justify-center ">
      <div className=" flex laptopSmall:flex-row flex-col laptopSmall:items-center items-start justify-center ">
        {footerRow1Links.map((link, index) => {
          return (
            <p key={index} className={` laptopSmall:pr-5 ${index === 0 ? "laptopSmall:pl-0" : "laptopSmall:pl-5"}`}>
              {link}
            </p>
          );
        })}
      </div>

      <div className=" flex items-center justify-center mt-5 ">
        CopyRight &#169; 2016 DEMO Streaming All Rights Reserved
      </div>

      <div className=" flex flex-col laptopLarge:flex-row laptopLarge:items-center items-start justify-between mt-5 w-full">
        <div className=" flex items-center justify-center laptopLarge:mb-0 mb-5 ">
          {footerSocials.map((social, index) => {
            return (
              <img
                key={index}
                src={social}
                className={` h-[20px] w-[20px] mr-2 ${
                  index === 0 ? "ml-0" : "ml-2"
                }`}
              />
            );
          })}
        </div>

        <div className=" flex items-center justify-center">
        {storesIcons.map((store, index) => {
            return (
              <img
                key={index}
                src={store}
                className={` tablet:h-[50px] h-[30px] w-[auto] mr-2 ${
                  index === 0 ? "ml-0" : "ml-2"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
