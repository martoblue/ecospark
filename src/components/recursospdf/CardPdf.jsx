import { Card, Button } from 'react-bootstrap'; 



// eslint-disable-next-line react/prop-types
function CardExample({ title, text, imageSrc, pdfUrl }) {
    const downloadFileAtURL=(url)=>{
        const fileName = url.split("/proyectos-caseros").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  return (
    <Card className="card">
      <Card.Img variant="top" src={imageSrc} alt="Card image cap" style={{width: '288px', height: '200px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
         <Button onClick={()=>{downloadFileAtURL(pdfUrl)}} variant="primary">Descargar PDF</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;