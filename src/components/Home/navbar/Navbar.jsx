import { Group, UnstyledButton } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Group className="navbar-main">
        <Group className="navbar-main__logo">
          <UnstyledButton
            component="a"
            href="https://github.com/MathewBravo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub color="#56b6c2" />
          </UnstyledButton>
          <div className="navbar-main__home" onClick={navHome}>
            <h3 className="navbar-main__name">
              MathewBravo
              <span className="navbar-main__name__function">.home()</span>
            </h3>
            <h5 className="navbar-main__email">mathewbravo@gmail.com</h5>
          </div>
        </Group>
        <Group className="navbar-main__navigators" sx={{ display: "flex" }}>
          <div>
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </Group>
      </Group>
    </div>
  );
}
