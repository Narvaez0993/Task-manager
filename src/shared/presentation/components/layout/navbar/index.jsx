import React from "react";
import "./navbar.scss"

const Nabvar = () => {
    return (
        <div className="content-navbar">
            <div className="content-left">
                <img className="logo-trello space-content-left" src="https://github.com/Narvaez0993/fotos-pagina/blob/main/trello2.png?raw=true" alt="logo" />
                <div className="content-board-link space-content-left">
                    <img src="https://github.com/Narvaez0993/fotos-pagina/blob/main/trello-mark-blue.png?raw=true" alt="logo-boards" />
                    <p>Boards</p>
                </div>

                <div className="content-search">
                    <input type="text" name="search"/>
                    <i class="ri-search-line"/>
                </div>
            </div>

            <div className="content-right">
                <i class="ri-notification-3-line"/>
                <div className="content-profile-picture">
                    <img src="https://media.licdn.com/dms/image/D4E03AQG1cN2dvS4-9A/profile-displayphoto-shrink_800_800/0/1691470852756?e=1714003200&v=beta&t=vQMjflETmmJKusLF7ZCDqU8VXQxiWGAhkAhh7SltrTA" alt="img-profile" />
                </div>
            </div>
        </div>
    );
}
 
export default Nabvar;