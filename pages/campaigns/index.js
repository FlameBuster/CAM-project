import React from "react";
import fs from "fs";
import path from "path";
import Banner from "../../components/campaigns/banner/Banner";
import CampaignList from "../../components/campaigns/campaign-list/CampaignList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";

function Campaigns({ files }) {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div className={styles.mainContent}>
          <div className={styles.heading}>
            <h1>
              Welcome to the Archives section of the Corps Archives Museum!
            </h1>
            <p>
              <br></br> Delve into a treasure trove of military history
              meticulously preserved for enthusiasts, scholars, and history
              buffs alike. Below, you'll discover a rich collection of
              artifacts, documents, and records spanning decades of military
              heritage. From the annals of strategic campaigns to the personal
              narratives of brave servicemen and women, our archives offer a
              profound insight into the triumphs and challenges that have shaped
              the course of history. Whether you're seeking to uncover the
              intricacies of military tactics, explore the evolution of
              weaponry, or simply immerse yourself in the stories of valor and
              sacrifice, our archives stand as a testament to the enduring
              spirit of courage and resilience. Journey through the corridors of
              time and uncover the untold tales that have shaped the world we
              live in today. Welcome to a world where history comes alive –
              welcome to the Archives of the Corps Archives Museum.
            </p>
          </div>
          <section className={styles.campaignList}>
            <h2>List of Files:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <a
                    href={`/pdfs/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const pdfsDirectory = path.join(process.cwd(), "public/pdfs");
  const filenames = fs.readdirSync(pdfsDirectory);
  return {
    props: {
      files: filenames,
    },
  };
}

export default Campaigns;
