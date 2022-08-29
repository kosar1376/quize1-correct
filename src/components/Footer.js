import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className='footer' >
            <div className='container'>

                <div className='row'>
                    <div className='footer-col'>
                        <h4>نوینکوین</h4>
                        <ul>
                            <li><a href='#'>درباره ی ما</a></li>
                            <li><a href='#'>قوانین</a></li>
                            <li><a href='#'>بلاگ</a></li>
                            <li><a href='#'>فرصت های شغلی</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>راهنما</h4>
                        <ul>
                            <li><a href='#'>سوالات متداول</a></li>
                            <li><a href='#'>احراز هویت</a></li>
                            <li><a href='#'>قیمت ها</a></li>
                            <li><a href='#'>کارمزد</a></li>
                            <li><a href='#'>امنیت حساب کاربری</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>امکانات</h4>
                        <ul>
                            <li><a href='#'>اپلیکیشن</a></li>
                            <li><a href='#'>معرفی به دوستان</a></li>
                            <li><a href='#'>گزارشات</a></li>
                            <li><a href='#'>API</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>ارتباط با ما</h4>
                        <div className='social-links'>
                            <a href='#'><i class='fab fa-facebook-f'></i></a>
                            <a href='#'><i class='fab fa-twitter'></i></a>
                            <a href='#'><i class='fab fa-instagram'></i></a>
                            <a href='#'><i class='fab fa-linkedin-in'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='end-line'> © 2016-2022 NovinCoin, v3.42.123</p>
        </footer> 
        </div>
    );
};

export default Footer;