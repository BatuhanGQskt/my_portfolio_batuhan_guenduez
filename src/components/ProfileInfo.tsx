import SectionWrapper from "../hoc/SectionWrapper";


const ProfileInfo = () => {
    return (
        <div>
            <p>🎓 Education</p>
            <p>👨‍💻 Studies</p>
            <p>🛠 Tools projects to talk</p>
            <p>🔧 Things i enjoy. (Maybe change emoji)</p>
            <p>💡 Interesting things about me</p>
        </div>
    );
}

export default SectionWrapper(ProfileInfo, "profile_info_section");
