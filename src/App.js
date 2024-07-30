import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/navigation/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import PageProject from './pages/PageProject'

import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<PageProject />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
