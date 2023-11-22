// Import components
import Allproduct from "./Components/Allproduct";
import Boxcontent1 from "./Components/Boxcontent1";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Oneproduct from "./Components/oneproduct";

// App component
const App = () => {
  // Return the main layout with components
  return (
    <div className="container-new">
      <div className="classclass">
        <div>
          {/* Display header component */}
          <Header />
        </div>
        <div>
          {/* Display box content 1 */}
          <Boxcontent1 />
        </div>
        <div>
          {/* Display one product component */}
          <Oneproduct />
        </div>
        <div>
          {/* Display all products component */}
          <Allproduct />
        </div>
        <div>
          {/* Display footer component */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
