import React from 'react';
import Contacts from './components/contacts';
import { BoxLoading } from 'react-loadingg';
import { useAsyncHook} from './services/http.Services';
function App() {
  const [result,loading] = useAsyncHook();
return (
<> 
{ loading 
    ?<Contacts contacts={result} />
    :<BoxLoading />
}
</>
  );
}
export default App;
