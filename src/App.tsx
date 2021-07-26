import MainComponentContainer from "./MainComponent";
import {GlobalSettingsProvider} from './contexts/showDetails';
import './index.css'

const App = () => (
<GlobalSettingsProvider>
  <MainComponentContainer />
</GlobalSettingsProvider>
);

export default App;