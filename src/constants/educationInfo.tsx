import GithubSVG from '../assests/icons8-github.svg';
import TUMLogo from '../assests/Logo_of_the_Technical_University_of_Munich.svg';
import METULogo from '../assests/METU_logo.svg';


interface EducationEvent {
  title: string;
  year: string;
  description: string;
  icon: string; // Path to the icon (e.g., SVG file)
}

const EducationInfo: EducationEvent[] = [
  { title: 'MSc. Informatics, Technical University of Munich', year: 'April 2023 - Present', description: 'GPA: 2.2/1.0 Courses: ', icon: TUMLogo },
  { title: 'BSc. Computer Engineering, METU Northern Cyprus Campus', year: 'August 2017 - July 2022', description: 'GPA: 3.3/4.0 ', icon: METULogo },
];

export default EducationInfo;
