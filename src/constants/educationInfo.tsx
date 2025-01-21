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
  { title: 'MSc. Informatics, Technical University of Munich', year: 'April 2023 - Present | GPA: 2.2/1.0', description: 'Courses: Machine Learning, Advanced Natural Language Processing, Machine Learning in Crowd Modelling & Simulation, Intorduction to Deep Learning, Introduction to Quantum Computing, Legal Data Science and Informatics', icon: TUMLogo },
  { title: 'BSc. Computer Engineering, METU Northern Cyprus Campus', year: 'August 2017 - July 2022 | GPA: 3.3/4.0 ', description: 'Courses: Data Structures & Algorithms, Programming Language, OOP Programming, Logic Design, Verilog/VHDL Programming, Embedded Systems, Computer Architecture, Introduction to OS, C Programming, Formal Languages and Abstract Machines, Data Management & File Structures I, II, Introduction to Machine Learning, Artificial Intelligence, Image Processing', icon: METULogo },
];

export default EducationInfo;
