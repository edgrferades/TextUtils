import React from 'react';

function Navbar(props) {
  const { mode, toggle } = props;

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${mode === 'dark' ? 'light' : 'dark'}`} href="/">
            Text Utils
          </a>

          <button
            className={`navbar-toggler ${mode === 'dark' ? 'navbar-toggler-light' : 'navbar-toggler-dark'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon text-${mode === 'dark' ? 'light' : 'dark'}`}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${mode === 'dark' ? 'light' : 'dark'}`} aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className={`nav-link text-${mode === 'dark' ? 'light' : 'dark'}`} href="/">
                  Projects
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                onClick={toggle}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className={`form-check-label text-${mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                {mode === 'dark' ? 'Dark' : 'Light'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
