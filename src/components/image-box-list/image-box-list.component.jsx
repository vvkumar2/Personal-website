import React from "react";
import ImageBox from "../image-box/image-box.component";

import './image-box-list.styles.css'
import python_logo from "../../images/python-logo.png";
import js_logo from "../../images/js-logo.png";
import cpp_logo from "../../images/cpp-logo.png";
import c_logo from "../../images/c-logo.png";
import java_logo from "../../images/java-logo.png";
import bash_logo from "../../images/bash-logo.png";
import react_logo from "../../images/react-logo.png";
import html_logo from "../../images/html-logo.png";
import css_logo from "../../images/css-logo.png";
import sql_logo from "../../images/sql-logo.png";
import r_logo from "../../images/r-logo.png";
import tensorflow_logo from "../../images/tensorflow-logo.png";
import sklearn_logo from "../../images/sklearn-logo.png";
import git_logo from "../../images/git-logo.png";
import lisp_logo from "../../images/lisp-logo.png";
import flask_logo from "../../images/flask-logo.png";
// import pandas_logo from "../../images/pandas-logo.png";

const ImageBoxList = (props) => {
  return (
    <div className="image-box-list">
        <ImageBox skill_name="Python" image_location={python_logo}/>
        <ImageBox skill_name="JavaScript" image_location={js_logo}/>
        <ImageBox skill_name="C++" image_location={cpp_logo}/>
        <ImageBox skill_name="C" image_location={c_logo}/>
        <ImageBox skill_name="Java" image_location={java_logo}/>
        <ImageBox skill_name="Bash" image_location={bash_logo}/>
        <ImageBox skill_name="Lisp" image_location={lisp_logo}/>
        <ImageBox skill_name="React" image_location={react_logo}/>
        <ImageBox skill_name="Flask" image_location={flask_logo}/>
        <ImageBox skill_name="HTML" image_location={html_logo}/>
        <ImageBox skill_name="CSS" image_location={css_logo}/>
        <ImageBox skill_name="SQL" image_location={sql_logo}/>
        <ImageBox skill_name="R" image_location={r_logo}/>
        <ImageBox skill_name="TensorFlow" image_location={tensorflow_logo}/>
        <ImageBox skill_name="scikit-learn" image_location={sklearn_logo}/>
        {/* <ImageBox skill_name="Pandas" image_location={pandas_logo}/> */}
        <ImageBox skill_name="Git" image_location={git_logo}/>
    </div>
    
  );
};

export default ImageBoxList;