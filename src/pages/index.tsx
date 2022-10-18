import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";

// Single include for both Bootstrap, and our custom styles
import '../styles/custom.scss'

function HomeScreen() {

    const { header, fpSection1, fpSection2, fpSection3, fpSection4, fpSection5, footer } = useStaticQuery(graphql`
        query mainQuery {
            header: contentfulHeader {
                logo {
                    file {
                    url
                    }
                }
            }
            fpSection1: contentfulFrontPageSection1 {
                headline
                subheading {
                    subheading
                }
                image {
                    file {
                    url
                    }
                }
            }
            fpSection2: contentfulFrontPageSection2 {
                headline
                subheading1
                subheading2
                subheading3
                subimage1 {
                    file {
                    url
                    }
                }
                subimage2 {
                    file {
                    url
                    }
                }
                subimage3 {
                    file {
                    url
                    }
                }
            }
            fpSection3: contentfulFrontPageSection3 {
                headline
                subheading {
                    subheading
                }
                image {
                    file {
                    url
                    }
                }
            }
            fpSection4: contentfulFrontPageSection4 {
                headline
                subheading {
                    subheading
                }
                image {
                    file {
                    url
                    }
                }
            }
            fpSection5: contentfulFrontPageSection5 {
                receiverLogo {
                  id
                  file {
                    url
                  }
                }
              }
            footer: contentfulFooter {
                logo {
                  file {
                    url
                  }
                }
                rightImage {
                  file {
                    url
                  }
                }
            }
        }
    `);

    return (
    <div className="container-fluid m-0 p-0">
        <Header content={header} />
        <FirstSection content={fpSection1} />
        <SecondSection content={fpSection2} />
        <ThirdSection content={fpSection3} />
        <FourthSection content={fpSection4} />
        <FifthSection content={fpSection5} />
        <Footer content={footer} />
    </div>
    )
}

export default HomeScreen;
