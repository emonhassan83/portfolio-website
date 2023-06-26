import { AiOutlineInstagram } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const Social = () => {
    return (
        <div>
            <div className="home__social">
                <a href="https://www.instagram.com/emonhassan50/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/emonhassan83/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <CiLinkedin/>
                </a>
                <a href="https://github.com/emonhassan83" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub/>
                </a>
            </div>
        </div>
    );
};

export default Social;