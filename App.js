import Home from './pages/Home';
import { Provider } from 'react-redux';
import Store from './common/store/Store';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}
