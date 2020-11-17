import React from 'react'
import { Link } from 'react-router-dom'
import styles from './layout.module.css'
import logo from '../../assets/Images/logo.png'

const Layout = ({ children }) => {
	return (
		<>
			<header className={styles.headerLayout}>
				<Link to='/'>
					<div className={styles.headerLayout__logo}>
						<img src={logo} width='100' alt='logo' />
						<h4>MusicuristApp</h4>
					</div>
				</Link>
				<a href='https://github.com/davidgonzalezfx/musicuristapp' target='_blank' rel='noreferrer'>
					<h4 className={styles.headerLayout__github}>Gitub repo</h4>
				</a>
			</header>
			<div>{children}</div>
		</>
	)
}

export default Layout
