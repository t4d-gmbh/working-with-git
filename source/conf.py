from setuptools_scm import get_version

# ###
# Versioning - get it from the git tag
# ###
version: str = get_version(root='..')
release = version

# ###
# Basic Project info
# ###
project = 'Working With Git'
copyright = '2023-2024, T4D GmbH'
author = 'Jonas I. Liechti'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "myst_parser",
    "sphinx_favicon",
    "sphinx_design",
    "sphinx_tabs.tabs",
]

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_book_theme'
html_static_path = ['_static']
html_css_files = ['custom.css',]

html_context = {
    "default_mode": "light",
}

html_theme_options = {
    "repository_url": "https://github.com/t4d-gmbh/working-with-git",
    "repository_branch": "main",
    "path_to_docs": "source/",
    "use_edit_page_button": True,
    "use_repository_button": True,
    "toc_title": "Content",
    "use_sidenotes": True,
    "logo": {
        "text": "T4D GmbH",
        "image_light": "_static/T4D_logo_bw.svg",
        "image_dark": "_static/T4D_logo_wb.svg",
        "link": "https://t4d.ch",
        },
    "show_toc_level": 2,  # Show the table of contents up to level 2
    "navigation_with_keys": True,  # Enable keyboard navigation
    "collapse_navigation": False,  # Do not collapse the navigation
    # "sidebar_width": "250px",  # Set the width of the sidebar
    "icon_links": [
        {
            "name": "GitHub Discussion",
            "url": "https://github.com/t4d-gmbh/working-with-git/discussions",
            "icon": "fa-regular fa-comments",
            "type": "fontawesome",
        },
        {
            "name": "Pages",
            "url": "https://t4d-gmbh.github.io/working-with-git/index.html",
            "icon": "fa-solid fa-book",
            "type": "fontawesome",
        },
        {
            "name": "Slides",
            "url": "https://t4d-gmbh.github.io/working-with-git/slides/index.html",
            "icon": "fa-solid fa-person-chalkboard",
            "type": "fontawesome",
        },
    ],
}

favicons = [
    "_static/T4D_logo_bw.svg"
]

myst_enable_extensions = [
    "colon_fence",
]

# ###
# Custom jinja parser to enable jinja templating
# ###
def rstjinja(app, docname, source):
    """
    Render source file with jinja first
    """
    # only apply to 'html' builder
    if app.builder.format == 'html':
        src = source[0]
        rendered = app.builder.templates.render_string(
            src, app.config.html_context
        )
        source[0] = rendered

def setup(app):
    app.connect("source-read", rstjinja)
