import React from "react";

const Aside = (props) => {
    return (
        <aside className="side-menu__container">
            <nav className="slide-menu">
                <section className="menu-header">
                    <span className="greeting__text">Welcome Back</span>
                    <div className="profile-image__container">
                        <img src="https://avatars3.githubusercontent.com/u/5658460?s=460&v=4" alt="Pogodus"
                             className="profile__image"/>
                    </div>
                    <div className="account-details">
                        <span className="name__text">Hamed Baatour</span>
                        <span className="email__text">hamedbaatour@gmail.com</span>
                    </div>
                </section>
                <section className="menu-body">

                </section>
                <section className="menu-footer">

                </section>
            </nav>
        </aside>
    );
};

export default Aside;
