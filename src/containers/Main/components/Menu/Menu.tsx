import React, {useEffect} from 'react';
import "./styles/style.scss"
import "./styles/underline.scss"
import menuSvg from "./icons/menu.svg"

interface IProps {
  className?: string
}



const matchMedia = window.matchMedia('(max-width: 768px)')

const Menu = ({className}: IProps) => {

  const showMenu = (isShow: boolean) => {
    const menu = document.querySelector<HTMLElement>(".header__menu.header-menu")
    if (!menu) return

    if (isShow) {
      menu.style.display = "flex"
    } else {
      menu.style.display = "none"
    }
  }

  const toggleMenu = () => {
    const menu = document.querySelector<HTMLElement>(".header__menu.header-menu")

    if (!menu) return
    if (menu.style.display === "none") {
      showMenu(true)
    } else {
      showMenu(false)
    }
  }

  const closeDuration = () => {
    if (matchMedia.matches) {
      setTimeout(() => showMenu(false), 200)
    }
  };

  useEffect(() => {
    // observe by change media screen
    if (matchMedia.matches) {
      showMenu(false)
    }
    matchMedia.addEventListener("change", (e) => {
      if (e.matches) {
        showMenu(false)
      } else {
        showMenu(true)
      }
    })
  }, [])

  const menu = (
    <ul className={`${className} header-menu`}>
      <li className="menu-item hover-underline-animation"><a onClick={closeDuration} href="/#home">Home</a></li>
      <li className="menu-item hover-underline-animation"><a onClick={closeDuration} href="/#experience">Experience</a></li>
      <li className="menu-item hover-underline-animation"><a onClick={closeDuration} href="/#skills">Skills</a></li>
      <li className="menu-item hover-underline-animation"><a onClick={closeDuration} href="/#courses">Courses</a></li>
      <li className="menu-item hover-underline-animation"><a onClick={closeDuration} href="/#about">About</a></li>
    </ul>
  )
  return (
    <React.Fragment>
      <img className="header-menu__img" src={menuSvg} alt="React Logo" onClick={toggleMenu}/>
      {menu}
    </React.Fragment>
  );
};

Menu.defaultProps = {
  className: "",
};

export default Menu;