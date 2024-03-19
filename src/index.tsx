import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

root.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<App />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme='light'
			/>
		</QueryClientProvider>
	</BrowserRouter>
)
