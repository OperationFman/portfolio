import { ParallaxLayer } from "@react-spring/parallax";

export const ContactForm = () => {
  return (
    <ParallaxLayer
      offset={5}
      style={{
        backgroundColor: "green",
      }}
    >
      <h1>Contact Form</h1>
      <ul>
        <li>Subject</li>
        <li>Content</li>
        <li>Checkbox: If offering a job Im including a salary range</li>
        <li>Send</li>
      </ul>
    </ParallaxLayer>
  );
};
