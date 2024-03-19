import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Note from './pages/Note'
import NoteCreate from './pages/NoteCreate'
import NoteView from './pages/NoteView'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Note />} />
			<Route path='/notes/create' element={<NoteCreate />} />
			<Route path='/notes/:id' element={<NoteView />} />
		</Routes>
	)
}

export default App
