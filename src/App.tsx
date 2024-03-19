import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Note from './pages/Note'
import NoteCreate from './pages/NoteCreate'
import NoteView from './pages/NoteView'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Note />,
	},
	{
		path: '/notes/create',
		element: <NoteCreate />,
	},
	{
		path: '/notes/:id',
		element: <NoteView />,
	},
])
function App() {
	return <>qwdqwd</>
}

export default App
