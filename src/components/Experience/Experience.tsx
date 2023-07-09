import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

function Experience() {
  return (
    <div
      id="Experience"
      className="experience-background min-h-screen bg-fixed bg-no-repeat bg-cover bg-center"
    >
      <div className="image-reverse-cover w-auto min-h-screen flex justify-center items-center px-5 py-20 md:p-20">
        <VerticalTimeline>
          <VerticalTimelineElement
            date="Apr 2023 - Present"
            icon={
              <img
                className="w-20"
                src="https://www.inmuebles.banbajio.com/img/logo-1645643904.jpg"
              />
            }
          >
            <h2>BanBajio</h2>
            <h3>Developer Officer</h3>
            <p>
              As a Developer Officer at BanBajio, I have been involved in
              significant projects that have contributed to the enhancement of
              the company's systems.
            </p>
            <p>
              One of my key achievements was the development of a feature in the
              embossing system. Using Java, I created a solution that
              effectively distributed different products to various providers.
              This feature optimized the distribution process, improving
              efficiency and accuracy.
            </p>
            <p>
              Additionally, I worked on developing reports using SQL on Oracle
              Database and MySQL. By leveraging my SQL expertise, I successfully
              generated insightful reports that provided valuable insights into
              business operations and helped inform decision-making.
            </p>
            <p>
              My role as a Developer Officer at BanBajio has allowed me to
              utilize my programming skills to improve system functionality and
              deliver impactful solutions. I continue to contribute to the
              development and enhancement of critical systems within the
              organization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Jun 2022 - Apr 2023"
            icon={
              <img
                className="w-20"
                src="data:image/png;base64,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"
              />
            }
            iconStyle={{ background: "black" }}
          >
            <h2>Rocktech</h2>
            <h3>Software Developer</h3>
            <p>
              During my tenure as a Software Engineer at Rocktech, I contributed
              to several impactful projects that showcased my technical
              expertise and problem-solving abilities.
            </p>
            <p>
              In one project, I developed the "Equity Manager" system, a
              comprehensive solution for managing private equity investments.
              Leveraging Django, GraphQL, and Next.js, I implemented financial
              formulas to calculate earned interests, compound interests, and
              more for investment accounts. I also integrated with Banxico's
              APIs to obtain essential metrics such as inflation rate and
              Banxico's target rate, enhancing the system's functionality.
            </p>
            <p>
              Additionally, I worked on a Business Diagnose application
              utilizing ChatGPT. Through effective communication with OpenAI's
              API, I successfully completed text based on customized prompts,
              enabling efficient and accurate business analysis.
            </p>
            <p>
              Working at Rocktech allowed me to further enhance my technical
              skills, collaborate with a talented team, and contribute to
              innovative software solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Mar 2022 - Jun 2022"
            icon={
              <img
                className="w-20"
                src="data:image/png;base64,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"
              />
            }
            iconStyle={{ background: "black" }}
          >
            <h2>Rocktech</h2>
            <h3>Software Developer Intern</h3>
            <p>
              During my internship at Rocktech, I played a vital role in
              developing a comprehensive content management system (CMS) for "La
              Cocinoteca," a renowned restaurant. With a focus on rapid learning
              and effective collaboration, I successfully achieved project
              completion.
            </p>
            <p>
              Using Django, React, and Next.js, I created a dynamic CMS that
              empowered the restaurant to manage their blogs, menus, and
              galleries seamlessly. This involved integrating various
              functionalities and ensuring a smooth user experience.
            </p>
            <p>
              My internship experience at Rocktech sharpened my technical skills
              and highlighted the importance of effective teamwork in achieving
              project success.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Jan 2022 - Jun 2022"
            icon={
              <img
                className="w-20"
                src="https://itesainvestigacion.weebly.com/uploads/6/5/9/7/65970875/logo-tecnm-2018_orig.png"
              />
            }
          >
            <h2>Tecnológico Nacional de México (TecNM)</h2>
            <h3>Software Developer Intern</h3>
            <p>
              During my tenure at Tecnológico Nacional de México (TecNM), I
              focused on optimizing an application responsible for generating
              reports based on survey data collected from students to evaluate
              teachers' performance.
            </p>
            <p>
              Utilizing my SQL expertise, I implemented optimizations within the
              application to enhance its performance. By fine-tuning SQL queries
              and database interactions, I was able to significantly improve the
              speed and efficiency of report generation.
            </p>
            <p>
              Working closely with the development team, I collaborated on
              identifying bottlenecks and implementing strategic improvements to
              ensure the application delivered accurate and timely reports.
              These optimizations not only streamlined the reporting process but
              also provided valuable insights into teachers' performance and
              contributed to the overall improvement of educational quality.
            </p>
            <p>
              My experience at Tecnológico Nacional de México (TecNM) allowed me
              to apply my technical skills in a practical setting, optimize
              performance, and make a positive impact on the institution's
              evaluation processes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
