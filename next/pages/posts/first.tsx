// @ts-ignore
import { Remarkable } from "remarkable";
import hljs from "highlight.js";

import React, { useEffect, useState } from "react";
import Post from "../../src/components/post";

export default function First({ comments, post: { html, title, date } }) {
  return <Post comments={undefined} html={html} title={title} date={date} />;
}

export async function getStaticProps() {
  const resp = await fetch("http://localhost:1337/posts");
  const json = await resp.json();

  const md = new Remarkable("full", {
    html: false, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />)
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: "language-", // CSS language prefix for fenced blocks
    linkTarget: "_blank", // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer: true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",

    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return ""; // use external default escaping
    },
  });

  const post1 = json[0];
  const html = md.render(post1.content);

  return {
    props: {
      post: { html, title: post1.title, date: post1.creationTimeDisplayed },
    },
    revalidate: 50,
  };
}
