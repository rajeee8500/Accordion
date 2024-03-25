import React from "react";

import Accordion from "react-bootstrap/Accordion";

function AccordionPage() {
  return (
    <div className="accordion1">
      <Accordion>
        <Accordion.Item eventKey="0" className="m-5">
          <Accordion.Header>What is HTML?</Accordion.Header>
          <Accordion.Body>
            HyperText Markup Language or HTML is the standard markup language
            for documents designed to be displayed in a web browser. It defines
            the content and structure of web content. It is often assisted by
            technologies such as Cascading Style Sheets (CSS) and scripting
            languages such as JavaScript. Web browsers receive HTML documents
            from a web server or from local storage and render the documents
            into multimedia web pages. HTML describes the structure of a web
            page semantically and originally included cues for its appearance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="m-5">
          <Accordion.Header>What is CSS?</Accordion.Header>
          <Accordion.Body>
            Cascading Style Sheets (CSS) is a style sheet language used for
            specifying the presentation and styling of a document written in a
            markup language such as HTML or XML (including XML dialects such as
            SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the
            World Wide Web, alongside HTML and JavaScript.[2] CSS is designed to
            enable the separation of content and presentation, including layout,
            colors, and fonts.[3] This separation can improve content
            accessibility;[further explanation needed] provide more flexibility
            and control in the specification of presentation characteristics;
            enable multiple web pages to share formatting by specifying the
            relevant CSS in a separate .css file, which reduces complexity and
            repetition in the structural content; and enable the .css file to be
            cached to improve the page load speed between the pages that share
            the file and its formatting.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="m-5">
          <Accordion.Header>What is JavaScript?</Accordion.Header>
          <Accordion.Body>
            JavaScript often abbreviated as JS, is a programming language and
            core technology of the Web, alongside HTML and CSS. 99% of websites
            use JavaScript on the client side for webpage behavior.[10] Web
            browsers have a dedicated JavaScript engine that executes the client
            code. These engines are also utilized in some servers and a variety
            of apps. The most popular runtime system for non-browser usage is
            Node.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="m-5">
          <Accordion.Header>What is React?</Accordion.Header>
          <Accordion.Body>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library for building user interfaces based on
            components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies. React can be used
            to develop single-page, mobile, or server-rendered applications with
            frameworks like Next.js. Because React is only concerned with the
            user interface and rendering components to the DOM, React
            applications often rely on libraries for routing and other
            client-side functionality. A key advantage of React is that it only
            rerenders those parts of the page that have changed, avoiding
            unnecessary rerendering of unchanged DOM elements.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionPage;
