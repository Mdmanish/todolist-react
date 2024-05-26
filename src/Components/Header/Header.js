import React, { useState, useEffect } from 'react';
import Style from './Header.module.scss';
import helpIcon from '../../assets/help-icon.png';
import settingIcon from '../../assets/setting-icon.png';
import whatsNewIcon from '../../assets/whatsnew-icon.png';

const Header = () => {
	const [search, setSearch] = useState('')
	return (
        <div className={Style.header}>
            <div className={Style.left}>
                <h1>To Do</h1>
            </div>
            <div className={Style.middle}>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={Style.right}>
                <img src={settingIcon} alt="setting" />
                <img src={helpIcon} alt="help" />
                <img src={whatsNewIcon} alt="what's new" />
                <img src={settingIcon} alt="user account" />
            </div>
        </div>
	)
}

export default Header;
