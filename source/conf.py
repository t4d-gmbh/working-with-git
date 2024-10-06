# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Working With Git'
copyright = '2023, T4D GmbH'
author = 'Jonas I. Liechti'
release = '0.1'

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

html_theme_options = {
    "repository_url": "https://github.com/t4d-gmbh/working-with-git",
    "repository_branch": "main",
    "path_to_docs": "source/",
    "use_edit_page_button": True,
    "use_repository_button": True,
    "toc_title": "Content",
    "use_sidenotes": True,
    "logo": {
        "image_light": "_static/T4D_logo_bw.svg",
        "image_dark": "_static/T4D_logo_wb.svg",
        "link": "https://t4d.ch",
        },
    "show_toc_level": 2,  # Show the table of contents up to level 2
    "navigation_with_keys": True,  # Enable keyboard navigation
    "collapse_navigation": False,  # Do not collapse the navigation
    # "sidebar_width": "250px",  # Set the width of the sidebar
}

favicons = [
    "_static/T4D_logo_bw.svg"
]

myst_enable_extensions = [
    "colon_fence",
]
