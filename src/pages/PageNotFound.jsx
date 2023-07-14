import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={'/'}>Home</Link>
      Page not Found!
    </div>
  );
};

// export default PageNotFound;
