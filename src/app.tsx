import Counter from './components/counter';
import GithubCorner from './components/github-corner';

function App() {
  return (
    <main class='flex h-screen flex-col items-center justify-center bg-primary text-color'>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/vite-react-ts-starter'
      />
      <Counter />
    </main>
  );
}

export default App;
