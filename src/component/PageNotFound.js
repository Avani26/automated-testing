import React from "react";
import {Container, Row} from "reactstrap";

function PageNotFound() {
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5 pt-5 bg-gray">
        <h1 className="text-black-50 font-weight-bold page-title">Page Not Found</h1>
      </Row>
    </Container>
  );
}

export default PageNotFound;
