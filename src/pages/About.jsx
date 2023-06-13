import Header from "../components/Header";
import Meta from "../components/Meta";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import College from "../assets/college-1.jpeg";
import { Container } from "react-bootstrap";

const About = () => {
  // page content
  const PageTitle1 = "About GNI";
  const Description1 =
    "Guru Nanak Institutions (GNI) is a multi-disciplinary group of institutions situated within 30 minutes drive from Hyderabad International Airport, in the Greater Hyderabad Municipal Corporation limits. GNI offers various Faculties of studies viz, Engineering, Management Studies and Pharmacy. GNI is a dream venture of Guru Nanak Educational Society (GNES) having an excellent track record of 22 years in delivering quality higher education in the fields of Engineering & Technology, Pharmacy, Management and Dental Sciences.";

  const PageTitle2 = "About HACKTOPIA";
  const Description2 =
    "Hacktopia is a Hackathon event being conduct first time in GNI Campus under the Aegis of Department of Computer Science & Engineering The term hackathon is derived from the combination of the phrases hack and  marathon. In its most basic form, a hackathon is a collaborative problem-solving challenge. The goal is to encourage innovation and showcase fresh ideas or solutions.";

  return (
    <div>
      <Meta title={PageTitle1} />
      <Header head={PageTitle1} description={Description1} />
      <Container className="aline-content-center">
        <Image className="py-3 " src={College} rounded />
      </Container>
      <Header head={PageTitle2} description={Description2} />

      {/* <Row>
        <Col sm={8}>
      <Meta title={PageTitle1} />
      <Header head={PageTitle1} description={Description1} />
      <Header head={PageTitle2} description={Description2} /></Col>
        <Col sm={4}>
        <Image className="" src={College} rounded /> 
        </Col>
      </Row> */}
    </div>
  );
};

export default About;
