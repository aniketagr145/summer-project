import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './card'

function grid(props) {
    const documentList = props.documentList;
    return (
      <Row xs={1} md={2} className="g-4 px-20 ">
        {documentList.map((document) => (
          <Col >
          
          <Card 
            document = {document}
          />
            
          </Col>
        ))}
      </Row>
    );
  }
  
  export default grid;