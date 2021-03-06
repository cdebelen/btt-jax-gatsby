import React from "react";
import PropTypes from "prop-types";
import { InstructorsPageTemplate } from "../../templates/instructors-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default InstructorsPageTemplate;
