import { marked, Renderer } from 'https://cdn.jsdelivr.net/npm/marked@18/lib/marked.esm.js';

function escapeHtml(text) {
    if (typeof text !== 'string') {
        return text;
    }
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

document.addEventListener("DOMContentLoaded", async () => {
    const basePath = window.location.pathname.match(/^\/[^/]+/)?.[0] || '/';

    const paramator = new URLSearchParams(window.location.search);
    const paramatorML = paramator.get("ml");
    const paramatorVer = paramator.get("ver");
    const paramatorId = paramator.get("id");

    console.log(`ML: ${paramatorML}, Ver: ${paramatorVer}, Article: ${paramatorId}`);

    try {
        const jsonResponse = await fetch(`${basePath}/articles.json`);
        const articles = await jsonResponse.json();
        
        const jsonML = articles[paramatorML];
        const jsonVer = jsonML[paramatorVer];
        const jsonId = jsonVer[paramatorId];

        let title;
        let description;
        let mdResponse;
        if (paramatorML && !paramatorVer && !paramatorId) {
            title = jsonML.title;
            description = jsonML.description;
            mdResponse = await fetch(`${basePath}/articles/${paramatorML}.md`);
        } else if (paramatorML && paramatorVer && !paramatorId) {
            title = jsonVer.title;
            description = jsonVer.description;
            mdResponse = await fetch(`${basePath}/articles/${paramatorML}/${paramatorVer}.md`);
        } else {
            title = jsonId.title;
            description = jsonId.description;
            mdResponse = await fetch(`${basePath}/articles/${paramatorML}/${paramatorVer}/${paramatorId}.md`);
        }
        const mdText = await mdResponse.text();

        const renderer = new Renderer();
        renderer.code = function(token) {
            const code = token.text || token.raw || '';
            const infostring = token.lang || '';
            
            let language = '';
            let filename = '';
            if (infostring) {
                const parts = infostring.trim().split(/\s+/);
                language = parts[0];
                if (parts.length > 1) {
                    filename = parts.slice(1).join(' ');
                }
            }
            let html = '<div class="code">';
            if (filename) {
                html += `<div class="code__title"><span class="code__language">${language}</span><span class="code__filename">${filename}</span></div>`;
            }
            const codeClass = language ? `language-${language}` : '';
            const escapedCode = escapeHtml(code);
            html += `<pre><code class="${codeClass}">${escapedCode}</code></pre></div>`;
            return html;
        };

        marked.setOptions({ breaks: true });

        const articleTitleElement = document.getElementById('article-title');
        articleTitleElement.textContent = title;

        const articleDescriptionElement = document.getElementById('article-description');
        if (Array.isArray(description)) {
            articleDescriptionElement.innerHTML = description.join('<br>');
        } else {
            articleDescriptionElement.textContent = description;
        }

        const markdownElement = document.getElementById('article');
        markdownElement.innerHTML = marked.parse(mdText, { renderer: renderer });

        hljs.highlightAll();
    } catch (error) {
        console.error(error);
        document.getElementById('article-title').textContent = 'エラー';
        document.getElementById('article-description').textContent = '記事の取得に失敗しました。';
    }
}); 