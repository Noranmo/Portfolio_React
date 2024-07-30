import './style.css'
import githubIcon from './gitHub-black.svg'

function BtnGitHub({ link }) {
	return (
		<a href={link} className='btn-outline' target='_blank' rel='noreferrer'>
			<img src={githubIcon} alt='' />
			GitHub repo
		</a>
	)
}

export default BtnGitHub
