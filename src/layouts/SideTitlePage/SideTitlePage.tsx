import React, { FC } from "react";
import { PageTitle } from "../../store/constants.type";
import "./SideTitlePage.scss";

type SideTitlePageProps = {
  pageId?: string;
  pageTitle: PageTitle;
  classNames?: string;
  children: React.ReactElement;
  containerClassNames?: string;
};

export const SideTitlePage: FC<SideTitlePageProps> = ({
  pageTitle,
  classNames,
  children = "",
  pageId,
  containerClassNames,
}) => {
  return (
    <section id={`#${pageId?.toLowerCase()}`} className={`page-side-title-wrapper ${classNames}`}>
      <section className={`page-side-container ${containerClassNames}`}>{children}</section>
      <h1 className="page-side-title">{`<${pageTitle}/>`}</h1>
    </section>
  );
};

