import React, { useMemo } from "react";
import { Markdown } from "./markdown";
import styled from "styled-components";
import { Title } from "./title";
import { Date as DateComponent } from "./date";
import { months } from "../../../utils/months";
import { colorInterpolate } from "../../../utils/colorInterpolate";

interface PostProps {
  html: string;
  title: string;
  date: string;

  comments: {};
}

export default function Post({
  title,
  date: dateString,
  html,
  comments,
}: PostProps) {
  const displayDate = useMemo(() => {
    // @ts-ignore
    const date = new Date(dateString);
    return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }, [dateString]);

  return (
    <RootWrapper>
      <Title>{title}</Title>
      <DateComponent>{displayDate}</DateComponent>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </RootWrapper>
  );
}

const RootWrapper = styled.main`
  margin: 0 auto;
  max-width: 800px;
  padding: 24px;
`;
