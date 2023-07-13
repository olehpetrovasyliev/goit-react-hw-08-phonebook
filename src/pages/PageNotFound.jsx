import { useNavigate } from 'react-router';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      Page not Found!
    </div>
  );
};

// export default PageNotFound;
