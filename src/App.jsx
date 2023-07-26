import { Route, Routes } from "react-router-dom";
import RateChickens from "./pages/RateChickens";
import SubmitChicken from "./pages/SubmitChicken";
import ViewChickens from "./pages/ViewChickens";
import ToastNotify from "./components/Toast";
import MainPage from "./components/mainPage"


function App() {
  return (
	<div>
    	<Routes>
      		<Route path="/rate" element={<RateChickens />} />
      		<Route path="/submit" element={<SubmitChicken />} />
      		<Route path="/view" element={<ViewChickens />} />
			<Route path ="/" element ={<MainPage />} />
    		</Routes>
    		<ToastNotify />
    	</div>
  );
}

export default App;
