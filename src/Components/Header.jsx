// Import Header CSS file
import './Header.css';

// Import Font Awesome Icon component and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

// Header component function
function Header() {
  return (
    <div className='header'>
      <div className='container main-nav'>
        <div className='main-icon'>
          <p>Buletin</p>
        </div>

        <ul>
          <li><a href="#"></a>|</li>
          <li><a href="#"></a>Stories</li>
          <li><a href="#"></a>Creator</li>
          <li><a href="#"></a>Community</li>
          <li><a href="#"></a>Subscribe</li>
        </ul>

        <div className='icon-group'>
          <div className='write'>
            <FontAwesomeIcon icon={faPenToSquare} />&ensp;<b>Write</b>
          </div>
          <div className='notification'>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className='circle-user'>
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Export Header component
export default Header;
