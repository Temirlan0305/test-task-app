import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			// keepPreviousData: true
		},
	},
})
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<App />
			{/* <ToastContainer
						position='top-right'
						autoClose={5000}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						theme='light'
					/> */}
		</QueryClientProvider>
	</BrowserRouter>
)
