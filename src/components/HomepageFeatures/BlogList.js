import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

import Image1 from "@site/static/img/macarons.jpeg";
import Image2 from "@site/static/img/blended_oats.jpeg";
import Image3 from "@site/static/img/french_bread.jpeg";
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
            linkname=" Perfecting Macarons"
            linkpath="blog/mdx-blog-post"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image2}
            linkname="Blended Baked Oats"
            linkpath="/blog/first-blog-post"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image3}
            linkname="Taste the Crunch"
            linkpath="blog/welcome"
          />
        </div>
      </div>
    </section>
  );
}

// {FeatureList.map((props, idx) => (
//   <Feature key={idx} {...props} />
// ))}
