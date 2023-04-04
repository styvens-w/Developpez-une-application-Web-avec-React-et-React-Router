import ErrorIndex from '../components/Error';
import '../styles/E404.css';

function Error() {
  document.title = `Kasa - Page introuvable`;
  return (
    <main className="main-error">
      <ErrorIndex />
    </main>
  );
}

export default Error;
