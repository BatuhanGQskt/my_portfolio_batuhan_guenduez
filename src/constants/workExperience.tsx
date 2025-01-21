import GithubSVG from '../assests/icons8-github.svg';
import TUMLogo from '../assests/Logo_of_the_Technical_University_of_Munich.svg';
import METULogo from '../assests/METU_logo.svg';
import BademLogo from '../assests/badem.jpg';
import LegalianLogo from '../assests/legalian.png';

interface EducationEvent {
  title: string;
  companyName: string;
  year: string;
  description: string;
  icon: string; // Path to the icon (e.g., SVG file)
}

const WorkingExperienceInfo: EducationEvent[] = [
  { title: 'Interdisciplinary Project', companyName: 'Legalian', year: 'March 2024 - June 2024', description: 'Developing data labelling software for AI and machine learning. Focusing on legal data and document annotation via Reactjs and Flask. Annotation tool implementation from scratch with Reactjs using Typescript', icon: LegalianLogo },
  { title: 'Intern', companyName: 'Badem Bilgi Bilisim', year: 'Feb 2022 - Mar 2022', description: 'Forecasting time series to predict stock prices using AI. Tools: scikit-learn, Facebook Prophet ', icon: BademLogo },
  { title: 'Intern', companyName: 'Elektra Elektronik', year: ' Jul 2021 - Sep 2021', description: 'Implementing a PWM signal controller and generator using VHDL programming language.', icon: "https://www.elektra-pq.de/images/logoust.png" },
  { title: 'Student Teaching Assistant', companyName: 'METU Northern Cyprus Campus', year: 'Four Semester', description: 'Assisting in lab sessions and helped students with programming problems four semesters.', icon: METULogo },
];

export default WorkingExperienceInfo;
