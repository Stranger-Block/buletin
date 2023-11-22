// Import libraries and components
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

// AllProducts component to display a list of products
function AllProducts() {
  // Define state for products data
  const [myData, setData] = useState([]);

  // Function to fetch data from API
  const apiGet = async () => {
    // Fetch data from API
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    // Update state with products
    setData(json.products);
  };

  // useEffect hook to fetch data on mount and set interval for updates
  useEffect(() => {
    // Fetch data on mount
    apiGet();
    // Set interval to call apiGet every 500 seconds
    const interval = setInterval(apiGet, 500000);
    // Return cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array

  // Return JSX for products list
  return (
    <div>
      <Container fluid>
        <Row xs={1} md={4} className="g-6 d-flex flex-wrap justify-content-around align-items-stretch">
          {
            // Loop through data and render a card for each product
            myData.map((value) => (
              <Col key={value.id}>
                <Card>
                  <Card.Img variant="top" src={value.thumbnail} height="200px" />
                  <Card.Body>
                    {/* Display product title */}
                    <Card.Title style={{ fontSize: "20px", fontWeight: "1000", textAlign: "center" }}>{value.title}</Card.Title>
                    {/* Display product description with customized style */}
                    <Card.Text>
                      <span style={{ color: "rgba(120,120,120)", fontWeight: "200", fontSize: "18px" }}>{value.description}</span>
                    </Card.Text>
                    {/* Display product category and price with custom styles */}
                    <footer>
                      <span style={{ color: "red", fontWeight: "800", fontSize: "14px" }}>{value.category}</span>
                      :
                      <span style={{ color: "black", fontWeight: "800", fontSize: "14px" }}>{value.price}</span>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}

// Export the component
export default AllProducts;
