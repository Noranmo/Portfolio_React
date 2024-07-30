import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

function NavBar() {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>
					{/* <a href='./index.html' className='logo'>
						<strong>Freelancer</strong> portfolio
					</a> */}

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink
								}}
							>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							{/* <a href='./projects.html' className='nav-list__link'>
								Projects
							</a> */}
							<NavLink
								to='/projects'
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink
								}}
							>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							{/* <a href='./contacts.html' className='nav-list__link'>
								Contacts
							</a> */}
							<NavLink
								to='/contacts'
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink
								}}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
