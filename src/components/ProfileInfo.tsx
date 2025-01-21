import Colors from "../constants/colors";
import SectionWrapper from "../hoc/SectionWrapper";


const ProfileInfo = () => {
    return (
        <div className="d-flex flex-column p-4" 
        style={{
            fontSize: '30px',
            color: Colors.textPrimary,
            textAlign: "left",
            maxWidth: "1000px", // Limit the maximum width
            width: "100%", // Ensure it adapts to parent width
            margin: "0 auto", // Center the content
            lineHeight: "1.6", // Improve readability
        }}>
            <p>🎓 I have 2 years of practical experience in informatics, specializing in AI, machine learning, and software development, complemented by 5 years of academic study.</p>
            <p>👨‍💻 I hold a BSc in Computer Engineering from METU Northern Cyprus Campus and am pursuing an MSc in Informatics at the Technical University of Munich.</p>
            <p>🛠 I have developed several applications in different fields. Some of them are Covid-Tracking System, OCR Software, Compiler Design</p>
            <p>💡 Open to develop new software. Feel free to contact!</p>
        </div>
    );
}

export default SectionWrapper(ProfileInfo, "profile_info_section");
