import { useState } from "react";

export default function Form() {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = e => {
        setFields({ ...fields, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" });
        setSuccess("");
    };

   const validate = () => {
    const newErrors = {};

    if (fields.name.trim().length < 4) {
        newErrors.name = "Name must be at least 4 characters.";
    }
    if (fields.name.trim().split(/\s+/).length > 4) {
        newErrors.name = "Name must not exceed 4 words.";
    }

    if (
        !/^.+@.+\.(com|net|org)$/i.test(fields.email.trim())
    ) {
        newErrors.email = "Email must end with .com, .net, or .org";
    }

    if (!/^\d+$/.test(fields.phone.trim())) {
        newErrors.phone = "Phone must contain digits only.";
    } else if (fields.phone.trim().length < 9) {
        newErrors.phone = "Phone must be at least 9 digits.";
    } else if (fields.phone.trim().length > 11) {
        newErrors.phone = "Phone must not exceed 11 digits.";
    }

    if (!fields.subject.trim()) {
        newErrors.subject = "Subject is required.";
    }
    if (!fields.message.trim()) {
        newErrors.message = "Message is required.";
    }

    return newErrors;
};

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess("");
        } else {
            setErrors({});
            setSuccess("Form submitted successfully!");
             setFields({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
            
        }
    };

    return (
        <div className='form-container'>
            <h1>Free consultation<br/>Let's discuss your project</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={fields.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            value={fields.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Your Phone Number"
                            value={fields.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <span style={{color:"red"}}>{errors.phone}</span>}
                    </div>
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            value={fields.subject}
                            onChange={handleChange}
                            required
                        />
                        {errors.subject && <span style={{color:"red"}}>{errors.subject}</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        value={fields.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <span style={{color:"red"}}>{errors.message}</span>}
                </div>
                <button type="submit">Send Message</button>
                {success && <p style={{color:"green"}}>{success}</p>}
            </form>
        </div>
    );
}