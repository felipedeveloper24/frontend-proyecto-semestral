import RouterPrincipal from "./router/routerPrincipal"
import {QueryClientProvider,QueryClient} from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <RouterPrincipal/>
    </QueryClientProvider>
    
  )
}

export default App
