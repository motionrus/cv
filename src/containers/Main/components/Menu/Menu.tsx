import React, {useEffect} from 'react';
import "./styles/style.scss"
import "./styles/underline.scss"
import menuSvg from "./icons/menu.svg"

interface IProps {
  className?: string
}

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


  useEffect(() => {
    // observe by change media screen
    const matchMedia = window.matchMedia('(max-width: 768px)')
    if (matchMedia.matches) showMenu(false)
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
      <li className="header-menu__item hover-underline-animation">Home</li>
      <li className="header-menu__item hover-underline-animation">Experience</li>
      <li className="header-menu__item hover-underline-animation">Skills</li>
      <li className="header-menu__item hover-underline-animation">Courses</li>
      <li className="header-menu__item hover-underline-animation">About</li>
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