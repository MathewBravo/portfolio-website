import { CopyButton, ActionIcon, Tooltip } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons";

export default function ContactPage() {
  return (
    <>
      <div className="contact">
        <h1 className="contact-title">
          Contact Info <span className="contact-bracket">&#123;</span>
        </h1>
        <div className="contact-indent">
          <h3 className="contact-gray">
            <span className="contact-purple">let</span>&nbsp;email ={" "}
            <span className="contact-yellow">String</span>::
            <span className="contact-blue">from</span>(
            <span className="contact-green">"mathewbravo94@gmail.com"</span>);
          </h3>
          <h3 className="contact-blue">
            {" "}
            <a
              href="https://www.linkedin.com/in/mathew-bravo-9b55a61a4"
              target="_blank"
              rel="noreferrer"
            >
              get_linkedin<span className="contact-gray">(</span>
              <span className="contact-red">click_me</span>
              <span className="contact-gray">);</span>
            </a>
          </h3>
          <h3 className="contact-blue">
            {" "}
            <a
              href="https://github.com/MathewBravo"
              target="_blank"
              rel="noreferrer"
            >
              get_github<span className="contact-gray">(</span>
              <span className="contact-red">click_me</span>
              <span className="contact-gray">);</span>
            </a>
          </h3>
        </div>
        <h1 className="contact-title">
          <span className="contact-bracket">&#125;</span>
        </h1>
      </div>
    </>
  );
}
