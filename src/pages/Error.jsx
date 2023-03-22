import ErrorIndex from '../components/Error';
import { useEffect } from 'react';
import '../styles/Error/E404.css';

function Error() {
    useEffect(() => {
        document.title = `Kasa - Page introuvable`
    }, []);

  return (
    <main className="main-error">
      <ErrorIndex />
    </main>
  );
}

export default Error;
