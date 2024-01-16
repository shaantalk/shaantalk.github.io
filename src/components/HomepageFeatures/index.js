import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "My Work",
    link: "docs/category/my-research",
    Svg: require("@site/static/img/undraw_science_re_mnnr.svg").default,
    description: (
      <>
        <div>
          <p>
            Crafted code for Lowe's, flexed my skills at Citrix (Cloud Software
            Group), and currently weaving web wonders at Cisco.
          </p>
        </div>

        <div>
          <p>
            Check out some of the products I've worked on{" "}
            <Link to="/docs/about_me/work_experience">here</Link>
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Tools",
    link: "docs/category/tools",
    Svg: require("@site/static/img/undraw_website_builder_re_ii6e.svg").default,
    description: (
      <>
        I am the main author of{" "}
        <Link to={"docs/tools/pythermalcomfort"}>pythermalcomfort</Link>, the{" "}
        <Link to={"docs/tools/cbe-comfort-tool"}>CBE Thermal Comfort Tool</Link>
        , the <Link to={"docs/tools/cbe-clima-tool"}>CBE Clima Tool</Link>,
        Cozie for <Link to={"docs/tools/cozie"}>Apple</Link> and Fitbit, the{" "}
        <Link to={"docs/tools/heatwatch"}>HeatWatch</Link>, and SMA Extreme heat
        tool
      </>
    ),
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/@shaantalk",
    Svg: require("@site/static/img/undraw_augmented_reality_re_f0qd.svg")
      .default,
    description: (
      <>
        <p>
          I'm a YouTube educator on a mission to make coding exciting and
          accessible! Check out my video tutorials covering a galaxy of topics,
          including:
        </p>
        <ul>
          <li>
            <Link
              to="https://www.youtube.com/watch?v=wRsv7NKC70s&list=PLET-oNsFO8wweWJxKsYGyfD1ckhSDz9u_"
              target="_blank"
            >
              JavaScript Awesomeness
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com/watch?v=VBr3hGFF_l0&list=PLET-oNsFO8wwkUklXqngvwk2KxIgQt3fZ"
              target="_blank"
            >
              Mastering JS PolyFills
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com/watch?v=3cBGWnJoFew&list=PLET-oNsFO8wxcwOwN7WAJLTkhI52EBqu3"
              target="_blank"
            >
              Dive into the ReactJS Universe
            </Link>
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid key={idx} xs={12} sm={10} md={4}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
