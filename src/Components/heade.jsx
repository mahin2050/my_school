import logo from '../img/Logo.png';
import './css/header.css'
function Headers() {
    return (
      <div>

        <header>
            <div className="logo_section">
                <a href="#home"><img src={logo} alt="Logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">পরিচিতি</a></li>
                    <li><a href="#about">শিক্ষক ও কর্মচারী</a>
                    <ul className="dropdown">
                        <li><a href="#about">শিক্ষক</a></li>
                        <li><a href="#about">কর্মচারী</a></li>
                      </ul>
                    </li>
                    <li><a href="./teachers.html">শিক্ষার্থী</a>
                      <ul className="dropdown">
                        <li><a href="#about"> ষষ্ঠ শ্রেণি </a></li>
                        <li><a href="#about"> সপ্তম শ্রেণী </a></li>
                        <li><a href="#about"> অষ্টম শ্রেণী </a></li>
                        <li><a href="#about"> নবম শ্রেণী </a></li>
                        <li><a href="#about"> দশম শ্রেণী </a></li>
                      </ul>
                    </li>
                    <li><a href="#event">একাডেমিক</a></li>
                    <li><a href="#routine">রুটিন</a>
                    <ul className="dropdown">
                        <li><a href="#about"> ষষ্ঠ শ্রেণি </a></li>
                        <li><a href="#about"> সপ্তম শ্রেণী </a></li>
                        <li><a href="#about"> অষ্টম শ্রেণী </a></li>
                        <li><a href="#about"> নবম শ্রেণী </a></li>
                        <li><a href="#about"> দশম শ্রেণী </a></li>
                      </ul>
                    </li>
                    <li><a href="./gallary.html">ফটো গ্যালারী</a></li>
                    <li><a href="#">ফলাফল</a></li>
                </ul>
            </nav>
            <div className="nave_display">
            <div id="nav_icon" className="nav_icon">
                <div className="nave_line_section"></div>
                <div className="nave_line_section"></div>
                <div className="nave_line_section"></div>
            </div>
            </div>
        </header>
      </div>
    )
  }
  export default Headers;