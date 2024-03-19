import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout'
import Note from './pages/Note'
import NoteCreate from './pages/NoteCreate'
import NoteView from './pages/NoteView'

const router = createBrowserRouter([
	{
		element: <Layout />,
		path: '/',
		children: [
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
		],
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
