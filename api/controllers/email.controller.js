
import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
    try {
        // Extract form data from request body
        const { name, email, topic, message } = req.body;

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'wissham25@gmail.com',
                pass: 'pqob zpzu ztmy bnaz',
            }
        });

        // Construct email message
        const mailOptions = {
            from: 'wissham25@gmail.com',
            to: 'wissham25@gmail.com', // Replace with recipient email address
            subject: topic,
            text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nMessage: ${message}`
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        // Respond with success message
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
};
