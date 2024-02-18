import Header from "../../assets/Layout/Header";
import Footer from "../../assets/Layout/Footer";

const Content = () => {
  return (
    <>
      <Header first="HOME" second="About" third="Services" forth="Contact " />
      <main>
        <section>
          <div className="container">
            <div className="content">
              <h2>Tour Your Dream</h2>
              <h2>destination with</h2>
              <h2>Travel.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sed, officia quae eum iusto ratione autem eius minus,
                nisi laboriosam id ullam aliquam sunt deserunt, magni natus
                maiores placeat perferendis.
              </p>
              <div className="button-section">
                <button>Register</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Content;
