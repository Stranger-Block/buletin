// Import required components and libraries
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

// OneProduct component displaying a single product card
function OneProduct() {
  // State for product data
  const [mydata, setData] = useState([]);

  // Fetch data from API
  const apiGet = async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  // UseEffect to fetch data and refresh every 500 seconds
  useEffect(() => {
    apiGet();
    const interval = setInterval(() => apiGet(), 500000);
    return () => clearInterval(interval);
  }, []);

  // Render product card if data exists
  return (
    <div>
      <Container fluid>
        <Row xs={1} md={1} className="g-6 d-flex flex-wrap justify-content-around align-items-stretch">
          {mydata && (
            <>
              <Col>
                <Card style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Img variant="top" src={mydata.thumbnail} height="400px" />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title style={{ fontSize: "20px", fontWeight: "1000" }}>{mydata.title}</Card.Title>
                    <Card.Text>
                      <span style={{ color: "rgba(120,120,120)", fontWeight: "200", fontSize: "18px" }}>
                        {mydata.description}
                      </span>
                    </Card.Text>
                    <footer>
                      <span style={{ color: "red", fontWeight: "800", fontSize: "14px" }}>{mydata.category}:</span
                      >
                      <span style={{ color: "black", fontWeight: "800", fontSize: "14px" }}>{mydata.price}</span>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default OneProduct;
