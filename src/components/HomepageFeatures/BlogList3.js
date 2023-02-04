import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

import Image1 from "@site/static/img/bread.jpeg";
import Image2 from "@site/static/img/french_bread.jpeg";


// fix issue with images
// const App = () => {
//   const myImageStyle = { width: '600px', height: '500px' };

//   return (
//      <div>
//         <img style={myImageStyle} src={Image3} alt="" />
//      </div>
//   );
// };

import Link from "@docusaurus/Link";

function Post({ title, desc, img, linkname, linkpath }) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={linkpath}>
        <div className="text--center">
          <img className={styles.featureSvg2} src={img} />;
        </div>
        <div className="text--center padding-horiz--sm">
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
            linkname=" Art to Tasty Bread"
            linkpath="blog/mdx-blog-post"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image2}
            linkname="Fluffy Artisian Bread "
            linkpath="/blog/oats"
          />
        </div>
      </div>
    </section>
  );
}

// {FeatureList.map((props, idx) => (
//   <Feature key={idx} {...props} />
// ))}
