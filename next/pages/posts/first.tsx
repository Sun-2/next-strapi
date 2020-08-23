// @ts-ignore
import { Remarkable } from "remarkable";
import hljs from "highlight.js";

import React from "react";
import styled from "styled-components";

const Markdown = styled.div`
  max-width: 800px;
  margin: 200px auto 200px;
  line-height: 170%;
  font-size: 1.9rem;
  padding: 24px;
  letter-spacing: 0.02rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 185%;
  }

  & img {
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    padding-left: 3.2rem;
  }
  
  & > pre > code {
    display: block;
    margin: 0 1rem;
    padding: 0.8rem 1rem;
    border-color: #e4e4e4;
    border-style: solid;
    border-width: 0px 1px;
    overflow-x: auto;
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1.25rem;
    }
  }

  & p code {
    display: inline;
    color: #7214d8;
  }

  & hr {
    margin: 24px auto;
    width: 90%;
  }

  & blockquote {
    position: relative;
    margin: 0 1rem;
    padding-left: 1.5rem;
    border-left-style: solid;
    border-right-style: dashed;

    border-color: #dadada;
    display: block;

    border-width: 0 1px 0 1rem;
  }

  /* HIGHLIGHT START */

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
  /* HIGHLIGHT END */
`;

export default function First({ post, comments }) {
  return (
    <>
      <h1>{post.title}</h1>
      <small>{post.created}</small>
      <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
      <div>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.content}</p>
        ))}
      </div>
    </>
  );
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
      post: { html, title: post1.title, created: post1.created },
      comments: post1.comments,
    },
    revalidate: 50,
  };
}
