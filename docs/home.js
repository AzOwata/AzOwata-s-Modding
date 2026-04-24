document.addEventListener('DOMContentLoaded', async () => {
    try {
        const jsonResponse = await fetch('./articles.json');
        const articles = await jsonResponse.json();

        const modloaderSelect = document.getElementById('modloader-select');
        const versionSelect = document.getElementById('version-select');
        const articleListElement = document.getElementById('article-list');

        const renderArticleList = () => {
            const selectedML = modloaderSelect.value;
            const selectedVer = versionSelect.value;
            const jsonML = articles[selectedML] || {};
            const jsonVer = jsonML[selectedVer] || {};

            articleListElement.innerHTML = `
                <ul>
                    ${Object.entries(jsonVer).map(([id, article]) => `
                        <li><a href="./article/index.html?ml=${selectedML}&ver=${selectedVer}&id=${id}">${article.title}</a></li>
                    `).join('')}
                </ul>
            `;
        };

        modloaderSelect.addEventListener('change', renderArticleList);
        versionSelect.addEventListener('change', renderArticleList);

        renderArticleList();
    } catch (error) {
        console.error(error);
    }
});