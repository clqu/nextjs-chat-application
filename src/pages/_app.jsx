import 'styles/globals.css'
import { Provider as ConnectionProvider } from 'context/connect'
import { useRouter } from 'next/router'
import Sidebar from 'components/Sidebar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <ConnectionProvider>
    {router.pathname.includes('rooms') ? (
      <div className="flex">
        <Sidebar />
        <div className="overflow-y-auto w-full">
          <Component {...pageProps} />
        </div>
      </div>
    ) : <Component {...pageProps} />}
  </ConnectionProvider>
}

export default MyApp
