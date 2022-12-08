import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import BlogList from "../components/HomepageFeatures/BlogList";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div
          style={{
            backgroundImage: `url("img/background.jpeg")`,
            height: "32rem",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              paddingTop: "9rem",
            }}
          >
            <h1 className="heroTitle">{siteConfig.title}</h1>
            {/* <h1>  Welcome to my Blog </h1> */}
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                New Recipes 👩‍🍳🍳
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <BlogList />
      </main>
    </Layout>
  );
}
