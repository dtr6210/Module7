import { Link } from 'react-router-dom';
import Emoji from '../components/Emoji';

function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>
                What were you looking for?
                Maybe going back <Link to='/'>home </Link>
                will help you find it.
            </p>
            <div>
                <Emoji />
            </div>
        </div>
        
    )
}

export default PageNotFound