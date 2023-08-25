import React from 'react';
import {useTranslation} from 'react-i18next';
import  i18n from '../i18n';



const Header = () => {
    const [t, i18n] = useTranslation();
    const changeLang = (ln) =>{
        console.log(ln)
          i18n.changeLanguage(ln);
          console.log(`lang changed to ${ln}`)
      };
    return (
        <div className='header'>
        
            <ul style={{width:'20%',float:'right',display:'flex',justifyContent:'space-evenly',padding:'20px 0'}}>
                {/* <li><button onClick={()=>changeLang('en')}>English</button></li>
                <li><button onClick={()=>changeLang('fn')}>France</button></li> */}
                <li>
                    <select onChange={(e)=>changeLang(e.target.value)}>
                        <option value='en'>English</option>
                        <option value='fn'>French</option>
                    </select>
                </li>
                <li>logout</li>
            </ul>
          
        </div>
    )
}

export default Header;