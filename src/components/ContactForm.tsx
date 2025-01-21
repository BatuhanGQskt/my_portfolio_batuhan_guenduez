import React from 'react';
import Colors from "../constants/colors";
import ProjectIMG from '../assests/project_img_holder.png';
import UserLogo from '../assests/user-circle-svgrepo-com.svg';
import EmailLogo from '../assests/icons8-email-16.png';


const ContactForm = () => {
    return (
        <div className="contact-form-container d-flex flex-column" 
             style={{
                 padding: '35px', 
                 backgroundColor: Colors.background, 
                 border: `2px solid ${Colors.border}`, // Add border
                 borderRadius: '15px', // Curvy border
                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Optional: Add subtle shadow
                 maxWidth: '600px', // Ensure the form doesn't get too wide
                 margin: '0 auto 120px', // Apply margin on left, right, and bottom only
                 fontFamily: 'system-ui'
            }}>
            <div className="header">
                <h1 
                    style={{
                        textAlign: 'left', 
                        fontSize: '74px', 
                        paddingRight: '60px', 
                        paddingTop: '60px', 
                        paddingBottom: '60px', 
                        fontWeight: 'bold', 
                        background: `linear-gradient(to right, ${Colors.primary}, yellow)`, 
                        WebkitBackgroundClip: 'text',  // Required for gradient text effect
                        color: 'transparent'  // Make the text color transparent to reveal the gradient
                    }}
                >
                    Contact.
                </h1>
            </div>
            <div className="form-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div className='d-flex justify-content-between' style={{ width: '100%', maxWidth: '600px', gap: '20px' }}>
                    <div className="input-group" style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
                            <img 
                                src="https://img.icons8.com/stamp/32/FA5252/user.png"
                                alt="user logo" 
                                style={{ 
                                width: '24px', 
                                height: '24px', 
                                marginRight: '10px' 
                                }} 
                            />
                            <h6 style={{ 
                                color: 'white',
                                fontSize: '24px', 
                                margin: 0 // Ensures no extra margin on h6
                            }}>
                                Name
                            </h6>
                        </div>

                        <textarea
                            name="person_name"
                            id="name"
                            placeholder="Please Enter your name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                color: 'black',
                                maxHeight: '48px',
                                resize: 'none',
                                backgroundColor:  "#F2F2F2",
                            }}
                        />
                    </div>
                    <div className="input-group" style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
                            <img 
                                src="https://img.icons8.com/ios-filled/50/FD7E14/apple-mail.png"
                                alt="email logo" 
                                style={{ 
                                width: '24px', 
                                height: '24px', 
                                marginRight: '10px' 
                                }} 
                            />
                            <h6 style={{ 
                                color: 'white', 
                                margin: 0, // Ensures no extra margin on h6,
                                fontSize: '24px',
                            }}>
                                E-Mail
                            </h6>
                        </div>
                        <textarea
                            name="mail"
                            id="email"
                            placeholder="Your Email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                color: 'black',
                                resize: 'none',
                                maxHeight: '48px',
                                backgroundColor:  "#F2F2F2",
                            }}
                        />
                    </div>
                </div>
                <div className="input-group" style={{ width: '100%', maxWidth: '600px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
                        <img style={{ 
                                width: '24px', 
                                height: '24px', 
                                marginRight: '10px' 
                                }}   src="https://img.icons8.com/ios-filled/50/FAB005/chat-message--v1.png" alt="message"/>
                        <h6 style={{ 
                            color: 'white', 
                            fontSize: '24px',
                            margin: 0 // Ensures no extra margin on h6
                        }}>
                            Message
                        </h6>
                    </div>
                    <textarea
                        name="message"
                        id="msg"
                        placeholder="Hey, thank you for your interest. Let's build something together!"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                            color: 'black',
                            resize: 'none',
                            minHeight: '170px',
                            backgroundColor:  "#F2F2F2",
                        }}
                    />
                </div>
                


            </div>
            <div className="submit-button" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '40px' }}>
                    <button
                        type="submit"
                        style={{
                        width: '90%',  // Button will take 90% of the width
                        padding: '10px 20px',
                        backgroundImage: `linear-gradient(to right, ${Colors.primary}, ${Colors.secondary} , yellow)`, // Color transition from left to right
                        color: '#fff',
                        border: 'none',
                        borderRadius: '25px',  // Rounded corners for aesthetic
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-position 0.5s ease, background-size 0.5s ease', // Smooth transition for both size and position
                        backgroundSize: '200% auto', // Double width for smooth gradient transition
                        backgroundPosition: 'right bottom', // Initial position for the gradient
                        }}
                        onMouseOver={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundPosition = 'left bottom'; // Move the gradient to the left on hover
                        target.style.backgroundSize = '200% 100%'; // Ensure it expands smoothly
                        }}
                        onMouseOut={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundPosition = 'right bottom'; // Reset gradient to the right on mouse out
                        target.style.backgroundSize = '200% 100%'; // Reset size
                        }}
                    >
                        Submit
                    </button>
                </div>
        </div>
    );
};

export default ContactForm;
