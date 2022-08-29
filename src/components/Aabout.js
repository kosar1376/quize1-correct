import React from "react";
import "../styles/About.css";
import im1 from "../images/imm1.webp";
import im2 from "../images/imm2.webp";
import im3 from "../images/imm3.webp";

const Aabout = () => {
  return (
      <>
      <h1 className="about-header">چرا نوینکوین را انتخاب کنیم ؟</h1>
    <div className="about-container">
      <div className="about-img-container">
        <img src={im1}  />
        <h3>پیشرو و سریع</h3>
        <p>
          تنوع رمزارزها و سرعت معاملات، نوینکوین را جزو بهترین بازارهای آنلاین
          قرار داده است
        </p>
      </div>
      <div className="about-img-container">
        <img src={im2} />
        <h3>خرید و فروش امن</h3>
        <p>
        اولویت نوینکوین امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش کنید
        </p>
      </div>
      <div className="about-img-container">
        <img src={im3} />
        <h3>ساده و کاربردی</h3>
        <p>
        محیط ساده و کاربردی نوینکوین ، معامله ارزدیجیتال را برای شما لذت بخش خواهد کرد.
       
        </p>
      </div>
    </div>
    </>
  );
};

export default Aabout;
