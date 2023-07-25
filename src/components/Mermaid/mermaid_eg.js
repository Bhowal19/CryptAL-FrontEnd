import mermaid from "mermaid";

async function renderMermaid(elementId, graphDef) {
  mermaid.mermaidAPI.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose",
    fontFamily: "monospace",
  });

  element = document.querySelector(elementId);
  console.log("Calling mermaid.render...");
  const { renderedImage, bindFunctions } = await mermaid.render(elementId, graphDef);

  element.innerHTML = renderedImage;
  // bindFunctions.apply(element);

  return renderedImage;
}

export default function MermaidComponent() {
  const mermaid_def = ```
    pie title NETFLIX
         "Time spent looking for movie" : 90
         "Time spent watching it" : 10
    ```;

  return (
    <>
      <div id="mermaidgraph">{renderMermaid("#mermaidgraph", mermaid_def)}</div>
    </>
  );
}
