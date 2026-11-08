import hljs from 'highlight.js/lib/core'
import { markedHighlight } from 'marked-highlight'

// Languages you can put after ``` in a post. To add one, import it from
// 'highlight.js/lib/languages/<name>' and register it below.
import bash from 'highlight.js/lib/languages/bash'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import go from 'highlight.js/lib/languages/go'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import latex from 'highlight.js/lib/languages/latex'
import python from 'highlight.js/lib/languages/python'
import rust from 'highlight.js/lib/languages/rust'
import sql from 'highlight.js/lib/languages/sql'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'

const languages = {
  bash, c, cpp, go, java, javascript, json, latex, python, rust, sql, typescript, xml, yaml,
}
for (const [name, lang] of Object.entries(languages)) hljs.registerLanguage(name, lang)
// (Each language also registers its own aliases: py, js, ts, sh, c++, html, tex, yml…)

export const codeHighlighting = markedHighlight({
  emptyLangClass: 'hljs',
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    // ```python → highlight as Python. No language or an unknown one → plain text.
    return lang && hljs.getLanguage(lang) ? hljs.highlight(code, { language: lang }).value : code
  },
})
