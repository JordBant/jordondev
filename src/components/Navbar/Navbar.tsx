import { Link } from "react-router-dom";
import { PAGE_TITLES } from "../../store/constants";
import "./Navbar.scss";
import { FC } from "react";
import { ActivePageName } from "../../pages/SamePageLayout.types";

export const Navbar: FC<{
  setActivePage: (pageName: ActivePageName) => void;
  activePage: ActivePageName;
  isTopOfPage?: boolean;
}> = ({ setActivePage, activePage, isTopOfPage = true }) => {
  const pageName = activePage === "" ? "about" : activePage;
  return (
    <header className={`header-menu ${isTopOfPage ? "" : "scrolled-past-about-page"} `}>
      <nav className="navbar">
        <ul className="navbar-container">
          {PAGE_TITLES.map((title, idx) => {
            const endpoint = `${title.toLowerCase()}`;
            return (
              <li
                className={`nav-option-container ${title.toLowerCase() === pageName ? "active-nav-option-container" : ""}`}
                key={`00${idx}--nav-item`}
                style={{ textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(`#${endpoint}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "end" });
                  /**
                   * Setting the index of the
                   * link option that was clicked.
                   */
                  setActivePage(PAGE_TITLES[idx].toLocaleLowerCase() as ActivePageName);
                }}
              >
                <Link to={endpoint} className="link-react-component">
                  <p className={`nav-option`}>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

