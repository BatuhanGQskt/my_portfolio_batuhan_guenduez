import ProjectIMG from '../assests/project_img_holder.png';
import QMLPaperIMG from '../assests/qml_paper.png';
import HackaTUMIMG from '../assests/hackatum_optimizer.png';

// Updated interface to match the structure of the data
interface ProjectDataEvent {
  projectLink: string;
  projectImage: string; // Path to the project image
  projectName: string;
  projectDescription: string;
  projectTools: string;
}

const ProjectData: ProjectDataEvent[] = [
    {
        projectLink: 'https://github.com/BatuhanGQskt/Fourier-Series-with-QML',
        projectImage: QMLPaperIMG, // Reference to the image file
        projectName: 'Analysis of QML model applied on Fourier Series',
        projectDescription:
            "Simulating Fourier Sum on some degree with Quantum Computers based on an article.",
        projectTools: 'Qiskit, Scipy',
    },
    {
        projectLink: 'https://github.com/yarkinerenn/hackatum',
        projectImage: HackaTUMIMG, // Reference to the image file
        projectName: 'HackaTUM Project, November 2024',
        projectDescription:
            "Developing a recursive call back function that allows selected code to be optimized by ChatGPT API. Implementing a frontend using react.js to interact with the application ",
        projectTools: 'Lang Chain, Python, Flask',
    },
    {
        projectLink: 'https://github.com/BatuhanGQskt',
        projectImage: ProjectIMG, // Reference to the image file
        projectName: 'Covid Tracking System with Android Studio (Graduation Project)',
        projectDescription:
            "Implementing Bluetooth connection via altbeacons. Android development with Java Sprint Boot backend with React native GUI. Efficiency testing to simulate battery usage with OMNeT++ ",
        projectTools: 'OMNeT++, React-native, Java, Sprintboot, Android Studio',
    },
];

export default ProjectData;
