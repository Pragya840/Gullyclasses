import Header from "./components/Header";
import Footer from "./components/Footer";
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>

          <h1 className="h-primary">Welcome to Gully Classes Foundation</h1>
          <p className="center">Gully Classes Foundation was registered as a Section 8 Company under the Companies Act, 2013. 
            Gully Classes Foundation was founded in 2017 by Abdul Munaf. It is a not-for-profit organization 
            with fully charitable objectives. Gully Classes Foundation was started with the objective of 
            creating and delivering high-impact and focused programs to the underprivileged sections of 
            society in the areas of education, healthcare, and socio-economic development.</p>

            <section id="services-container">
            <h1 className="h-primary center">What We Do?</h1>
            <Row id="services">
              <Row className="box"> 
                <h2 className="h-secondary center">About Us</h2>
                <p className="center">Gully Classes Foundation aims to touch the lives of lakhs of
                 people with poverty, illness, and suffering. The work of the foundation is to provide 
                 lasting solutions in healthcare, provide help in education, skill development, employment 
                 generation, and leadership training to deserving students from the underprivileged sections.
                  We are also striving to provide models of sustainable social and economic development in our
                  lages and cities.</p>
              </Row>
              <Row className="box"> 
                <h2 className="h-secondary center">Services</h2>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Officiis doloribus dolor optio quis aperiam, esse quibusdam eum earum magnam atque reiciendis
                  aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat labore 
                  libero molestias provident quae quaerat quis! Aspernatur at enim excepturi facere in non
                  reiciendis soluta totam, voluptas voluptate </p>
              </Row>
              <Row className="box"> 
                <h2 className="h-secondary center">Contact Us</h2>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Officiis doloribus dolor optio quis aperiam, esse quibusdam eum earum magnam atque reiciendis
                  aut </p>
              </Row>
            </Row>
            </section>
            </Row>    
        </Container>
      </main>
      <Footer/>
     
   
    </div>
  );
}

export default App;
