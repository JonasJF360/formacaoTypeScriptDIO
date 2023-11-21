import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
	let autoId = 1
	return (
		<Layout>
			< Card
				id={autoId++}
				paragraph="TypeScript"
				details="TypeScript para front-end e back-end."
			/>
			< Card
				id={autoId++}
				paragraph="HTML"
				details="HTML para front-end."
			/>
			< Card
				id={autoId++}
				paragraph="SQL"
				details="SQL para banco de dados."
			/>
		</Layout>
	);
}

export default App;
