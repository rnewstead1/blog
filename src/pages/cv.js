import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CvPage = ({}) => {
  return (
      <>
        <SEO title="CV" />
        <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.0875rem 1.45rem`,
        }}>
            <div>
                <h1>Rachel Normand</h1>
                <p><i>Experienced software engineer and leader focused on building great products and high performing teams, as well as fostering a remote-first culture.</i></p>
            </div>

            <div className="cv-section">
                <h2>About me</h2>
                <p>I've been a software engineer for nine years, working across a range of domains and technologies.
                    Most recently I've been building full stack Node.js microservices to help teachers and schools at Tes.
                    In the last year I've been leading teams of four to seven engineers working across multiple locations and timezones.
                    I've helped to build a remote-first culture through mentoring and coaching individuals and teams.
                    I'm happiest helping teams work together and building great products.
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li><i>Programming languages:</i> Node.js, Java, Clojure, Scala</li>
                    <li><i>Database technologies:</i> Mongodb, Postgres, Solr, Cassandra</li>
                    <li><i>Other:</i> SAML, OpenID Connect, Docker, Kubernetes</li>
                    <li><i>Methodologies:</i> Agile, Test Driven Development, pair programming, microservices</li>
                </ul>
            </div>

            <div className="cv-section">
                <h2>Employment History</h2>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <h3>Principal Engineer, Tes Global</h3>
                        <p><i>Jan 2020 - present</i></p>
                        <p>I lead remote-first teams of software engineers building products for schools to recruit teachers.
                            A large part of my job is mentoring and enabling individuals to be more effective.
                            I also focus on helping teams work better together across multiple locations and timezones.
                            We build services that look after high-risk and special category data.
                            We consider risk in everything we do and ensure necessary security measures are in place.
                            We take a lean approach to product development in order to get products in front of users quickly.
                        </p>
                    </li>
                    <li>
                        <h3>Senior Engineer, Tes Global</h3>
                        <p><i>Feb 2016 - Jan 2020</i></p>
                        <p>Building full stack microservices in Nodejs to help teachers and schools.
                            I worked on products to support teachers applying for jobs online and for schools to manage applications.
                        </p>
                    </li>
                    <li>
                        <h3>Consultant, Thoughtworks</h3>
                        <p><i>March 2014 - Feb 2016</i></p>
                        <p>I was a consultant developer on the following projects:</p>
                        <ul>
                            <li>
                                <h4>METRO, Salesforce App</h4>
                                <p>Part of a team in Hamburg and Dusseldorf developing a web application for METRO Sales Managers to plan and manage customer visits.
                                    The system consists of a Java backend with a Cassandra database and a front end React service.
                                    I was also personally resonsible for the deployment pipeline of the application to Google Cloud using Kubernetes and Docker.
                                </p>
                            </li>
                            <li>
                                <h4>GOV UK Verify, Government Digital Service</h4>
                                <p>I worked on the GOV UK Verify project which provides a single, secure way for individuals to access government services online.
                                    The system consists of numerous microservices written in Java using the Dropwizard framework.
                                    To ensure security, messages between these microservices and external systems use SAML.
                                </p>
                                <p>
                                    This involves working in a support role for one week every month.
                                    This includes speaking with different third parties, releasing to test and production environments daily, and solving problems that arise in production.
                                </p>
                            </li>
                            <li>
                                <h4>Identity Assurance for Organisations and Agents Alpha, Government Digital Service</h4>
                                <p>I worked on a small team at the Government Digital Service to build a prototype in Clojure to investigate a single sign-in service for the government for businesses.
                                    This included investigating the OpenID Connect protocol and implementing this in Clojure.
                                    I gave a talk about this project at the Clojure Xchange conference in December 2014.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Software Developer, Sky Network Services</h3>
                        <p><i>July 2011 - March 2014</i></p>
                        <p>
                        I was part of a team that interfaced with BT to provide telephone and broadband services to Sky customers.
                        Development was mainly in Java writing to an Oracle database and communicating using XML via an ActiveMQ message broker.
                        I worked on a mixture of legacy systems using Spring and Hibernate, and newer, more lightweight systems designed around business events.
                        I enjoyed using functional libraries such as Guava and Totally Lazy to make transforming collections simple and elegant.
                        I also developed a small Scala application, and found Scala’s support for overloading operators to be perfect for creating a simple DSL to route messages.
                        </p>
                        <p>
                        This was an Agile environment: pair programming was standard, using a test driven development approach and starting from an acceptance test to define the business requirement.
                        I led numerous retrospectives for other teams and believe that effective communication is key to making a team work well.
                        </p>
                    </li>
                    <li>
                        <h3>Technology Graduate, BSkyB</h3>
                        <p><i>July 2009 - July 2011</i></p>
                        <p>
                            Two year graduate scheme consisting of a six week intensive training course on all areas of the software lifecycle and four six month placements in various technology departments.
                            This included:
                        </p>
                        <ul>
                            <li>
                                <h4>Agile Software Developer, Sky Network Services</h4>
                                <p>Designing, testing, developing and delivering software using a variety of languages and frameworks, using agile programming techniques.</p>
                            </li>
                            <li>
                                <h4>Test Analyst, Sky Network Services</h4>
                                <p>Acceptance and performance testing applications, developing test scripts and providing quality assurance, using Concordion and Yatspec test frameworks.</p>
                            </li>
                            <li>
                                <h4>Configuration Analyst, Infrastructure Services</h4>
                                <p>Analysing infrastructure and using a Remedy CMDB. Introduced a team wiki and Agile Ops to the team.</p>
                            </li>
                            <li>
                                <h4>Agile Web Developer, Innovations Team</h4>
                                <p>Front end web development using HTML, CSS, Javascript, JQuery. Some back end development using PHP and Wordpress.
                                    Agile environment with small projects and weekly iterations.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="cv-section">
                <h2>Qualifications</h2>
                <ul>
                    <li>
                        The University of York (2005 - 2008)
                        <p>BA (Hons) History 2:1 </p>
                    </li>
                    <li>
                        The Knights Templar School (2003 - 2005)
                        <p>A Levels: English Literature A, History A, Mathematics A</p>
                        <p>AS Level: French B</p>
                    </li>
                    <li>
                        Fearnhill School (1998 - 2003)
                        <p>11 GCSEs: A* - B (including Double Science, English and Mathematics at A*)</p>
                    </li>
                </ul>
            </div>

            <div className="cv-section">
                <h2>Other</h2>
                <ul>
                    <li>Speaker at <a href="http://tinyurl.com/rnewstead-clj-talk">​Clojure in the Service of Her Majesty’s Government</a> (with Philip Potter), Clojure Xchange 2014</li>
                    <li>Swift & iOS8 2 day Course (Skills Matter)</li>
                    <li>Functional Programming Principles in Scala (Coursera) 2012</li>
                    <li>
                        Race Captain, Carnethy Hill Running Club 2017 - 2019
                    </li>
                    <li>
                        President of University of York Windsurfing Club (2007 - 2008)
                    </li>
                </ul>
            </div>

            <div>
                <p><a href="https://www.github.com/rnewstead1">github.com/rnewstead1</a></p>
            </div>
        </div>
      </>
  )
}

export default CvPage