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
            icon={<img className="w-20" src="/images/companies/bb.webp" />}
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
              <img className="w-20" src="/images/companies/rocktech.webp" />
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
              <img className="w-20" src="/images/companies/rocktech.webp" />
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
            date="Jan 2022 - Mar 2022"
            icon={<img className="w-20" src="/images/companies/tecnm.webp" />}
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
