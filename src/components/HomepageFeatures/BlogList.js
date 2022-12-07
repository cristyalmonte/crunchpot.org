import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

import Image1 from "@site/static/img/stock.jpeg";
import Image2 from "@site/static/img/pasta.png";
import Image3 from "@site/static/img/stock2.jpeg";
import Link from "@docusaurus/Link";

function Post({ title, desc, img, linkname, linkpath }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={linkpath}>
        <div className="text--center">
          <img className={styles.featureSvg} src={img} />;
        </div>
        <div className="text--center padding-horiz--md">
          {/* <h3>{title}</h3> */}
          <h3>{linkname}</h3>
        </div>
      </Link>
    </div>
  );
}

export default function BlogList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Post
            title="Title"
            desc="desc"
            img={Image1}
            linkname="macorrooonns"
            linkpath="blog/mdx-blog-post"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image2}
            linkname=""
            linkpath=""
          />
          <Post
            title="Title"
            desc="desc"
            img={Image3}
            linkname=""
            linkpath=""
          />
        </div>
      </div>
    </section>
  );
}

// {FeatureList.map((props, idx) => (
//   <Feature key={idx} {...props} />
// ))}
