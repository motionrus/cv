import React from 'react';
import "./style.scss"
import {Card, CardDescription} from "./components/Card/Card";
import SberIcon from "./img/Sber.png"
import HTSTSIcon from "./img/htsts-logo-v3 1.png"
import IBIMIcon from "./img/ibim.png"
import AmtelIcon from "./img/amtel.png"
import Ertelecom from "./img/ertelecom.png"
import {List} from "./components/List/List";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>
      <List>
        <Card
          logo={SberIcon}
          title="Chief Development Engineer"
          workDate="July 2020 - till now"
          duration="11 months"
          description="Sberbank, www.sbrf.ru"
        >
          <CardDescription title="Responsibilities">
            <li>Development of a platform for image analysis and recognition (Active Learning, AICloud)</li>
            <li>Automation of CI/CD processes (Jenkins, OpenShift, Kubernetes)</li>
            <li>Working with highly loaded services</li>
          </CardDescription>
          <CardDescription title="Stack">
            <li>Django, Django REST Framework, AIOHTTP</li>
            <li>React/Redux, TypeScript</li>
            <li>PostgreSQL, MongoDB</li>
            <li>Celery, RabbitMQ</li>
            <li>Locust, PyTest</li>
          </CardDescription>
          <CardDescription title="Tools">
            <li>Python, JavaScript, Bash, Docker, KubeFlow</li>
            <li>Jenkins Pipelines, Groovy, SonarQube</li>
          </CardDescription>
          <CardDescription title="Monitoring">
            <li>Sentry, Prometheus, Grafana</li>
          </CardDescription>
        </Card>
        <Card
          logo={HTSTSIcon}
          title="Chief Development Engineer"
          workDate="August 2019 — July 2020"
          duration="1 year"
          description="HTSTS, www.htsts.ru"
        >
          <CardDescription title="Responsibilities">
            <li>Design and development of SPA applications for conferences.</li>
            <li>Development of a role model and integration with microservices</li>
            <li>Code review and refactoring</li>
          </CardDescription>
          <CardDescription title="Stack">
            <li>React, Redux, Typescript, Material-UI</li>
            <li>Django, Django REST Framework</li>
            <li>PostgreSQL, Django ORM</li>
          </CardDescription>
          <CardDescription title="Tools">
            <li>Nexus, Sentry</li>
            <li>Pylint, Eslint</li>
            <li>Prometheus, Grafana</li>
          </CardDescription>
          <CardDescription title="Wokflow">
            <li>Nexus, Sentry</li>
            <li>Pylint, Eslint</li>
            <li>Prometheus, Grafana</li>
          </CardDescription>
        </Card>
        <Card
          logo={IBIMIcon}
          title="Full Stack Developer"
          workDate="December 2018 — August 2019"
          description="iBIM, www.bim-info.ru"
          duration="9 months"
        >
          <CardDescription title="Responsibilities">
            <li>Design and development of a platform for business</li>
            <li>Support / Monitoring of company services</li>
            <li>Integration with other services of the company</li>
          </CardDescription>
          <CardDescription title="Stack">
            <li>Pyramid Web Framework, React</li>
            <li>Microsoft SQL Server, Redis</li>
            <li>Apache Kafka, ZooKeeper</li>
          </CardDescription>
          <CardDescription title="Workflow">
            <li>Bitbucket, Jira, Confluence</li>
            <li>Kanban, Time Tracker</li>
          </CardDescription>
          <CardDescription title="Deploy">
            <li>Docker, VMware</li>
          </CardDescription>
          <CardDescription title="CI/CD">
            <li>TeamCity</li>
          </CardDescription>
        </Card>
        <Card
          logo={AmtelIcon}
          title="Senior Engineer"
          workDate="July 2017 — November 2018"
          description="AMTEL, www.amtelcom.ru"
          duration="1 year 5 months"
        >
          <CardDescription title="Responsibilities">
            <li>Development of tools for internal use</li>
            <li>Linux server administration and automation</li>
          </CardDescription>
          <CardDescription title="Stack">
            <li>Python, Bash</li>
            <li>VirtualBox, VMware</li>
            <li>MySQL, PostgreSQL</li>
          </CardDescription>
        </Card>
        <Card
          logo={Ertelecom}
          title="Enterprise System Engineer"
          workDate="January 2014 — July 2017"
          description="ER-Telecom Holding, www.domru.ru"
          duration="3 years 7 months"
        >
          <CardDescription title="Responsibilities">
            <li>Administration of server infrastructure</li>
            <li>Development of a network core validation service</li>
            <li>Automation of routine tasks</li>
          </CardDescription>
          <CardDescription title="Stack">
            <li>Corosync, Pacemaker</li>
            <li>Python, Bash</li>
            <li>TCP/IP, Wireshark</li>
          </CardDescription>
        </Card>
      </List>
    </div>
  );
};

export default Experience;