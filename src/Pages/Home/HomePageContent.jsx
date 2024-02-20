import Header from "../../assets/Layout/Header";
import Footer from "../../assets/Layout/Footer";
import homePageContentStyle from "../../assets/CSS/home/homePageContent.module.css";

const HomePageContent = () => {
  return (
    <div>
      <Header first="Home" second="About" third="Services" forth="Contact " />
      <main>
        <section>
          <div className={homePageContentStyle.content}>
            <h2>Student Dropout</h2>
            <h2>Analysis</h2>

            <p>
              This Website to collect data and analyze findings. This
              comprehensive understanding aids policymakers in implementing
              targeted interventions to reduce dropout rates.
            </p>
            <div className={homePageContentStyle.buttonSection}>
              <a href="http://localhost:5173/register">
                <button>Register</button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePageContent;
