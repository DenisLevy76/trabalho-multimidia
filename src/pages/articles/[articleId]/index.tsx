import { ContainerComponent } from '../../../components/container';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { ArticleContainer } from '../[articleId]/styles';

export default function Home() {
  return (
    <ArticleContainer>
      <ContainerComponent>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >{`
## Overview
* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using 'dangerouslySetInnerHTML'
* Lets you define your own components (to render 'MyHeading' instead of 'h1')
* Has a lot of plugins
## Table of contents
Here is an example of a plugin in action
(['remark-toc'](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.
## Syntax highlighting
Here is an example of a plugin to highlight code:
['rehype-highlight'](https://github.com/rehypejs/rehype-highlight).
Here is some JavaScript code:
`}</ReactMarkdown>
      </ContainerComponent>
    </ArticleContainer>
  );
}
