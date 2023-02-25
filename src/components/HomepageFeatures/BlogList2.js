import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Search from 'react-search-input';

import Image1 from "@site/static/img/greek_salad.jpeg";
import Image2 from "@site/static/img/oat_muffins.jpeg";
import Image3 from "@site/static/img/pizza.jpeg";

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
            linkname="Best Salad Recipe"
            linkpath="docs/Appetizer/3"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image2}
            linkname="Best Blueberry Oat Muffins"
            linkpath="/docs/Desserts/Bluberry%20Oat%20Muffins"
          />
          <Post
            title="Title"
            desc="desc"
            img={Image3}
            linkname="Pizza Pizza"
            linkpath="/docs/Dinner/Pizza"
          />
        </div>
      </div>
    </section>
  );
}

// {FeatureList.map((props, idx) => (
//   <Feature key={idx} {...props} />
// ))}
